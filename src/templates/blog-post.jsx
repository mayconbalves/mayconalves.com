import { graphql } from 'gatsby'
import React from 'react'

import Grid from '../components/Grid'
import Layout from '../components/Layout'
import ProgressBar from '../components/ProgressBar'
import RecomendedPosts from '../components/RecommendedPosts'
import SEO from '../components/Seo'

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

const BlogPost = ({ data, pageContext }) => {
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
