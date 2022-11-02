import React from 'react'

import { Props } from  './types'
import * as S from './styled'

const RecomendedPosts = ({ next, previous }: Props) => {
  return (
    <S.Wrapper>
      {previous && (
        <S.Link to={previous.fields.slug} className="previous">
          {previous.frontmatter.title}
        </S.Link>
      )}

      {next && (
        <S.Link to={next.fields.slug} className="next">
          {next.frontmatter.title}
        </S.Link>
      )}
    </S.Wrapper>
  )
}

export default RecomendedPosts
