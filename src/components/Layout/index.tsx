import * as React from 'react'
import { Props } from './types'
import Navbar from '../Navbar'

import * as S from './styled'
import GlobalStyles from '../../styles/globalStyles'


const Layout = ({ children }: Props) => {
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
