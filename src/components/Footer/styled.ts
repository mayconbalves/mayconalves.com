import styled from 'styled-components'

export const Wrapper = styled.footer`
  align-items: center;
  background-color: var(--footer-color);
  bottom: 0;
  display: flex;
  justify-content: center;
  height: 50px;
  position: relative;
  width: 100%;
  z-index: 2;
`

export const LinksList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`

export const LinksItem = styled.li``

export const Link = styled.a`
  color: var(--primary-color);
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: var(--link-highlight);
  }
`

export const IconWrapper = styled.div`
  fill: #fff;
  height: 30px;
  width: 30px;
`
