import styled from 'styled-components'
import { Link } from 'gatsby'

export const Wrapper = styled.nav`
  background-color: #fff;
  height: 60px;
  font-weight: 800;
  display: flex;
  justify-content: space-around;
	width: 100%;
`

export const List = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  width: auto;
`

export const WrapperTitle = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
`

export const Title = styled.h1`
  color: var(--title-color);
`

export const Item = styled.li`
  align-items: center;
  display: flex;
  margin: 0 10px;
  height: 100%;
  justify-content: center;
`

export const TitleLink = styled(Link)`
  color: var(--link-color);
  text-decoration: none;
`

export const SocialMedia = styled.a`
  color: var(--link-color);
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: #000;
  }
`

export const IconWrapper = styled.div`
  fill: #fff;
  height: 30px;
  width: 30px;
`
