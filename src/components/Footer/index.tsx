import React from 'react'
import { links } from './Content'
import Icons from './Icons'

import * as S from './styled'

const Footer = () => {
  return (
    <S.Wrapper>
      <S.LinksList>
        {
          links.map((link, i) => {
            const Icon = Icons[link.label]

            return (
              <S.LinksItem key={i}>
                <S.Link
                  href={link.url}
                  target="_blank"
                  title={link.label}
                  rel="noopener noreferrer"
                >
                  <S.IconWrapper>
                    <Icon />
                  </S.IconWrapper>
                </S.Link>
              </S.LinksItem>
            )
          })
        }
      </S.LinksList>
    </S.Wrapper>
  )
}

export default Footer
