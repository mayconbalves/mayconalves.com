import React from 'react'
import * as S from './styled'
import { useScroll, useSpring } from 'framer-motion'

const ProgressBar = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <S.ProgressBar style={{ scaleX }}/>
  )
}

export default ProgressBar
