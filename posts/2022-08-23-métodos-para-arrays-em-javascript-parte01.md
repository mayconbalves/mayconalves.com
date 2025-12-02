---
title: Métodos para arrays em javascript - parte 01
description: Alguns métodos que vão ajudar no seu dia a dia
date: 2022-08-23
tags: [js]
---

> Nossas virtudes e nossos defeitos são inseparáveis, assim como a força e a matéria. Quando se separam, o homem deixa de existir. **Nikola Tesla.**

## pop()

Esse método remove o último elemento de um array.

```javascript
const numbers = [0, 1, 2, 3, 4, 5];
numbers.pop();
console.log(numbers); // [0, 1, 2, 3, 4]
```

## push()

Esse método adiciona um ou mais elementos ao final de um array e retorna um array com um tamanho diferente.

```javascript
const numbers = [0, 1, 2, 3, 4, 5];
numbers.push(6, 7, 8);
console.log(numbers); // [0, 1, 2, 3, 4, 5, 6, 7, 8]
```

## toString()

Retorna uma string representando um array específico e seus elementos. Esse método não recebe nenhum parâmetro.

```javascript
const numbers = [0, 1, 2, 3, 4, 5];
numbers.toString();
console.log(numbers); // '0, 1, 2, 3, 4, 5'
```

## join()

Junta todos os elementos de array em uma string e retorna essa mesma string. Esse método recebe uma string como parâmetro, que tem como função separar os cada elemento do array, se a string for omitida, todos os elementos do array serão separados por uma vírgula e se for passado uma string vazia como parâmetro, todos os elementos serão juntados sem espaço.

```javascript
const numbers = [0, 1, 2, 3, 4, 5]
console.log(numbers.join('')) // '012345'
console.log(numbers.join('-')) // '0-1-2-3-4-5'
console.log(numbers.join(',') // '0,1,2,3,4,5'
```

## splice()

Ele altera o conteúdo de um array, adicionando novos elementos e removendo antigos. Ele recebe três parâmetros, índice (aqui começa a alteração do nosso array). _Quantidade de elementos para serem removidos._ E N elementos para serem adicionados ao array.

Ele retorna um novo array com os elementos removidos.

```javascript
const numbers = [0, 1, 2, 3, 4, 5]
console.log(numbers.splice(0, 0, 6)) // [6, 1, 2, 3, 4, 5]
console.log(numbers.splice(0, 4)) // [4, 5]
console.log(numbers.splice(0, 0, 0, 1, 2, 3) // [0, 1, 2, 3, 4, 5]
```

Parece complicado o exemplo acima, mas com uma simples explicação vai ficar fácil de entender. Na primeira linha eu pego o índice 0 do array onde irei começar a alteração, depois o segundo 0 mostra que não quero remover nenhum item do meu array e por último eu adiciono o número 6 na posição 0 do array. Agora basta você praticar com os outros dois exemplos 😃.

## sort()

Ordena os elementos do array e retorna o próprio array. Essa ordenação é feita a partir do [unicode](https://pt.wikipedia.org/wiki/Unicode) ( deem uma olhada nesse link, se não souberem o que é unicode).

```javascript
const numbers = [0, 2, 1, 6, 7, 5, 4];
console.log(numbers.sort()); // [0, 1, 2, 4, 5, 6, 7]
```

Bem é isso, espero que tenham gostado, lembrem que qualquer informação que deixei passar, ou se quiserem adicionar qualquer coisa me mandem mensagem. Se esse artigo foi útil ficarei feliz. Abraços quentinhos para vocês!!
