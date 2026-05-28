---
title: "5 coisas que você precisa entender sobre Javascript"
description: "Algumas explicacões sobre coisas que você precisa entender sobre Javascript."
date: 2022-01-24
tags: [javascript]
background: "#D6BA32"
---

> Eu acredito que às vezes são as pessoas que ninguém espera nada que fazem as coisas que ninguém consegue imaginar. **Alan Turing**.

Muito bom estar de volta, escrevendo e escrevendo sobre Javascript. No nosso dia-a-dia é bem comum tentarmos entregar soluções rápidas e limpas, mas nem sempre conseguimos, por muitas razões, mas acredito que as duas principais sejam, tempo e conhecimento.

Por tempo, as vezes precisamos entregar uma `feature` ou corrigir algum `bug` e nem sempre temos tempo de pensar na melhor solução possível, por isso acabamos fazendo um código mais longo, para no futuro ( é bem difícil de isso acontecer ) voltarmos e fazer uma refatoração.

Por conhecimento, linguagens de programação tem muitas coisas que muitas vezes acabamos desconhecendo, para sanar esse tipo de coisa precisamos ter contato com a linguagem o maior tempo do nosso dia, para aprendermos mais sobre ela e sobre seus principais benefícios e é claro, sobre suas mágicas 😃.

Pensando nisso resolvi escrever sobre 5 coisas que vão ajudar no seu código Javascript no dia-a-dia. Bora !!!

## 1 Declarar várias variáveis de forma simples

```javascript
const [a, b, c] = [1, 2, 3];
```

Dessa forma temos 3 variáveis a, b,c e seus valores são 1, 2 e 3 respectivamente.

## 2 Operador ternário

```javascript
let nota = 8
const media = nota > 8 ? ‘Você passou’ : ‘Reprovado’
```

Usando esse tipo de operador, podemos evitar if and else desnecessários no nosso código.

## 3 String para número

```javascript
let total = +"453";
console.log(typeof total); // retorna number
```

É bem comum quando queremos converter string para número usarmos `parseInt` mas com Javascript podemos fazer dessa forma, só adicionando um sinal de + simples né ?! 😜

## 4 Repetir uma string algumas vezes

```javascript
let name = "maycon";
console.log(name.repeat(2));
ou;
"maycon".repeat(2);
```

Isso pode ser útil em alguma situação que tu precise repetir uma string para algum anúncio ou algo do tipo.

## 5 Exponencial de um número

```javascript
console.log(10 ** 2); // 100
```

É bem comum isso acontecer em exercícios de faculdade ou em alguns aplicativos financeiros, precisarmos do exponente de um número, podemos usar essa forma no lugar do `Math.pow(10, 2)` que ira reproduzir o mesmo resultado.

Bem é isso, espero que tenham gostado, lembrem que qualquer informação que deixei passar, ou se quiserem adicionar qualquer coisa me mandem mensagem. Se esse artigo foi útil ficarei feliz. Abraços quentinhos para vocês!!
