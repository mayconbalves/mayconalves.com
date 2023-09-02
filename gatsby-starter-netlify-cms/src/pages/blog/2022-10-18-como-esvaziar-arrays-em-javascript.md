---
templateKey: 'blog-post'
title: 'Como esvaziar um array em javascript'
date: 2022-10-18T15:04:10.000Z
featuredpost: true
description: >-
  Nesse artigo eu mostro algumas maneiras de como esvaziar arrays em javascript de algumas maneiras diferentes.
tags:
  - javascript
  - array
  - frontend
---

![javascript](https://miro.medium.com/max/720/1*NDojKFkqkGU86VwXm1bM9Q.jpeg)

Galera no dia-a-dia estamos acostumados a trabalhar muito com objetos e arrays, mas as vezes eles podem complicar nossa vida se não soubermos estruturar bem um objeto ou se não soubermos manipular um array, em ambos os casos temos diversos caminhos e fazer diversas coisas diferentes, mas nesse post resolvi trazer uma coisa mais de base do JavaScript que nada mais é do que esvaziar um array, ou seja, vamos preencher um array de várias formas e vamos ver como deixar ele vazio.

Mas o que é um array ?
Na faculdade é bem comum, os professores falaram que precisamos criar uma lista e iterar sobre ela, e se você é novo em tecnologia e começou aprender HTML e CSS agora, não estou falando da tag, `<ul />, <li /> e <ol />` e sim criar um array 😃.

Arrays são objetos ( sim arrays são objetos, confuso não ? 😕 ) que na verdade são listas e eles tem vários métodos que nos ajudam a manipularmos de várias formas diferentes, não vou falar sobre todos eles, pois são muitos, mas escrevi três artigos explicando os principais, vou deixar os links aqui ( parte 1, parte 2, parte 3 ). Um array não tem tamanho nem tipo fixo, então o array é dinâmico e podemos colocar, strings, number, objetos etc…

Agora vamos brincar um pouco com nossos arrays, primeiro vamos de fato conferir se arrays são ou não objetos:

```javascript
var arr = [1, 2, 3]
console.log(typeof arr) // object
```

Vamos ver o tamanho no nosso array:

```javascript
var arr = [1, 2, 3]
console.log(arr.length) // 3
```

Obs: um array é iniciado na posição zero, então as posições do array acima serão:

```javascript
elementos [1, 2, 3]
posições [0, 1, 2]
```

Agora o motivo desse artigo, vamos aprender algumas formas de zerar um array, podemos simplesmente redeclarar um array:

```javascript
var arr = [1, 2, 3]
arr = []
console.log(arr) // []
console.log(arr.length) // 0
```

ou

```javascript
var arr = [1, 2, 3]
arr = 0
console.log(arr) // 0
console.log(arr.length) // undefined
```

No segundo caso temos undefined pois transformamos nosso array em um number e esse tipo de dado em JavaScript não possui a propriedade length, podemos falar sobre tipos de dados em outro post 😃.

Podemos mudar o length dele na força bruta 👊:

```javascript
var arr = [1, 2, 3]
arr.length = 0

```

Também podemos usar da maneira mais moderna:

```javascript
let arr = [1, 2, 3] // usando let
arr = []
console.log(arr) // []
console.log(arr.length) // 0
```
ou

```javascript
let arr = [1, 2, 3]
arr = 0
console.log(arr) // 0
console.log(typeof arr) // number
console.log(arr.length) // undefined
```

Também podemos tentar dessa forma:

```javascript
const arr = [1, 2, 3] // usando const
arr = []
console.log(arr)
```

Isso gera um erro, pois não podemos reatribuir uma const e também podemos usar o método splice() para fazer esse serviço para nós:

```javascript
let arr = [1, 2, 3]
arr.splice(0, arr.length)
console.log(arr) // []
```

Bom espero que tenham gostado, lembrando que qualquer feedback é muito bem vindo, espero vocês no próximo artigo, abraços quentinhos para vocês…

Fontes:

[MDN:](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)

[Delfstack:](https://www.delftstack.com/howto/javascript/how-to-empty-an-array-in-javascript/)

[JS tutorials:](https://www.javascripttutorial.net/array/4-ways-empty-javascript-array/)
