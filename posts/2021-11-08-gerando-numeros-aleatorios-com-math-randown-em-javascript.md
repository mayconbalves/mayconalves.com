---
title: Gerando números aleatórios com Math.random() em JavaScript
description: Aprenda a gerar números aleatórios com Math.random() em JavaScript
date: 2021-11-08
image: /images/gerando-numeros-aleatorios-com-math-random-em-javascript.webp
tags: [js]
background: "#D6BA32"
---

> A ciência é, portanto, uma perversão de si mesma, a menos que tenha como fim último, melhorar a humanidade. **Nikola Tesla**.

![gerando-numeros-aleatorios](/images/gerando-numeros-aleatorios-com-math-random-em-javascript.webp)

É bem normal em uma aplicação precisarmos gerar números aleatórios, para isso temos uma API do javascript bem interessante que é a `Math.random()`, lembrando que o método random não gera número criptografados, para isso você pode usar o método crypto se quiser ler sobre ele, basta clicar aqui.

## Math.random()
Primeiramente precisamos entender o que esse método retorna para nós, e é bem simples, ele gera um número aleatório de 0 até 1 (ambos os números estão inclusos). Faça um teste no console do navegador mesmo, que sempre obterá números diferentes.

Se você quiser números aleatórios de 0 até 10 é bem simples, basta seguir o exemplo a seguir:

```javascript
Math.random() * 10
```

Bem simples certo ? Mas e se a gente quiser fazer algo mais legal ? Eu fiz um projeto para gerar cores aleatórias em hexadecimal, porém não vou deixar o código completo aqui, mas sim o trecho que precisei usar o Math.random combinado com mais uma API o [Math.floor()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)

```javascript
concatLetters = letters[Math.floor(Math.random() * letters.length)]
concatNumbers = numbers[Math.floor(Math.random() * numbers.length)]
```

Agora que vocês tem parte do código, o que acham de tentar implementar esse mesmo projeto?

Bem é isso, espero que tenham gostado, lembrem que qualquer informação que deixei passar, ou se quiserem adicionar qualquer coisa me mandem mensagem. Se esse artigo foi útil ficarei feliz. Abraços quentinhos para vocês!!
