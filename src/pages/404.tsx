import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Seo from '../components/Seo'
import Layout from '../components/Layout'
import Grid from '../components/Grid'

const Background = styled.section`
  background-image: url('https://mayconbalves.com.br/assets/img/404.gif');
  background-position: center;
  background-repeat: no-repeat;
  height: 400px;
  width: 100%;
`

const Title = styled.h1`
  margin: 0 0 1rem !important;
  text-align: center;
`

const WrapperLinks = styled.section`
  display: flex;
  margin: 1rem;
`

const NotFoundPage = () => {
  return (
    <Layout>
      <Seo title="Página não encontrada" />
      <Grid>
        <Title>Página não encontrada</Title>
        <Background />
        <WrapperLinks>
          <p>
            <Link to="/blog">Ir para o blog</Link>.
          </p>
          <p>
            <Link to="/">Volte para o HomePage</Link>.
          </p>
        </WrapperLinks>
      </Grid>
    </Layout>
  )
}

export default NotFoundPage
