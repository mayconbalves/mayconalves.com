import { Link as Linked } from 'gatsby'
import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
`

export const Link = styled(Linked)`
  align-items: center;
  border: none !important;
  display: flex;
  padding: 2rem;

  ${media.lessThan('medium')`
    display: none;
  `}
`

export const Button = styled(Linked)`
  border: none !important;
  padding: 2rem;

  ${media.greaterThan('medium')`
    display: none;
  `}
`
