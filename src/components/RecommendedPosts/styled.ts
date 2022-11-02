import styled from 'styled-components'
import { Link as Linked } from 'gatsby'

export const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
`

export const Link = styled(Linked)`
  align-items: center;
  border: none !important;
  display: flex;
  padding: 2rem;
  `
