---
title: Como criar máscara de CPF em React usando Regex
description: Forma simples para criar uma mascara de cpf para seu formulário
date: 2019-06-02
image: /images/como-criar-mascara-de-cnpj-usando-react-e-regex.gif
tags: [react, cpf, regex, javascript]
background: "#5ED3F3"
---

> Pessimismo leva à fraqueza, otimismo ao poder. **William James.**

![background-image](/images/como-criar-mascara-de-cnpj-usando-react-e-regex.gif)

> Esse tutorial foi inspirado pelo vídeo muito bom do [Fernando Daciuk](https://www.youtube.com/watch?v=r-8isv_TnVA) que mostra como fazer máscaras para campos de CPF, CEP, PIS, telefone e CNPJ em Javascript puro. Aqui, vou mostrar a implementação junto com React.

Vamos usar o nosso create-react-app para sermos rápidos e práticos (lembrando que estou supondo que você já conheça como funcionam props, state e exportações do módulos em React).

Vamos criar nosso componente de máscara. É bem tranquilo. Primeiro, vamos criar um arquivo chamado mask.js e vamos fazer nossa função para mascarar nosso input de CPF.

```javascript
export const cpfMask = (value) => {
  return value
    .replace(/\D/g, "") // substitui qualquer caracter que nao seja numero por nada
    .replace(/(\d{3})(\d)/, "$1.$2") // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1"); // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
};
```

Deixei comentários no código, mas vamos para uma breve explicação:

Linha 1: exportando nossa função. Essa função é bem simples: ela simplesmente recebe um valor e o retorna.

Linha 3: substitui qualquer caractere que não seja número por nada.

Linha 4: captura 2 grupos de numero o primeiro de 3 números (\d{3})e o segundo de 1 número (\d). Após capturar o primeiro grupo de numero $1. ele adiciona um ponto antes do segundo grupo de numero $2.

Linha 6: faz o mesmo replace que as linhas 4 e 5, mas adiciona um - no lugar do ponto.

Linha 7: captura 2 números seguidos de um traço, ou seja, os três últimos caracteres do CPF e não deixa ser digitado mais nada.

Pronto, nossa mascara já pode ser usada. O código do nosso App.js precisa ser atualizado.

```javascript
import React, { Component } from "react";
import "./App.css";
import { cpfMask } from "./mask";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { documentId: "" };
    this.handlechange = this.handlechange.bind(this);
  }

  handlechange(e) {
    this.setState({ documentId: cpfMask(e.target.value) });
  }

  render() {
    const { documentId } = this.state;
    return (
      <div className="App">
        <label>CPF</label>
        <input
          maxLength="14"
          name="documentId"
          value={documentId}
          onChange={this.handlechange}
        />
      </div>
    );
  }
}

export default App;
```

Tenho três pequenas explicações no nosso App.js: na linha 3, importamos nossa função. Na linha 15, utilizamos nossa função para formatar o nosso valor e, na linha 24 maxLength=’14', se utilizarmos esse atributo nativo do input [conheça aqui](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/input) limitamos a quantidade de caracteres que podem ser imputados no nosso input . Logo, não precisamos da última linha na nossa função que mascara o nosso CPF.

Bem é isso, espero que tenham gostado, lembrem que qualquer informação que deixei passar, ou se quiserem adicionar qualquer coisa postem nos comentários. Abraços quentinhos para vocês !!
