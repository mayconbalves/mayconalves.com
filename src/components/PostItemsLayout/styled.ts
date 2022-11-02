import styled  from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  margin: auto;
  max-width: 70rem;
  padding: 2rem 1rem;
`

export const Main = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  row-gap: 40px;
  justify-items: center;
  background-color: var(--background-color);
  margin: 100px auto 0;
  max-width: 70rem;
`

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto 10%;
  width: 100%;

  ${media.greaterThan('large')`
    margin: 0 auto 5%;
  `}
`

