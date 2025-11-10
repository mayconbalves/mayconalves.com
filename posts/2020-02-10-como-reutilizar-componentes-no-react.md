---
title: Como reutilizar componentes no react.
description: Aprenda fazer componentes que podem ser usados mais de uma vez.
date: 2020-02-10
image: /images/como-reutilizar-componentes-no-react.webp
tags: [javascript, js, react]
background: "#5ED3F3"
---

> Somente quando encontramos o amor é que descobrimos o que nos faltava na vida. **John Ruskin**.

![como reutilizar componentes no react](/images/como-reutilizar-componentes-no-react.webp)

Junto com tecnologias novas vem grandes responsabilidades (sempre quis escrever isso haha) falando especificamente de React.js temos grandes poderes. Podemos criar nossa própria arquitetura e criarmos componentes para serem reultilizaveis, isso é muito bom, porém temos que tomar um pouco de cuidado quando formos escrever nossos componentes, felizmente já trabalhei em ótimos projetos react, porém já trabalhei com alguns bem mal escritos. Para tentar evitar um pouco disso, vou tentar mostrar uma boa forma de escrever um componente que possa ser utilizado mais de uma vez.

Vamos lá criei um componente bem básico e bem facíl de se entender, apenas renderizo 3 botões na tela:

```jsx
import React, { Component } from "react";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <div>
          <button className="red" onClick={this.changeColor}>
            Red
          </button>
        </div>

        <div>
          <button className="green" onClick={this.changeColor}>
            Green
          </button>
        </div>

        <div>
          <button className="blue" onClick={this.changeColor}>
            Blue
          </button>
        </div>
      </div>
    );
  }
}

export default App;
```

Não tem nenhum segredo, o botão recebe 3 propriedades, a classe que estiliza o botão, uma função de `onClick` e nome do botão.

Claramente podemos reultilizar esse botão, mas como fazemos isso, vou mostrar uma maneira que eu acredito ser a uma boa alternativa.

```jsx
import React, { Component } from "react";
import "./styles.css";

export const Button = (props) => {
  return (
    <button className={props.styles} onClick={props.onClick}>
      {props.title}
    </button>
  );
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <div>
          <Button styles="red" onClick={this.handleClick} title="Red" />
        </div>

        <div>
          <Button styles="green" onClick={this.handleClick} title="Green" />
        </div>

        <div>
          <Button styles="blue" onClick={this.handleClick} title="Blue" />
        </div>
      </div>
    );
  }
}

export default App;
```

Pronto já temos um componente reutilizavel. Mas ainda consigo ver duas mudanças que podem deixar nosso componente mais bonito, enxuto, legível e simples:

```jsx
export const Button = ({ styles, onClick, title }) => {
  return (
    <button className={styles} onClick={onClick}>
      {title}
    </button>
  );
};
```

Fizemos um `destructuring` nas props que recebemos, isso deixa nosso botão mais simples ainda, e podemos (devemos) declarar nossas `proptypes` que é uma boa prática quando falamos de react.

```jsx
export const Button = ({ styles, onClick, title }) => {
  return (
    <button className={styles} onClick={onClick}>
      {title}
    </button>
  );
};

Button.propTypes = {
  styles: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
```

Espero que tenha compreendido a importância de escrevermos componentes simples e de facíl leitura, para que possam de fato serem reutilizaveis.

Bem é isso, espero que tenham gostado, lembrem que qualquer informação que deixei passar, ou se quiserem adicionar qualquer coisa me mandem mensagem. Se esse artigo foi útil ficarei feliz. Abraços quentinhos para vocês !!
