---
title: Métodos para arrays em javascript parte 03
description: Última parte sobre métodos auxiliares de arrays
date: 2022-10-22 11:36:26
image: https://miro.medium.com/max/1400/1*nN5WFcCTIsGdlBHdUGzt7w.png
category: js
background: "#D6BA32"
---

> A música tende a ser uma expressão dos nossos momentos mais obscuros. **David Gilmour.**

![arrays](https://miro.medium.com/max/1400/1*nN5WFcCTIsGdlBHdUGzt7w.png)

Essa é a terceira e última parte sobre alguns métodos que podem nos dar aquela “forcinha” no nosso dia-a-dia. Se ainda leu os dois primeiros artigos, vou deixar ambos aqui!! [Parte 01](https://mayconbalves.com.br/m%C3%A9todos-para-arrays-em-javascript-%E2%80%94-parte-01/) e [Parte 02.](https://mayconbalves.com.br/m%C3%A9todos-para-arrays-em-javascript-%E2%80%94-parte-02/)

Agora sem mais delongas, bora codar.

## filter()

Cria um novo array a com todos os elementos que passarem no teste do filtro

```javascript
const cars = [
  {
    name: "corsa",
    modelo: "automatico",
    ano: 2005,
  },
  {
    name: "vectra",
    modelo: "manual",
    ano: 1998,
  },
  {
    name: "voyage",
    modelo: "automatico",
    ano: 2018,
  },
  {
    name: "gol",
    modelo: "manual",
    ano: 1996,
  },
];
cars.filter((car) => {
  if (car.modelo === "manual") return car;
})[
  // retorno do novo array
  ({
    name: "vectra",
    modelo: "manual",
    ano: 1998,
  },
  {
    name: "gol",
    modelo: "manual",
    ano: 1996,
  })
];
```

## find()

Retorna o valor do primeiro elemento que satisfaça o teste.

```javascript
const cars =
[
 {
  name: 'corsa',
  modelo: 'automatico',
  ano: 2005
 },
 {
  name: 'vectra',
  modelo: 'manual',
  ano: 1998
 },
 {
  name: 'voyage',
  modelo: 'automatico',
  ano: 2018
 },
 {
  name: 'gol',
  modelo: 'manual',
  ano: 1996
 }
]
cars.find(car => {
  if(car.modelo === 'manual') return car
})
// retorno do novo array
 {
  name: 'vectra',
  modelo: 'manual',
  ano: 1998
 }
```

## forEach()

Esse método executa uma dada função dentro de cada elemento de um array

```javascript
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num) => {
  return num * 2;
});
// 2, 4, 6, 8, 10
```

## map()

Talvez o método que eu mais utilizo ou já utilizei. Ele é bem parecido com o método forEach A grande diferença é que o método map devolve um novo array enquanto o forEach itera sobre o mesmo array.

```javascript
// usei o mesmo array do find
cars.map((car) => car);
// retorna um novo array de carros
const cars = [
  {
    name: "corsa",
    modelo: "automatico",
    ano: 2005,
  },
  {
    name: "vectra",
    modelo: "manual",
    ano: 1998,
  },
  {
    name: "voyage",
    modelo: "automatico",
    ano: 2018,
  },
  {
    name: "gol",
    modelo: "manual",
    ano: 1996,
  },
];
```

## reduce()

Ele executa uma função reducer fornecida por você para cada elemento do array. Ele recebe até 4 parâmetros;

acumulador (opcional)
valor atual
index atual
array original

Esse método é extremamente versátil, é um pouco complicado no começo ( pode ser que renda até um artigo só para o reduce, vamos ver né 😃) Ele serve para reduzirmos um array e retornar um valor. Vamos ao exemplo:

```javascript
const numbers = [1, 2, 3, 4, 5];
numbers.reduce((acc, valorAtual, indexAtual, arrayOriginal) => {
  console.log(acc, "acc");
  console.log(valorAtual, "valor atual");
  console.log(indexAtual, "indexAtual");
  console.log(arrayOriginal, "arrayOriginal");
  return acc + valorAtual;
});
// resultado da nossa redução 15
```

Acho legal vocês executarem esse código, para ver todos os resultados obtidos por cada valor que o reduce nos fornece. Também podemos passar um valor inicial para o nosso reduce:

```javascript
const numbers = [1, 2, 3, 4, 5];
numbers.reduce((acc, valorAtuall) => {
  return acc + valorAtual;
}, 10); // valor inicial do reduce
// resultado da nossa redução 25
```

## every()

Retorna um valor booleano, dependendo se todos elementos passarem ou não no teste. Lembrando que o método every não modifica o array original 😃

```javascript
const cars = [
  {
    name: "corsa",
    modelo: "automatico",
    ano: 2005,
  },
  {
    name: "vectra",
    modelo: "manual",
    ano: 1998,
  },
  {
    name: "voyage",
    modelo: "automatico",
    ano: 2018,
  },
  {
    name: "gol",
    modelo: "manual",
    ano: 1996,
  },
];
cars.every((car) => {
  return car.modelo === "corsa";
});
// false
```

## some()

Retorna um booleano, se ao menos um elemento passar no teste ele retorna true Assim como o método every ele não altera o array original.

```javascript
const numbers = [1, 2, 3, 4, 5];
numbers.some((num) => num < 10); // true
numbers.some((num) => num > 10); // false
```

Chegamos ao fim de mais um artigo, espero que tenham gostado, lembrando que aqui mostrei os métodos e uma forma simples de aplica-los, cada um deles pode ser muito e deve ser muitooooooooooooo explorado por vocês. Espero ter ajudado pelo menos um pouco. Até a próxima um abraço quentinho para vocês ….
