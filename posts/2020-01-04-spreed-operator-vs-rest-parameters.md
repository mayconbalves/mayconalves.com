---
title: Spreed operator vs rest parameters.
description: Entenda essa bagaça de vez e comece usar de formaa certa.
date: 2020-01-04
tags: [javascript, js, es2015]
---

> Esteja presente em cada momento da sua vida, antes que estes momentos se tornem apenas lembranças.

Por muito tempo, achei que os `...` fossem usados da mesma forma, mas tem uma pequena diferença que pode deixar sua vida muito menos complicada =)

## Spread operator

É bem simples de ser usado, o exemplo mais comum que encontramos na internet é de merge entre arrays (se você é iniciante, na faculdade eles chamam arrays de vetor).

Na versão 5 do javascript, precisávamos usar o push para fazermos um merge de arrays:

```javascript
var a = [1, 2, 3];
var b = [4, 5, 6];
Array.prototype.push.apply(a, b);
// console.log(a) [1, 2, 3, 4, 5, 6]
```

Com spread é um pouco mais fácil:

```javascript
const a = [1, 2, 3];
const b = [4, 5, 6];
// console.log([...a, ...b]) [1, 2, 3, 4, 5, 6]
```

E ainda podemos desestruturar esses arrays em uma sequência numérica:

```javascript
const a = [1, 2, 3];
const b = [4, 5, 6];
// console.log(...a, ...b) 1, 2, 3, 4, 5, 6
```

E podemos fazer mais algumas brincadeiras, só vou mostrar uma então não parem com esse artigo, façam vários testes:

```javascript
const a = [1, 2, 3];
const b = [7, 8, 9];
// console.log([...a, 4, 5, 6, ...b]) [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

## Rest parameters

Nos permite representar um número indefinido de argumentos como um array. Essa é a definição do [MDN web docs](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/rest_parameters). Mas o que isso quer dizer ??

É bem simples, vamos exemplificar, por que realmente é simples:

```javascript
function arr(...values) {
  console.log(values);
}
arr(1, 2, 3);
saida; // [1, 2, 3]
```

No exemplo acima, criamos uma função que recebe `...values` (rest parameters) e quando executamos a função `arr(1, 2, 3)` passando esses três números, dentro da função ele vira um array, fácil não é mesmo =).

Bem é isso, espero que tenham gostado, lembrem que qualquer informação que deixei passar, ou se quiserem adicionar qualquer coisa me enviem mensagem. Se esse artigo foi útil ficarei feliz. Abraços quentinhos para vocês !!
