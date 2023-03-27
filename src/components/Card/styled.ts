import styled from 'styled-components';

type Colors = {
  strokeColor?: string;
}

export const ContainerCard = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
`

export const Card = styled.div<Colors>`
  cursor: pointer;
  position: relative;
  width: 250px;
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
      color: #fff;
    }

    h2 {
      color: #fff;
    }
  }

  &:nth-child(1) svg circle:nth-child(2) {
    stroke: ${(props) => props.strokeColor ? props.strokeColor : '#00ff43'};
  }
`

export const Percent = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  box-shadow: inset 0 0 50px #000;
  background:#222;
  z-index: 1000;
`

export const Num = styled.div`
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

export const NumTitle = styled.h2`
  color: #777;
  font-weight: 700;
  font-size: 40px;
  transition: 0.5s;
`

export const Span = styled.span`
  color: #777;
  font-size: 24px;
  transition: 0.5s;
`

export const Svg = styled.svg`
  z-index: 1000;
`

export const Circle = styled.circle`
  fill: none;
  stroke: #191919;
  stroke-width: 10;
  stroke-linecap: round;
  transform: translate(5px, 5px);

  &:nth-child(2) {
    stroke-dasharray: 150;
  }
`

export const TechTitle = styled.h2`
  position: relative;
  color: #777;
  margin-top: 20px;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: 0.5s;
`
