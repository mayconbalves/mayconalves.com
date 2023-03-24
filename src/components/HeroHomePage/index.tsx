import * as React from 'react'
import * as S from './styled'
import { StaticImage } from 'gatsby-plugin-image'

const Hero = () => {
  return (
    <S.Hero>
      <StaticImage
        alt="Avatar"
        src="../../images/background.jpeg"
        placeholder="none"
        imgStyle={{
          objectFit: 'fill',
        }}
      />
    </S.Hero>
  )
}

export default Hero
