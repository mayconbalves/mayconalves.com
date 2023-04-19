import React from 'react'

import { Props } from './types'
import * as S from './styled'

const Grid = ({ children }: Props) => {
  return (
    <S.Wrapper>
      {children}
    </S.Wrapper>
  )
}

export default Grid
