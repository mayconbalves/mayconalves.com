---
title: Como criar máscara de CNPJ em react usando Regex
description: Forma simples para criar uma mascara de cnpj para seu formulário
date: 2021-10-25
tags: [react, regex, cnpj]
---

> A mudança é a lei da vida. E aqueles que apenas olham para o passado ou para o presente irão com certeza perder o futuro. **John Kennedy.**

Vamos usar o nosso create-react-app para sermos rápidos e práticos (lembrando que estou supondo que você já conheça como funcionam props, state e exportações do módulos em React).

Vamos criar nosso componente de máscara. É bem tranquilo. Primeiro, vamos criar um arquivo chamado cnpjMask.js e vamos fazer nossa função para mascarar nosso input de CNPJ.

```javascript
export const cnpjMask = (value) => {
  return value
    .replace(/\D+/g, "") // não deixa ser digitado nenhuma letra
    .replace(/(\d{2})(\d)/, "$1.$2") // captura 2 grupos de número o primeiro com 2 digitos e o segundo de com 3 digitos, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de número
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1/$2") // captura 2 grupos de número o primeiro e o segundo com 3 digitos, separados por /
    .replace(/(\d{4})(\d)/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1"); // captura os dois últimos 2 números, com um - antes dos dois números
};
```

Nossa mascara já pode ser usada. O código do nosso App.js precisa ser atualizado. Vamos criar um input simples para poder receber nossa máscara.

```javascript
import React, { useState } from "react";
import "./App.css";
import { cnpjMask } from "./cnpjMask";

export function App() {
  const [vales, setValues] = useState({ cnpj: "" });

  const inputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <div className="App">
      <label>CNPJ</label>
      <input name="cnpj" value={cnpjMask(values.cnpj)} onChange={inputChange} />
    </div>
  );
}

export default App;
```

E por último vamos criar alguns testes para essa nossa máscara:

```javascript
import { cnpjMask } from "./cnpjMask";

describe("cnpjMask helper", () => {
  it("should return cnpj formated correctly", () => {
    expect(cnpjMask("27505101010101")).toBe("27.505.101/0101-01");
  });

  it("should return error of formater", () => {
    expect(cnpjMask("27505101010101")).not.toBe("275.0510.10101-01");
  });
});
```

Bem é isso, espero que tenham gostado, lembrem que qualquer informação que deixei passar, ou se quiserem adicionar qualquer coisa me mandem mensagem. Se esse artigo foi útil ficarei feliz. Abraços quentinhos para vocês!!
