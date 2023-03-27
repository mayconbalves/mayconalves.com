import React from 'react'
import { CardProps } from './interface'
import * as S from './styled'



const Card = ({ percent, strokeColor, technology }: CardProps) => {
  return (
    <S.ContainerCard>
      <S.Card strokeColor={strokeColor}>
        <div>
          <S.Percent>
            <S.Svg>
              <S.Circle cx="70" cy="70" r="70"></S.Circle>
              <S.Circle cx="70" cy="70" r="70"></S.Circle>
            </S.Svg>
            <S.Num>
              <S.NumTitle>
                {percent}
                <S.Span>%</S.Span>
              </S.NumTitle>
            </S.Num>
          </S.Percent>
          <S.TechTitle>{technology}</S.TechTitle>
        </div>
      </S.Card>
    </S.ContainerCard>
  )
}

export default Card
