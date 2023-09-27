import React from 'react'
import { links } from './Content'
import Icons from './Icons'
import * as S from './styled'

const Navbar = () => {
  return (
    <S.Wrapper>
      <S.WrapperTitle>
        <S.TitleLink to="/">
          <S.Title>Maycon Alves</S.Title>
        </S.TitleLink>
      </S.WrapperTitle>

      <S.List>
        {
          links.map((link, i) => {
            const Icon = Icons[link.label]

            return (
              <S.Item key={i}>
                <S.SocialMedia
                  href={link.url}
                  target="_blank"
                  title={link.label}
                  rel="noopener noreferrer"
                >
                  <S.IconWrapper>
                    <Icon />
                  </S.IconWrapper>
                </S.SocialMedia>
              </S.Item>
            )
          })
        }
      </S.List>
    </S.Wrapper>
  )
}

export default Navbar
