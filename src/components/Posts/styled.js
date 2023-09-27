import { Link } from 'gatsby'
import styled from 'styled-components'


export const PostItemLink = styled(Link)`
  color: var(--primary-color);
  display: grid;
  text-decoration: none;
  height: 350px;
  width: 330px;
  border-style: solid;
  border-width: 0 0 3px 0;
  border-color: ${props => props.background};
`

export const PostTag = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 80px;
  position: relative;
  width: 100%;

  svg {
    color: ${props => props.background};
    height: 100px;
  }
`

export const Wrapper = styled.section`
  animation: card 2s infinite;
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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
