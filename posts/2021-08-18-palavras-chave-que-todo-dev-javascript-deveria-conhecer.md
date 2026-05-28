---
title: "Palavras-chave que todo dev javascript deveria conhecer."
description: "Dicas para que todo dev javascript possa se beneficiar."
date: 2022-08-18
tags: [javascript, dev]
---

> Lute. Acredite. Conquiste. Perca. Deseje. Espere. Alcance. Invada. Caia. Seja tudo o quiser ser, mas, acima de tudo, seja você sempre. **Tumblr**.

Não importa se você está fazendo suas primeiras linhas de código javascript ou se você já muito experiente. Vou fazer uma lista de palavras reservadas do nosso querido JS, e algum exemplo de seu uso, chega de enrolação, bora lá..

## debugger

Poderia começar com várias palavras reservadas, mas decidi por essa, pois é uma das que eu mais uso e ela é auto explicativa.

## class

Outra palavra bem utilizada hoje em dia, pois a partir da famosa versão es6 ou es2015 ou ecmascript 2015 podemos criar classes, que são uma sintaxe sugar para os tão famosos prototypes hoje em dia é bem comum você ver um código javascript utilizando class.

```js
class Person {
  constructor(name) {
    this.name = name;
  }

  hello() {
    console.log(`Welcome ${this.name}`);
  }
}
const maycon = new Person("Maycon");
```

## this

Essa é uma palavra reservada que causa muitas lagrimas e confusão ( principalmente para quem vem de outras linguagens ). Muitas vezes o this é determinado como a função está sendo chamada. Temos dois contextos que são bem interessantes:

### Contexto global

```js
console.log(this.document === document); // true

// Em navegadores web, o objeto window é também o objeto global:
console.log(this === window); // true

this.a = 37;
console.log(window.a);
```

### Contexto de função

```js
function f1() {
  return this;
}

// No navegador
f1() === window; // true
```

Ambos exemplos foram retirados do site do mdn. Percebam que o this refere-se ao objeto global do qual ele está inserido, lembrando que dentro do navegador o objeto global é a própria window 😃.

### Contexto da arrow funciontion

Introduzida a partir do es6 tem o escopo do this definido lexicalmente, ou seja, seu valor é definido pelo contexto. vamos ao exemplo:

```js
var globalObject = this;
var foo = () => this;
console.log(foo() === globalObject);
```

## function

Usando para declarar uma função dentro do javascript, para declarar uma função no javascript é bem simples:

```js
function name(name) {
  return `hello ${name}`;
}
name("maycon"); // executando a função passando uma string como parâmetro
```

## if e else

Usados para criar condições dento javascript, se você já estudou estrutura de dados são instruções bem comuns, se você ainda não viu, de forma bem simplista, essa estrutura serve para controlarmos o que um usuário, pode ou não ver.

```js
function verifyAge(age) {
  if (age < 18) {
    return "nao e obrigado a votar";
  } else if (age <= 70) {
    return "obrigado a votar";
  } else {
    return "nessa idade seu voto e facultativo";
  }
}
```

## for

Agora que falamos de condições, temos os laços, eles são conhecidos como loop, eles ficam dentro desse loop, até suas condições serem completadas, além do for existe o do while e while que não são tão comuns em javascript, mas se você estuda estrutura de dados, acho legal dar uma olhada, afinal deixei o link, basta clicar, ler e aplicar 😃. Bora para um exemplo prático utilizando o loop for

```js
for (let i = 0; i < 9; i++) {
  console.log(i);
}
```

## return

Ela é usada para finalizar a execução de uma função com os valores que devem ser retornados

```js
function square(x) {
  return x * x;
}
```

Nessa função acima se tivesse qualquer instrução depois do return não aconteceria nada, pois ele iria retornar o valor de x \* x e parar a execução ali.

Existem muitas outras palavras reservadas, porém acredito que essas são essenciais para todo desenvolvedor que começou com javascript agora, ou aquele que já tem um pouco mais de experiência que realmente perceba que nosso dia-a-dia não é nada, sem essas palavras chaves.

Bem é isso, espero que tenham gostado, lembrem que qualquer informação que deixei passar, ou se quiserem adicionar qualquer coisa me mandem mensagem. Se esse artigo foi útil ficarei feliz. Abraços quentinhos para vocês!!
