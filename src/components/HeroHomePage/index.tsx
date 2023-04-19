import * as React from 'react'
import * as S from './styled'

const Hero = () => {
  const firstName = ['M', 'a', 'y', 'c', 'o', 'n']
  const lastName = ['A', 'l', 'v', 'e', 's']
  return (
    <S.Hero>
      <section>
        <S.Subtitle>Olá eu sou,</S.Subtitle>
        <S.Title>
          {firstName.map(letter => (
            <S.Span key={letter}>{letter}</S.Span>
          ))}
          {' '}
          {lastName.map(letter => (
            <S.Span key={letter}>{letter}</S.Span>
          ))}
        </S.Title>
      </section>
      <section>
        <S.Subtitle>sou desenvolvedor frontend</S.Subtitle>
      </section>
    </S.Hero>
  )
}

export default Hero
