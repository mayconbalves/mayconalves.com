import styled from 'styled-components'

export const Hero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 300px;
`

export const Title = styled.h1`
  color: var(--title-color);
  margin: 0 !important;
`

export const Span = styled.span`
  transition: scale 400ms;
  display: inline-block;
  letter-spacing: .4rem;
  &:hover {
    cursor: pointer;
    color: var(--link-highlight);
    scale: 1.5;
  }
`

export const Subtitle = styled.p`
  font-size: 1.4rem !important;
  margin: 0 !important;
`
