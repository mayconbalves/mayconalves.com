import React from 'react'

import { Props } from './types'
import * as S from './styled'

const Pagination = ({ isFirst, isLast, currentPage, numPages, prevPage, nextPage }: Props) => {
  return (
    <S.Wrapper>
      {!isFirst && <S.Link to={prevPage}>{`<- página anterior`}</S.Link>}
      <p>{currentPage} de {numPages}</p>
      {!isLast && <S.Link to={nextPage}>{`próxima página ->`}</S.Link>}
    </S.Wrapper>
  )
}

export default Pagination
