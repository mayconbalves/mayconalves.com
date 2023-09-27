import * as React from 'react'
import Navbar from '../Navbar'
import Pagination from '../Pagination'

import GlobalStyles from '../../styles/globalStyles'
import * as S from './styled'


const PostItemsLayout = ({ children, currentPage, numPages }) => {
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? '/' : `/page/${currentPage -1}`
  const nextPage = `/page/${currentPage + 1}`
  return (
    <>
      <Navbar />
      <GlobalStyles />
      <S.Main>
        {children}
      </S.Main>
      <S.Pagination>
        <Pagination
          isFirst={isFirst}
          isLast={isLast}
          currentPage={currentPage}
          numPages={numPages}
          prevPage={prevPage}
          nextPage={nextPage}
        />
      </S.Pagination>
    </>
  )
}

export default PostItemsLayout
