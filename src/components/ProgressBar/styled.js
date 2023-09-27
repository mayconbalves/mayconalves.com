import { motion } from 'framer-motion'
import styled from 'styled-components'

export const ProgressBar = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 10px;
  background-color: var(--link-highlight);
  transform-origin: 0%;
  z-index: 100;
`
