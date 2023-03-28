import * as React from 'react'
import Layout from '../components/Layout'
import Grid from '../components/Grid'
import Seo from '../components/Seo'
import * as S from '../styles/pages/home'

const About = () => {
  return (
    <Layout>
      <Seo title="Sobre mim" />
      <Grid>
        <S.Title>
          Um pouco mais sobre mim...
        </S.Title>

        <section>
          <p>
            Sou desenvolvedor frontend desde 2017, mas curto muitas coisas,
            além de tecnologia.
          </p>

          <p>
            Curto muito, matemática, física e história. Prentendo escrever
            um pouco sobre cada um desses assuntos.
          </p>

          <p>
            Pretendo escrever sobre assuntos nerds também para descontrair um pouco,
            tais como <em>HQ&apos;s</em> no geral, pois também considero Mangás como HQ&apos;s
            (não briguem comigo, para mim é a mesma coisa haha), e falar um pouco mais sobre minha
            vida e a minha vida como desemvolvedor de software.
          </p>

          <p>
            Mas eu não sou um completo chato, se você quiser me chamar para tomar uma cerveja
            eu vou adorar o convite, se quiser me chamar para jogar uma partida de bilhar eu também
            topo. Se quiser podemos falar bastante de música, curto <strong>rock n roll</strong>
            {' '} desde muito novo e hoje em dia me arrisco um pouco em tocar batera !!
          </p>
        </section>
      </Grid>
    </Layout>
  )
}

export default About
