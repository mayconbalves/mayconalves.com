---
title: Métodos para arrays em javascript parte 02
description: segunda parte sobre métodos auxiliares de arrays
date: 2022-09-14
image: /images/metodos-para-arrays-parte-02.webp
tags: [js]
background: "#D6BA32"
---

> Se eu vi mais longe, foi por estar sobre ombros de gigantes. **Isaac Newton**

![javascript cheet set](/images/metodos-para-arrays-parte-02.webp)

No último artigo escrevi alguns métodos para nos dar aquele help quando se trata de arrays em javascript, agora mais alguns métodos que podem ser bem úteis no nosso dia-a-dia. Se não leu o primeiro artigo [clique aqui para ler.](https://mayconbalves.com.br/m%C3%A9todos-para-arrays-em-javascript-%E2%80%94-parte-01/) Agora sem mais delongas vamos nessa.

## shift()

Esse método é bem simples, ele serve para remover o primeiro elemento de um `array` e também diminui o `length` do `array`, se o `length` for igual 0 o método retorna `undefined.`

```javascript
const numbers = [0, 1, 2, 3, 4, 5];
numbers.shift();
console.log(numbers); // [1, 2, 3, 4, 5]
```

## unshift()

Adiciona um ou mais elementos no inicio do `array.`

```javascript
const numbers = [0, 1, 2, 3, 4, 5];
numbers.unshift(-2, -1);
console.log(numbers); // [-2, -1, 0, 1, 2, 3, 4, 5]
```

## reverse()

Esse método também é bem simples, mas ajuda bastante em algumas situações, ele simplesmente inverte o nosso `array.`

```javascript
const numbers = [0, 1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // [5, 4, 3, 2, 1, 0]
```

## concat()

Ele uni todos os elementos e retorna um novo `array.` Simples não ? 😖 Mas ele tem dois pontos que precisamos ficar atentos. 1) O método **concat()** copia a referência de objetos, ou seja, tanto a cópia quanto o `array` são modificados. 2) Com `strings` e `numbers` o método copia os valores, ou seja, os valores originais não são modificados.

```javascript
const firstName = ["maycon"];
const lastName = ["alves"];
console.log(firstName.concat(lastName)); // ['maycon', 'alves']
```

Podemos ainda passar diretamente um argumento para o método.

```javascript
const firstName = ["maycon"];
console.log(firstName.concat("alves")); // ['maycon', 'alves']
```

## slice()

O método retorno um novo `array` a partir de dois indices passados para o método o de inicio e do fim, parece meio confuso, mas vendo o exemplo fica mais fácil de entender 😃. Obs: esse método tem os mesmos pontos de atenção do método **concat()**.

```javascript
const numbers = [0, 1, 2, 3, 5];
console.log(numbers.slice(0, 3)); // [0, 1, 2]
```

Bem é isso, espero que tenham gostado, lembrem que qualquer informação que deixei passar, ou se quiserem adicionar qualquer coisa me mandem mensagem. Se esse artigo foi útil ficarei feliz. Abraços quentinhos para vocês!!
