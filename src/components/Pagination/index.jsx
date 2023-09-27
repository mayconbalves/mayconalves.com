import React from 'react'

import * as S from './styled'

const Pagination = ({ isFirst, isLast, currentPage, numPages, prevPage, nextPage }) => {
  return (
    <S.Wrapper>
      {!isFirst && <S.Link to={prevPage}>{`<- página anterior`}</S.Link>}
      <p>{currentPage} de {numPages}</p>
      {!isLast && <S.Link to={nextPage}>{`próxima página ->`}</S.Link>}
    </S.Wrapper>
  )
}

export default Pagination
