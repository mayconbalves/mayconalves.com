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
        width={900}
        height={400}
      />
    </S.Hero>
  )
}

export default Hero
