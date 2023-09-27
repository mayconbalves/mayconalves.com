import React from 'react'
import Navbar from '../Navbar'

import GlobalStyles from '../../styles/globalStyles'
import * as S from './styled'


const Layout = ({ children }) => {
  return (
    <S.Wrapper>
      <Navbar />
      <GlobalStyles />
      <main>
        {children}
      </main>
    </S.Wrapper>
  )
}

export default Layout
