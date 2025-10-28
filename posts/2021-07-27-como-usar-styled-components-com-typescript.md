---
title: Como usar styled-components com typescript.
description: Uma introdução ao styled-components com typescript.
date: 2021-07-27
image: /images/typescript-com-styled-components.webp
tags: [typescript, styled-components]
background: "#D6BA32"
---

> Otimismo é esperar pelo melhor. Confiança é saber lidar com o pior. **Roberto Simonsen**.

![styled-components com typescript](/images/typescript-com-styled-components.webp)

Não é de hoje que a galera vem adotando o typescript no front. Não sou nenhum especialista no assunto (na verdade tem uma semana que estou estudando ts 😏). Por isso hoje vou mostrar como (eu uso) ts para criar componentes em react e styled-components. Chega de enrolação bora lá galera…

Primeiro vamos criar um projeto react, já com o template de typescript, e instalar a lib de styled-components e os types checks dela

```bash
npx create-react-app nosso-app --template typescript
cd my-app
yarn add styled-components
yarn add @types/styled-components -D com a flag -D mostra que nossa dependência é apenas de desenvolvimento, ou seja, no bundle que entregamos para produção essas também conhecidas como devDependencies ficam de fora, pois só precisamos delas em tempo de desenvolvimento. Precisamos do types do styled-components, para que o nosso typescript reconheça-os.
```

Vamos criar um componente bem simples, vou usar de exemplo um simples botão, que recebe algumas `props`

```tsx

import React from 'react'
import * as S from './styles'
import { ButtonProps } from './interfaces'

const Button = (
  {
    backgroundColor,
    children,
    onClick
  }: ButtonProps): JSX.Element => {
  return (
    <S.Button
      backgroundColor={backgroundColor}
      onClick={onClick}
    >
      {children}
    </S.Button>
  )
}

export default Button

```

Como podem notar no código acima é bem simples como eu havia dito. O que nos interessa aqui são as linhas 3 e 10.

Na linha 3, eu importo a minha interface, ou seja, todos as propriedades que o botão irá ter e quem for usa-lo precisará passar se essa propriedade for obrigatória. Já na linha 10 estou dizendo que todas as props que o botão estão sendo checadas `ButtonProps` e estou declarando que o botão é um `JSX.Element` ou seja, ele é um elemento jsx.

Agora vamos passar para a inteface do botão:

```tsx

export interface ButtonProps {
  backgroundColor?: string;
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

```
É uma interface bem simples, na propriedade `backgroundColor` reparem que declarei com `?:` por não ser obrigatório. E agora vamos para os estilos do nosso botão.

```tsx
import styled from 'styled-components'
import { ButtonProps } from './interfaces'

export const Button = styled.button<ButtonProps>`
  background-color: ${(props) => props.backgroundColor || '#000'};
  border: none;
  height: 40px;
  font-size: 1.1111111111em;
  font-weight: 400;
  float: right;
  margin: 10px;
  text-align: center;
  text-shadow: none;
  width: 33.33333333333333%;
  color: #fff;
  padding: 0 10px;
  position: relative;
  bottom: 50px;
`

```

Criei um estilo bem básico reparem na linha 4 que declaro que o botão recebe de a checagem da nossa interface de `ButtonProps` para codar esse botão estou usando o vscode com uma a extensão (javascript and typescript nightly)[https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-next] se quiserem usar, ele nós ajuda bastante, olha que interessante acontece se eu remover o `ButtonProps`

![typescript styled-components](/images/error-background-color.webp)

Recebo o erro me informando que a propriedade não está no tipo `themedStyledProps` ou seja, ele vai buscar nos nossos types do styled-components. Que tivemos que instalar no nosso projeto lá no começo do artigo, legal né. E por último só preciso mostrar mais um ponto que nos facilita muito em tempo de desenvolvimento, usando o ts.

![typescript styled-components](/images/background-typescript-error.webp)

Passei a utilizar o botão que acabamos de criar em uma parte do meu projeto, olha que interessante, passei o nome da propriedade errada background quando na verdade eu precisava passar backgroundColor como mostra a foto acima quando criei o estilo do nosso botão, ele mostra que a propriedade children e background, não podem ser atribuídas ao tipo ButtonProps ou seja em tempo de desenvolvimento, vamos poder economizar muito tempo, pois iremos saber exatamente quais as propriedades que precisamos/devemos passar para nossos componentes filhos, show de bola né !!

Bem é isso, espero que tenham gostado, lembrem que qualquer informação que deixei passar, ou se quiserem adicionar qualquer coisa me mandem mensagem. Se esse artigo foi útil ficarei feliz. Abraços quentinhos para vocês!!
