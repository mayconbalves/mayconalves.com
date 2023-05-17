import React from 'react'
import { graphql } from 'gatsby'

import PostItemLayout from '../components/PostItemsLayout'
import PostItem from '../components/Posts'
import SEO from '../components/Seo'

interface Props {
  data: {
    allMarkdownRemark: {
      edges: {
        map(arg0: ({ node }: { node: { fields: { slug: string }, timeToRead: string, frontmatter: {
          background: string
          category: string
          date: string
          description: string
          title: string
        } } }) =>
          JSX.Element): React.ReactElement<never, string | React.JSXElementConstructor<unknown>>
        node: {
          frontmatter: {
            background: string
            category: string
            date: string
            description: string
            title: string
          }
        }
      }
    }
  },
  pageContext: {
    siteMetadata: {
      title: string
      description: string
      image: string
    }
    currentPage: number
    numPages: number
  }
}

const BlogList = (props: Props) => {
  const postList = props.data.allMarkdownRemark.edges
  const { currentPage, numPages, } = props.pageContext

  return (
    <>
      <PostItemLayout currentPage={currentPage} numPages={numPages}>
        <SEO
          lang="pt-br"
          title="Blog"
        />
        {postList.map(({ node }) => {
          const { background, category, date, description, title } = node.frontmatter
          const { slug } = node.fields
          return (
            <PostItem
              slug={slug}
              key={title}
              background={background}
              category={category}
              date={date}
              timeToRead={node.timeToRead}
              title={title}
              description={description}
            />
          )
        }
        )}
      </PostItemLayout>
    </>
  )
}

export const query = graphql`
  query PostList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
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
            title
          }
          timeToRead
        }
      }
    }
  }
`

export default BlogList
