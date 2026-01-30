---
title: Entenda a diferença entre function e arrow function
description: Vamos entender a diferença entre function e arrow function
date: 2023-09-23
tags: [js]
---

> A prova de que no futuro não existirão viagens no tempo é que não estamos sendo visitados pelos viajantes do futuro. **Stephen Hawking**.

![arrow function](/images/arrow-function-and-regular-function.webp)

## Arrow function

As `arrow functions` foram introduzidas na tão famosa atualização de 2015 ou `es5` ou `es2015` que trouxe diversas mudanças bem significativas para o javascript, tornando uma linguagem mais poderosa e facilitou muito a vida de quem vinha de outra linguagem, e de quem estava começando estudar, pois trazia algumas facilidades bem bacanas como métodos que nos ajudava a manipular arrays de várias formas diferentes. Se quiser detalhes de todas as mudanças nessa especificação [clique aqui](https://www.w3schools.com/js/js_es5.asp).

### Sintaxe menor
A primeira diferença que podemos notar é como podemos reduzir bastante o quanto de código escrevemos, se a `arrow function` receber um parâmetro só, podemos omitir os parênteses, também podemos omitir o a palavra chave `return` se só tivermos uma linha dentro da função e também não precisamos usar as chaves `{}` então podemos ter funções bem reduzidas:

```javascript
const fullNameWithParams = (firstName, lastName) => {
  return console.log(`${firstName} ${lastName}`)
}

fullNameWithParams('Maycon', 'Alves')

const fullNameWithoutParams = () => {
  const fullName = 'Maycon Alves'
  return console.log(`${fullName}`)
}

fullNameWithoutParams()

const fullNameWithOneParams = (name) => {
  const lastName = 'Alves'
  return console.log(`${name} ${lastName}`)
}

fullNameWithOneParams('Maycon')

const fullNameWithoutParentheses = name => {
  const lastName = 'Alves'
  return console.log(`${name} ${lastName}`)
}

fullNameWithoutParentheses('Maycon')

const fullNameWithoutReturn = () => {
  console.log(`Maycon Alves`)
}

fullNameWithoutReturn()

const fullNameOneLine = () => console.log(`Maycon Alves`)

fullNameOneLine()
```

### Parâmetros diferentes

Uma das coisas bizarras do javascript mais antigo é que em uma função ele aceitava dois parâmetros com o mesmo nome, já no caso da arrow isso não acontece, tomamos um erro:

```javascript
const sum = (n, n) => n * n
sum(2, 4)

// const sum = (n, n) => n * n
                ^
// SyntaxError: Duplicate parameter name not allowed in this context
```

### Contexto do this
Uma `arrow function` não tem seu próprio `this` o valor `this` do contexto léxico encapsulado é usado, ou seja, de uma forma um pouco mais simples uma `arrow function` pode acessar o contexto global:

```javascript
const arrowFunction = () => {
  console.log(this) // retorno quando não está dentro de nenhum contexto {}
}

arrowFunction()

function contextToFunction() {
  this.firstName = 'Maycon'
  this.lastName = 'Alves'
  const arrowFunction = () => {
    console.log(`${this.firstName} ${this.lastName}`) // retorno Maycon Alves pois ele acessa o contexto this do objeto contextToFunction
  }
  arrowFunction()

}

contextToFunction()
```

No primeiro caso ele retorna um objeto vazio, pois a função não está em nenhum contexto, já no segundo caso ele acessa o `this` do objeto `contextToFunction` que é o correto.

## Regulares functions

Assim usamos uma função regular:

```javascript
function regular() {
  // O contrutor Person() define `this` como uma instância dele mesmo.
  this.age = 0

  setTimeout(function regularThis() {
    return console.log(this) // esse caso o this é a window e não o objeto regular que deveria ser o certo
  }, 1000)
}

regular()
```

Para funcionar da forma como esperamos, teríamos que fazer uma pequena gambiarra:

```javascript
function regular() {
  var that = this
  that.name = 'Maycon Alves'

  setTimeout(function regularThat() {
    return console.log(that) // esse caso com o that conseguimos acessar a prop name
  }, 1000)
}

regular()
```

### Sem o uso de new
Não podemos instanciar uma `function arrow function` se fizermos isso receberemos um erro.

### Não temos hoisting
Não podemos chamar uma `arrow function` antes de ele ser declarada, se fizermos isso receberemos um erro:

```javascript
withoutHost() // executa normalmente

function withoutHost() {
  return console.log('with host')
}

withoutHost() // ReferenceError: Cannot access 'withoutHost' before initialization

const withoutHost = () => {
  return console.log('with host')
}
```

Bem é isso, espero que tenham gostado, lembrem que qualquer informação que deixei passar, ou se quiserem adicionar qualquer coisa me mandem mensagem. Se esse artigo foi útil ficarei feliz. Abraços quentinhos para vocês!!
