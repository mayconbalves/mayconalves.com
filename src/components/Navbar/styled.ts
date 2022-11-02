import styled from 'styled-components'
import { Link } from 'gatsby'

export const Wrapper = styled.nav`
  background-color: var(--navbar-color);
  top: 0;
  display: flex;
  height: 50px;
  justify-content: space-around;
  position: relative;
  width: 100%;
  border-width: 2px 0;
  border-style: dashed;
  border-color: #a5a49e;
  font-weight: 800;
`

export const List = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  width: 100%;
`

export const Item = styled.li`
  margin: 0 5px;
`

export const NavLink = styled(Link)`
  color: var(--link-color);
  text-decoration: none;

  &:hover {
    color: var(--link-highlight);
  }
`
