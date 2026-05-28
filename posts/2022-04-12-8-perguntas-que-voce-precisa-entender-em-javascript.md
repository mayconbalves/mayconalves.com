---
title: "8 perguntas que vocé precisa entender em javascript."
description: "Perguntas para se preparar para uma entrevista."
date: 2022-04-12
tags: [js]
---

> O futuro pertence àqueles que se preparam hoje para ele. **Malcolm X**.

Estou escrevendo esse artigo, logo depois de assistir o filme [A queda](https://www.youtube.com/watch?v=_ps_zWQqyZs) (recomendo fortemente para quem gosta de história da guerra, principalmente, aqueles que gostam de estudar sobre a segunda guerra mundial). Sempre queremos evoluir, mas como fazemos isso ? Existem várias formas para evoluirmos, nas últimas duas ou três semanas, estou estudando muitas coisas que eu tinha parado de estudar (por falta de motivação, estou me sentindo um pouco cansado 😪) css, html, javascript, react, redux, graphql, jest e afins…

Daí comecei a fazer vários testes legais com css e javascript, pois estou estudando bastante sobre essas duas tecnologias, com esse pensamento resolvi montar um quiz sobre javascript com oito perguntas básicas, espero que vocês saibam a resposta das oito perguntas, mas se não souberem não tem problema, estamos aqui para evoluir nessa bagaça juntos, bora lá.

## 1 Qual valor da variável result?

```javascript
const arr = [1, 2, 3];
const result = arr[3];
```

## 2 Que valor irá aparecer no console.log?

```javascript
const language = Object.assign(
  {
    name: "ReactJs",
  },
  {
    name: "GraphQl",
  },
  {
    name: "NodeJs",
  }
);
console.log(language.name);
```

## 3 Você conhece o método auxiliar de array indexOf?

```javascript
const arr = [1, 2, 3, 4, 6];
console.log(arr.indexOf(5));
```

## 4 Sabe operações matemáticas?

```javascript
const a = 10;
const b = "20";
const result = a + b;
console.log(result);
```

## 5 Você se lembra dos números inteiros?

```javascript
const number = 30.0;
const check = Number.isInteger(number);
console.log(check);
```

## 6 Ah…. funções 😈

```javascript
const sum = (a, b, ...args) => {
  return { ...args };
};
console.log(sum(10, 20, 30, 40, 50, 60, 70));
```

## 7 Por quê você esconde a verdade?

```javascript
const test = !!null;
console.log(test);
```

## 8 Eu adoro brincar com arrays 😃

```javascript
const arr = [10, 20, 30, 40];
const [second] = arr;
console.log(second);
```

Você pode testar cada trecho de código aqui no [Replit.com](replit.com) para descobrir as respostas que não sabe, ou confirmar alguma que não tem certeza, não vou deixar nenhuma resposta aqui nesse post, pois gostaria muito que você teste cada um dos cases acima se não souber, lembre-se não é vergonha nenhuma não saber algum desses cases. É errando que aprendemos 😃.

Bem é isso, espero que tenham gostado, lembrem que qualquer informação que deixei passar, ou se quiserem adicionar qualquer coisa me mandem mensagem. Se esse artigo foi útil ficarei feliz. Abraços quentinhos para vocês!!
