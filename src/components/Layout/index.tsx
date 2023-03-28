import * as React from 'react'
import { Props } from './types'
import Footer from '../Footer'
import Navbar from '../Navbar'

import * as S from './styled'
import GlobalStyles from '../../styles/globalStyles'


const Layout = ({ children }: Props) => {
  return (
    <S.Wrapper>
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
