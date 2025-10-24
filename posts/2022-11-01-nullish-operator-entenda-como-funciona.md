---
title: "Nullish operator: entenda como funciona"
description: Um operador fantástico
date: 2022-11-01
image: /images/nullish-operator-entenda-como-funciona.webp
tags: [js, es2020]
background: "#D6BA32"
---

>Eu acredito que às vezes são as pessoas que ninguém espera nada que fazem as coisas que ninguém consegue imaginar. **Alan Turing.**

![nullish](/images/nullish-operator-entenda-como-funciona.webp)

A cada ano que passa o nosso tão querido JavaScript está ficando cada vez mais legal e evoluindo em uma velocidade quase que inacreditável. Essa mudança entrou na versão `EcmaScript 2020` ou `es11`. Com essa mudança podemos checar de maneira bem prática se uma variável que contém algum valor ou se está vazia.

Agora podemos facilitar pela inclusão do operador de coalescência que tem valores iniciais de cada tipo.

```javascript
const name = null ?? "Maycon"
const age = undefined ?? 30

console.log(name) // result Maycon

console.log(age) // result 30
```

É bem comum fazermos, verificações desse tipo:

```javascript
const num = 0
console.log(num || 1)
```

Nesse caso o console exibe 1 como resultado, talvez não seja o resultado que queremos e isso pode causar um erro na nossa aplicação, ou seja, o operador nullish só retorna o segundo valor, quando o primeiro valor é null ou undefined.

```javascript
const num = 0
console.log(num ?? 1) // result 0
```

Lembrando que você pode consultar em quais browsers e em quais versões o [nullish é suportado.](https://caniuse.com/mdn-javascript_operators_nullish_coalescing)

Se você está no `NodeJS`, ele é suportado a partir da versão 14.

Bom galera, o artigo de hoje foi bem curtinho, pois estou escrevendo esse artigo na hora do almoço (comendo um pedaço de costelinha 😃) e ouvindo um episódio do flow. Espero que tenham gostado, não esqueçam de que qualquer feedback, é muito bem vindo.

É isso galera, boa semana, abraços quentinhos para vocês !!
