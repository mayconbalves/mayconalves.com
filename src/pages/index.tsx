import React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import * as S from '../styles/pages/home'

const HomePage = () => (
  <Layout>
    <Seo title='Home'/>
    <S.Container>
      <S.Title>Bem-vindo ao meu site</S.Title>
      <p>
        Olá!
        Meu nome é <S.Span>Maycon Alves.</S.Span> Trabalho como Desenvolvedor Front-end desde 2017.
        Acredito que a disseminação de conhecimento e boas idéias podem mudar o mundo.
        Atualmente estou trabalhando como desenvolvedor frontend na Invillia.
      </p>

      <p>
        Gosto muito de escrever artigos sobre tecnologia, pois dessa forma eu consigo aprender e
        ao mesmo tempo tento passar um pouco do conhecimento que eu tenho para a frente.
      </p>

      <S.Title>Ultimos artigos do meu Blog</S.Title>
      <S.Ul>
        <S.Li>
          <S.NavLink to="/como-gerar-n%C3%BAmeros-aleat%C3%B3rio-com-javascript/">
            Como gerar números aleatório com JavaScript
          </S.NavLink>
        </S.Li>
        <S.Li>
          <S.NavLink to="como-evitar-switch-case-desnecessários/">
            Como evitar switch case desnecessários
          </S.NavLink>
        </S.Li>
        <S.Li>
          <S.NavLink to="html-tags-para-nos-ajudar-com-semântica-e-acessibilidade/">
            HTML tags para nos ajudar com semântica e acessibilidade
          </S.NavLink>
        </S.Li>
      </S.Ul>
    </S.Container>
  </Layout>
)

export default HomePage
