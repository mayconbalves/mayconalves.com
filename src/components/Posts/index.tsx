import React from 'react'
import * as S from './styled'
import { PostsProps } from './types'
import Icons from './icons'

const Posts = (
  {
    background,
    slug,
    category,
    date,
    timeToRead,
    title,
    description
  }: PostsProps) => {

  const Categories = Icons[category]
  return (
    <S.PostItemLink to={slug} rel="canonical">
      <S.Wrapper>
        <S.PostTag background={background}><Categories /></S.PostTag>
        <S.PostItemInfo>
          <S.PostItemDate>{date} - {timeToRead} min para ler</S.PostItemDate>
          <S.PostTitle>{title}</S.PostTitle>
          <S.PostDescription>{description}</S.PostDescription>
        </S.PostItemInfo>
      </S.Wrapper>
    </S.PostItemLink>
  )
}

export default Posts
