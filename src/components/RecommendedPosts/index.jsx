import React from 'react'

import * as S from './styled'

const RecomendedPosts = ({ next, previous }) => {
  return (
    <S.Wrapper>
      {previous && (
        <>
          <S.Link to={previous.fields.slug}>
            {previous.frontmatter.title}
          </S.Link>
          <S.Button to={previous.fields.slug}>
            Post Anterior
          </S.Button>
        </>
      )}

      {next && (
        <>
          <S.Link to={next.fields.slug} className="next">
            {next.frontmatter.title}
          </S.Link>

          <S.Button to={next.fields.slug}>
            Próximo Post
          </S.Button>
        </>
      )}
    </S.Wrapper>
  )
}

export default RecomendedPosts
