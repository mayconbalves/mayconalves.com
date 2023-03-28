import styled from 'styled-components'
import { Link } from 'gatsby'
import media from 'styled-media-query'


export const Container = styled.div`
  flex-direction: column;
  display: flex;
  min-height: 100vh;
  margin: auto;
  max-width: 60rem;
  padding: 2rem 0;

  ${media.lessThan('large')`
    padding: 2rem 0;
    max-width: 100%;
  `}
  p,
  h3,
  h4 {
    color: var(--primary-color);
    font-size: 1.25rem;
    font-weight: 300;
    line-height: 1.7;
    letter-spacing: 0.069rem;
    padding: 0 1.4rem;
    ${media.lessThan('large')`
      padding: 0 1rem;
      word-break: break-word;
    `}
  }
  p {
    margin: 0 auto 1.6rem;
  }
  h2,
  h3,
  h4,
  h5 {
    margin: 2.4rem auto 1rem;
    color: var(--title-color);
  }
`
export const Title = styled.h2`
  color: #fff !important;
  font-size: 2.1rem;
  font-weight: 800;
  line-height: 3;
  letter-spacing: 0.069rem;
  padding: 0 1.4rem;
`

export const Span = styled.span`
  color: #22d3ee;
`

export const WrapperProject = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  max-width: 70rem;
  margin: 0 auto;
  justify-content: center;
`

export const ProjectCard = styled.div`
  background-color: #1E293B66;
  max-height: 300px;
  max-width: 1150px;
  border-radius: 20px;
  padding: 30px;
`

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 10px 0;
`

export const Li = styled.li`
  margin: 15px 0;
`

export const NavLink = styled(Link)`
  color: var(--link-color);
  text-decoration: none;

  &:hover {
    color: var(--link-highlight);
  }
`
