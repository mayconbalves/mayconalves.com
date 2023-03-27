import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import Card from '../components/Card'

const Container = styled.div`
  flex-direction: column;
  display: flex;
  min-height: 100vh;
  width: 100%;
`
const Title = styled.h2`
  text-align: center;
  color: #fff;
  font-size: 2.1rem;
  font-weight: 800;
  line-height: 3;
  letter-spacing: 0.069rem;
  padding: 0 1.4rem;
`
const WrapperSkill = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, minmax(30px, 1fr));
  grid-template-rows: 300px;
  row-gap: 1px;
`

const cardContent = [
  {
    percent: '90',
    strongColor: 'orange',
    technology: 'HTML5'
  },
  {
    percent: '70',
    strongColor: 'blue',
    technology: 'Css3'
  },
  {
    percent: '60',
    strongColor: 'yellow',
    technology: 'JavaScript'
  },
  {
    percent: '60',
    strongColor: 'yellow',
    technology: 'JavaScript'
  }
]

const HomePage = () => (
  <Layout>
    <Seo title='Home'/>
    <Container>
      <Title>Skills</Title>
      <WrapperSkill>
        {
          cardContent.map((card, index) => (
            <Card
              key={index}
              percent={card.percent}
              strokeColor={card.strongColor}
              technology={card.technology}
            />
          ))
        }
      </WrapperSkill>
    </Container>
  </Layout>
)

export default HomePage
