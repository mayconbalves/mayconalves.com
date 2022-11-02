import React from 'react'
import Helmet from 'react-helmet'
import useSiteMetadata from '../../hooks/site-metadata'
import { SeoProps } from './types'

const SEO = ({ description, title, image }: SeoProps) => {
  const data = useSiteMetadata()
  const metaDescription = description || data.description
  const ogImage = `${image || 'https://mayconbalves.com.br/assets/img/meublogcover.png'}`
  return (
    <Helmet
      htmlAttributes={{
        lang: 'pt-BR'
      }}
      titleTemplate={`%s | ${data.title}`}
      title={title}
      meta={[
        {
          name: `google-site-verification`,
          content: `BKrBH9u1JzhN5tCbycPHSSr1yutuXkNyJZ7A`
        },
        {
          name: `robots`,
          content: `index, follow`
        },
        {
          name: `googlebot`,
          content: `index, follow`
        },
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:image`,
          content: ogImage
        },
        {
          property: `og:title`,
          content: `${title} | ${data.title}`
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          property: `og:site_name`,
          content: `Maycon Alves`
        },
        {
          property: `og:locale`,
          content: `pt-BR`
        },
        {
          property: `og:url`,
          content: `https://mayconbalves.com.br`
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`
        },
        {
          name: `twitter:image`,
          content: ogImage
        },
        {
          name: `twitter:title`,
          content: `${title} | ${data.title}`
        },
        {
          name: `twitter:description`,
          content: metaDescription
        }
      ]}
    />
  )
}
export default SEO
