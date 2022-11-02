import styled from 'styled-components'
import { Link as _Link } from 'gatsby'

export const Wrapper = styled.section`
  align-items: center;
  color: var(--primary-color);
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 3rem;
`

export const Link = styled(_Link)`
  color: var(--primary-color);
  margin: 0 .5rem;
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: var(--highlight-color);
  }
`
