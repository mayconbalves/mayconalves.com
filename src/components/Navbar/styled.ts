import styled from 'styled-components'
import { Link } from 'gatsby'

export const Wrapper = styled.nav`
  background-color: rgba(15, 23, 42, .8);
  top: 0;
  display: flex;
  height: 50px;
  position: absolute;
  width: 100%;
  font-weight: 700;
`

export const List = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;
  max-width: 1080px;
  margin: 0 auto;
`

export const NavTitle = styled.h1`
  background-color: #22d3ee;
  background-image: linear-gradient(#22d3ee, #0ea5e9);
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
`

export const Item = styled.li`
  margin: 0 15px;
`

export const NavLink = styled(Link)`
  color: var(--link-color);
  text-decoration: none;

  &:hover {
    color: var(--link-highlight);
  }
`
