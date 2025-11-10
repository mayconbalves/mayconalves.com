---
title: CRA + emotion primeiros passos com css in js.
description: De seus primeiros passos com css in js e react.
date: 2019-05-09
image: /images/cra-emotion-primeiros-passos-com-css-in-js.webp
tags: [react, emotionjs]
background: "#5ED3F3"
---

> Não existem inocentes, apenas diferentes graus de responsabilidade. **Stieg Larsson.**

![gif](/images/cra-emotion-primeiros-passos-com-css-in-js.webp)

# Importante

`Pode ser que esse post esteja um pouco desatualizado, pois escrevi há muito tempo, no fim desse artigo vou deixar alguns links que podem ajudar. Obrigado 😊`

Se assim como eu, você gosta de testar algumas novidades (elas aparecem todos os dias), e não gosta de fazer muitas configurações, você está no lugar certo. Lembro que quando comecei a trabalhar como desenvolvedor front-end (há dois anos atrás) ainda existiam projetos com o bom e velho css puro.

Mas em muitos lugares, os pré-processadores [Sass](https://sass-lang.com/), [Less](https://lesscss.org/) e [Stylus](https://stylus-lang.com/) já bombavam e era praticamente uma **skill** obrigatória.

No projeto que eu estava usávamos css puro, quando saí para novos projetos eles estavam usando uma nova forma de css, que é o `css in js.` Por isso resolvi testar como funciona junto com o create-react-app para ver se realmente é uma forma legal de se escrever nossos estilos direto no **javascript** e o quanto pode ser vantajoso para o nossa aplicação. Chega de enrolar, bora codar.

## Criando o projeto

Vamos o `CRA` para criar o projeto `npx create-react-app emotion` depois basta entrar na pasta do projeto `cd emotion` e rode um yarn start seu projeto estará rodando na normalmente.

Agora vamos instalar nossa biblioteca de estilo, para isso basta executar dois comandos no terminal:

`yarn add @emotion/styled @emotion/react`

Pronto agora que já temos nossa biblioteca de estilos instaladas vamos modificar algumas coisas.

No nosso `App.js`, importamos o css para estilizar o componente, vamos pegar o estilo do nosso link e vamos modifica-lo dentro do `App.js`

Dentro do App.css temos o seguinte estilo:

```css
.App {
  text-align: center;
}

.App-logo {
  animation: App-logo-spin infinite 20s linear;
  height: 40vmin;
  pointer-events: none;
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```

Vamos fazer uma pequena alteração no nosso link, para vocês entenderem o quanto é fácil de usarmos o emotion.

```jsx
import styled from "@emotion/styled";
import logo from "./logo.svg";
import "./App.css";
import styled from "@emotion/styled";

const AppLink = styled.a`
  color: #61dafb;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <AppLink
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </AppLink>
      </header>
    </div>
  );
}

export default App;
```

Como vocês puderam perceber é bem simples de se usar o css in js. Espero que tenham gostado desse tutorial básico de como instalar e utilizar essa lib de css.

Alguns links:

- [Pré-processadores css](https://woliveiras.com.br/posts/pre-processadores-css/)
- [Sass por onde começar](https://medium.com/@tassiogoncalvesg/pr%C3%A9-processador-css-sass-o-que-%C3%A9-e-por-onde-come%C3%A7ar-e3daeb0f31a1)
- [Sass vs Less vs Stylus](https://tableless.com.br/sass-vs-less-vs-stylus-batalha-dos-pre-processadores/)
- [Beginning-CSS-Preprocessors-Compass-js-Less-js-ebook](https://www.amazon.com.br/Beginning-CSS-Preprocessors-Compass-js-Less-js-ebook/dp/B01JCOGEDQ/ref=sr_1_5?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3PZ6X6T7P8TLD&keywords=sass+e+compass&qid=1557450429&s=gateway&sprefix=sass+%2Cdigital-text%2C256&sr=8-5)
- [Fundamento de Sass e Compass](https://www.amazon.com.br/Fundamentos-Sass-Compass-CSS-Superpoderes/dp/8575224875/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=sass+e+compass&qid=1557450520&s=gateway&sr=8-1)
- [Sass](https://www.amazon.com.br/Sass-Aprendendo-pr%C3%A9-processadores-Natna-Souza-ebook/dp/B01JTFM11C/ref=sr_1_6?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=sass+css&qid=1557450601&s=gateway&sr=8-6)
- [Emotion doc](https://emotion.sh/docs/introduction)
