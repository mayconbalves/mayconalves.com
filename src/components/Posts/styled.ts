import styled from 'styled-components'
import { Link } from 'gatsby'

import { StyledProps } from './types'

export const PostItemLink = styled(Link)`
  color: var(--primary-color);
  display: grid;
  text-decoration: none;
  height: 450px;
  width: 330px;
  transition: scale 400ms;

  &:hover {
    box-shadow: 1px 1px 35px 1px #000;
    scale: 1.1;
  }
`

export const PostTag = styled.div<StyledProps>`
  align-items: center;
  bottom: 13px;
  display: flex;
  justify-content: center;
  height: 180px;
  position: relative;
  width: 100%;

  svg {
    color: #000;
    height: 100px;
  }
`

export const Wrapper = styled.section`
  animation: card 2s infinite;
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-style: solid;
  border-width: 2px 10px 10px 2px;
  border-color: #000;
`

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 5px;
  min-height: 200px;
`

export const PostItemDate = styled.time`
  text-align: center;
  font-size: 1rem;
  font-weight: 900;
`

export const PostTitle = styled.h1`
  text-align: center;
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.5rem 0;
  color: var(--title-color);
`

export const PostDescription = styled.p`
  text-align: center;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.2;
`
