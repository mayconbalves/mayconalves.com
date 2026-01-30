---
title: Closure em JavaScript
description: Aprenda a usar Closure em JavaScript
date: 2024-03-05
tags: [closure, javascript]
---

> Nunca deixe ninguém te dizer que não pode fazer alguma coisa. Se você tem um sonho tem que correr atrás dele. As pessoas não conseguem vencer e dizem que você também não vai vencer. Se você quer uma coisa corre atrás. **À Procura da Felicidade**.

[![closure](/images/closure-in-js.webp)]

Segundo o site Mozila uma closure é:

É a combinação de uma função com as referências ao estado que a circunda (o ambiente léxico). Em outras palavras, uma closure lhe dá acesso ao escopo de uma função externa a partir de uma função interna. Em JavaScript, as closures são criadas toda vez que uma função é criada, no momento da criação da função.

De uma forma um pouco mais simples, temos um closures, quando temos uma função dentro de outra, essa segunda função mais interna é a nossa closure, sei que é um pouco difícil de visualizar, mas vamos para um exemplo simples:

```javascript
let firstName = 'Maycon'
function displayName() {
  let lastName = 'Alves'; // LastName é uma variável local criada dentro da função displayName
  function joinNames() {
    // joinNames() é a função interna, uma closure
    // usa a variável declarada na função pai,
    // mas também pode usar a várial global
    console.log(`${firstName} ${lastName}`);
  }
  joinNames();
}
displayName();
```

Então esse é o exemplo mais simples de closure. Dessa forma no exemplo acima a função `joinNames` só está visível dentro da função, `displayName` isso torna nossa função "privada".


Pode parecer não muito intuitivo de que o código de fato funciona. Normalmente variáveis locais de uma função, apenas existem pela duração de sua execução. Uma vez que `displayName` terminou de executar, é razoável esperar que a variável `lastName` não será mais necessária.

Vamos para mais um exemplo:

```javascript
const add = (x) => {
  let secondNumber = 2
  function makeAdder() {
    return console.log(x + secondNumber)
  }
  makeAdder();
}

console.log(add(2))
console.log(add(3))
```

Nesse exemplo, tenho a função add que faz contas de soma, porém você não tem acesso à função que de fato faz essa soma, se você fizer algo dessa forma: `console.log(add.makeAdder())` você irá receber um erro `add.maker() is not a function`.

Podemos criar funções privadas com closure, os métodos privados só podem ser chamados dentro da própria classe (contexto), por isso eles podem deixar seu código mais seguro, como também ajuda que funções globais não tenham o mesmo nome.

```javascript
const makeLogin = () => {
  let privateUser = "Maycon";
  const useLogin = (val) => {
    if (val === privateUser) {
      return console.log("Logado com sucesso")
    } else {
      return console.log("Usuário ou senha incorretos")
    };
  }
  return {
    login: (user) => {
      useLogin(user);
    },
  };
};

const tryAcess = makeLogin()
console.log(tryAcess.login("Maycon"))
// deve retornar logado com sucesso

// se eu mudar a linha do console.log e chamar só a tryAcess
// conseguimos ver o que tem dentro de makeLogin


console.log(tryAcess)
// resultado { login: [Function: login] }
```

No exemplo acima, criei um login fake (bem raso) só para entender como uma closure se comporta, um usuário de fora só consegue visualizar e chamar a função login⁣ , mas não tem acesso à função useLogin que é onde fazemos a lógica de deixar o cara logar ou não, então podemos fazer coisas bem legais com closures.

Tentei ser o mais simples possível para poder passar o conceito de closures.

Bem é isso, espero que tenham gostado, lembrem que qualquer informação que deixei passar, ou se quiserem adicionar qualquer coisa me mandem mensagem. Se esse artigo foi útil ficarei feliz. Abraços quentinhos para vocês!!
