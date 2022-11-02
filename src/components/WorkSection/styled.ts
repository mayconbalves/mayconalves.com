import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(290px,1fr));
  column-gap: 20px;
  row-gap: 20px;
  @media(max-width: 480px) {
    grid-template-columns: repeat(auto-fit,minmax(230px,1fr));
  }

  section {
    border-style: solid;
    border-width: 2px 10px 10px 2px;
    border-color: #000;
  }
`
