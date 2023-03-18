import React from 'react'
import * as S from './styled'

const Navbar = () => {
  return (
    <S.Wrapper>
      <S.List>
        <S.Item><S.NavLink to="/"><S.NavTitle>Maycon Alves</S.NavTitle></S.NavLink></S.Item>
      </S.List>
      <S.List>
        <S.Item><S.NavLink to="/about">Sobre mim</S.NavLink></S.Item>
        <S.Item><S.NavLink to="/blog">Blog</S.NavLink></S.Item>
      </S.List>
    </S.Wrapper>
  )
}

export default Navbar
