---
title: 3 Tricks legais que o JavaScript oferece.
description: Bora para algumas coisas que javascript oferece.
date: 2022-03-24
image: /images/3-tricks-legais-que-o-javascript-oferece.webp
tags: [javascript]
background: "#D6BA32"
---

> Estou sempre disposto a aprender, mas nem sempre gosto que me ensinem. **Winston Churchill**.

![javascript](/images/3-tricks-legais-que-o-javascript-oferece.webp)

Galera prometi que escreveria um artigo por semana, mas já tem quase duas semanas (essa semana não acabou ainda 😃 ) então resolvi escrever um artigo com 3 tricks do JavaScript que podem te ajudar, sem mais delongas bora lá.

## 1 Cheque se existe a propriedade em um objeto

Essa trick é bem interessante e bem simples para usarmos, vamos usar o operador `in` para fazer essa checagem:

```javascript
const person = {
  firstName: "Maycon",
  lastName: "Alves",
};
console.log("name" in person); // false
console.log("firstName" in person); // true
```

Podemos checar também se existe valor em um array pelo index:

```javascript
const person = ["Jason", "LatherFace", "Freddy", "Chucky"];
console.log(5 in person); // false
console.log(1 in person); // true
```

## 2 Cheque se o tipo é um array

Já usei essa verificação algumas vezes pois acho ela vem elegante:

```javascript
const person = ["Jason", "LatherFace", "Freddy", "Chucky"];
const a = "";
const car = {
  name: "Fusca",
  color: "amarelo",
};
console.log(Array.isArray(person)); // true
console.log(Array.isArray(a)); // false
console.log(Array.isArray(car)); // false
```

## 3 Converter string para boolean

Essa trick acho bem legal, mas pode gerar um pouco de confusão para quem lê o código, mas ainda assim pode lhe ajudar em alguma feature, assim como já me ajudou antes para checagem de string vazia ( existem outros métodos, esse é só mais um ) :

```javascript
const firstName = "Maycon";
const lastName = "";
console.log(!!firstName); // true
console.log(!!lastName); // false
```

Bem é isso, espero que tenham gostado, lembrem que qualquer informação que deixei passar, ou se quiserem adicionar qualquer coisa me mandem mensagem. Se esse artigo foi útil ficarei feliz. Abraços quentinhos para vocês!!
