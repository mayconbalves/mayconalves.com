import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Grid from '../components/Grid'
import Seo from '../components/Seo'

const Container = styled.div`
  background: gray;
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
  align-items: center;
  background: gray;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`

const Skills = styled.div`
  align-item: center;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  gap: 20px 10px;
  width: 400px;
`

const ContainerCard = styled.div`
  position: relative;
  width: 900px;
  display: flex;
  justify-content: space-around;
`

const Card = styled.div`
  cursor: pointer;
  position: relative;
  width: 250px;
  background: linear-gradient(0deg,#1b1b1b,#222,#1b1b1b);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  border-radius: 4px;
  text-align: center;
  overflow: hidden;
  transition: 0.5s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0,0,0,.5);

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -50%;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 1;
    }

    span {
      color:#fff;
    }

    h2 {
      color:#fff;
    }
  }

  &:nth-child(1) svg circle:nth-child(2) {
    stroke-dashoffset: calc(440 - (440 * 90) / 100);
    stroke:#00ff43;
  }
`

const Percent = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  box-shadow: inset 0 0 50px #000;
  background:#222;
  z-index: 1000;
`

const Num = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`

const NumTitle = styled.h2`
  color:#777;
  font-weight: 700;
  font-size: 40px;
  transition: 0.5s;
`

const Span = styled.span`
  color:#777;
  font-size: 24px;
  transition: 0.5s;
`

const Svg = styled.svg`
  position: relative;
  width: 150px;
  height: 150px;
  z-index: 1000;
`

const Circle = styled.circle`
  width: 100%;
  height: 100%;
  fill: none;
  stroke:#191919;
  stroke-width: 10;
  stroke-linecap: round;
  transform: translate(5px,5px);

  &:nth-child(2) {
    stroke-dasharray: 440;
    stroke-dashoffset: 440;
  }
`

const TechTitle = styled.h2`
  position: relative;
  color:#777;
  margin-top: 20px;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: 0.5s;
`

const HomePage = () => (
  <Layout>
    <Seo title='Home'/>
    <Container>
      <Title>Skills</Title>
      <WrapperSkill>
        <Skills>
          <ContainerCard>
            <Card>
              <div>
                <Percent>
                  <Svg>
                    <Circle cx="70" cy="70" r="70"></Circle>
                    <Circle cx="70" cy="70" r="70"></Circle>
                  </Svg>
                  <Num>
                    <NumTitle>
                      90
                      <Span>%</Span>
                    </NumTitle>
                  </Num>
                </Percent>
                <TechTitle>Html</TechTitle>
              </div>
            </Card>
          </ContainerCard>
        </Skills>
      </WrapperSkill>
    </Container>
  </Layout>
)

export default HomePage
