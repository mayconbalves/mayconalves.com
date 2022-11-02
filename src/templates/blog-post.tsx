import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import RecomendedPosts from '../components/RecommendedPosts'
import ProgressBar from '../components/ProgressBar'
import SEO from '../components/Seo'
import Grid from '../components/Grid'

export type Props = {
  data: {
    markdownRemark: {
      fields: {
        slug: string
      },
      frontmatter: {
        title: string
        description: string
        date: string
        image: string
      },
      html: string
    }
  }
  pageContext: {
    nextPost: {
      fields: {
        slug: string
      },
      frontmatter: {
        title: string
      }
    },
    previousPost: {
      fields: {
        slug: string
      },
      frontmatter: {
        title: string
      }
    }
  }
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        description
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
        image
      }
      html
      timeToRead
    }
  }
`

const BlogPost = ({ data, pageContext }: Props) => {
  const post = data.markdownRemark
  const next = pageContext.nextPost
  const previous = pageContext.previousPost

  return (
    <Layout>
      <ProgressBar />
      <Grid>
        <SEO
          lang="pt-br"
          title={post.frontmatter.title}
          description={post.frontmatter.description}
          image={post.frontmatter.image}
        />
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
        <RecomendedPosts next={next} previous={previous} />
      </Grid>
    </Layout>
  )
}

export default BlogPost
