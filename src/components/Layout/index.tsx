import * as React from 'react'
import { Props } from './types'
import Footer from '../Footer'
import Navbar from '../Navbar'

import * as S from './styled'
import GlobalStyles from '../../styles/globalStyles'
import Hero from '../HeroHomePage'


const Layout = ({ children }: Props) => {
  return (
    <S.Wrapper>
      <Hero />
      <Navbar />
      <GlobalStyles />
      <S.Main>
        {children}
      </S.Main>
      <Footer />
    </S.Wrapper>
  )
}

export default Layout
