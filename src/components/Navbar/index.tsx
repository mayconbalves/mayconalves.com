import React from 'react'
import * as S from './styled'

const Navbar = () => {
  return (
    <S.Wrapper>

      <S.List>
        <S.Item><S.NavLink to="/"><h1>Maycon Alves</h1></S.NavLink></S.Item>
        <S.Item>|</S.Item>
        <S.Item><S.NavLink to="/about">Sobre mim</S.NavLink></S.Item>
        <S.Item>|</S.Item>
        <S.Item><S.NavLink to="/blog">Blog</S.NavLink></S.Item>
      </S.List>
    </S.Wrapper>
  )
}

export default Navbar
