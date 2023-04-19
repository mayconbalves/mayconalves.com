---
title: Como gerar números aleatório com JavaScript
description: usando a API Math.random() para gerar números aleatórios
date: 2021-11-08 05:09:17
image: https://miro.medium.com/max/1360/1*-jBq5nya6jDy8dnVaKcG0g.jpeg
category: js
background: "#D6BA32"
---
>Eu encontrei o caminho para a riqueza quando decidi que uma parte de tudo que ganhei era minha para manter. **George S. Clason**

![números aleatórios](https://miro.medium.com/max/1360/1*-jBq5nya6jDy8dnVaKcG0g.jpeg)

É bem normal em uma aplicação precisarmos gerar números aleatórios, para isso temos uma API do javascript bem interessante que é a Math.random() lembrando que o método random não gera número criptografados, para isso você pode usar o método crypto se quiser ler sobre ele, basta [clique aqui.](https://developer.mozilla.org/pt-BR/docs/Web/API/Crypto/getRandomValues)

## Math.ramdom()

Primeiramente precisamos entender o que esse método retorna para nós, e é bem simples, ele gera um número aleatório de 0 até 1 (ambos os números estão inclusos). Faça um teste no console do navegador mesmo, que sempre obterá números diferentes.

Se você quiser números aleatórios de 0 até 10 é bem simples, basta seguir o exemplo a seguir:

`Math.random() * 10`

Bem simples certo ? Mas e se a gente quiser fazer algo mais legal ? Eu fiz um projeto para gerar cores aleatórias em hexadecimal, porém não vou deixar o código completo aqui, mas sim o trecho que precisei usar o Math.random combinado com mais uma API a [Math.floor()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)

```javascript
concatLetters = letters[Math.floor(Math.random() * letters.length)]
concatNumbers = numbers[Math.floor(Math.random() * numbers.length)]
```

Agora que vocês tem parte do código, o que acham de tentar implementar esse mesmo projeto ?

Bom é isso galera, espero que vocês tenham gostado, não esqueçam que qualquer feedback é muito bem vindo. Tenham uma ótima semana, abraços quentinhos para vocês, até a próxima.

