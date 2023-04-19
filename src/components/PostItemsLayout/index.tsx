import * as React from 'react'
import { Props } from './types'
import Navbar from '../Navbar'
import Pagination from '../Pagination'

import * as S from './styled'
import GlobalStyles from '../../styles/globalStyles'


const PostItemsLayout = ({ children, currentPage, numPages }: Props) => {
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
