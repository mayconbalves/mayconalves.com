import { createFilePath } from 'gatsby-source-filesystem'
import path from 'path'

exports.createSchemaCustomization = ({ actions, schema }: any) => {
  const { createTypes } = actions

  createTypes(`
    type MarkdownRemarkFrontmatter {
      image: String
    }
    type MarkdownRemark implements Node {
      frontmatter: MarkdownRemarkFrontmatter
    }
  `)
}

// You can delete this file if you're not using it
// To add the slug field to each post
exports.onCreateNode = ({ node, getNode, actions }: any) => {
  const { createNodeField } = actions
  // Ensures we are processing only markdown files
  if (node.internal.type === "MarkdownRemark") {
    // Use `createFilePath` to turn markdown files in our `data/faqs` directory into `/faqs/slug`
    const slug = createFilePath({
      node,
      getNode,
      basePath: "pages",
    })

    // Creates new query'able field with name of 'slug'
    createNodeField({
      node,
      name: "slug",
      value: `/${slug.slice(12)}`,
    })
  }
}

// To create the posts pages
exports.createPages = ({ graphql, actions }: any) => {
  const { createPage } = actions
  return graphql(`
    {
      allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___date] }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              background
              category
              date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
              description
              image
              title
            }
            timeToRead
          }
          next {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
          previous {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `).then((result: any) => {
    const posts = result.data.allMarkdownRemark.edges
    const siteMetadata = result.data.site.siteMetadata
    posts.forEach(({ node, next, previous }: any) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/blog-post.tsx`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,
          previousPost: next,
          nextPost: previous
        },
      })
    })

    const postsPerPage = 12
    const numPages = Math.ceil(posts.length / postsPerPage)

    Array.from({ length: numPages }).forEach((_, index) => {
      createPage({
        path: index === 0 ? `/blog` : `/page/${index + 1}`,
        component: path.resolve(`./src/templates/blog-list.tsx`),
        context: {
          limit: postsPerPage,
          skip: index * postsPerPage,
          numPages,
          currentPage: index + 1,
          siteMetadata
        },
      })
    })
  })
}
