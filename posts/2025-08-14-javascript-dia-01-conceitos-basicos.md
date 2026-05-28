---
title: "JavaScript dia 01: Conceitos básicos"
description: "Quero escrever uma série de artigos sobre o nosso querido e odiado JavaScript, desde conceitos básicos, até conceitos avançados, para isso vamos fazer"
date: 2025-08-14
tags: [es2015, javascript-development, javascript, js, javascript-tips]
---

> Lutar pelo amor é bom, mas alcançá-lo sem luta é melhor. William Shakespeare

![](https://cdn-images-1.medium.com/max/1024/1*BqaMfJcQ48i5WYrYhQwLvg.png)

Quero escrever uma série de artigos sobre o nosso querido e odiado JavaScript, desde conceitos básicos, até conceitos avançados, para isso vamos fazer alguns exercícios e vou deixar várias referências nos artigos para nos aprofundar o máximo possível na linguagem. Quem sabe essa série escrita vire vídeos.

Sei que o primeiro capítulo é chato, mas preciso contar algumas coisas do JavaScript antes de iniciar os conceitos básicos, vou tentar fazer isso menor mente possível, vamos lá.

#### História resumidíssima

*   **1995** — Criado por **Brendan Eich** na Netscape em 10 dias, inicialmente chamado _Mocha_.
*   **1997** — Padronizado como **ECMAScript**.
*   **2009** — **ES5** traz melhorias e compatibilidade entre navegadores.
*   **2015** — **ES6** revoluciona a linguagem (let/const, arrow functions, classes, módulos).
*   **Hoje** — Usado no navegador, servidor (Node.js), mobile, desktop e até IoT; um dos pilares da web.

#### Mas para que serve o JavaScript?

Também reduzidamente, possibilita **criar interatividade e dinamismo** em páginas e aplicações web, além de ser usado no servidor ([Node.js](https://nodejs.org/pt)) e em diversos tipos de software, inclusive para desktop ([electron](https://www.electronjs.org/pt/)).

Agora que já sabemos o básico sobre JavaScript bora para seus conceitos básicos.

#### Variáveis

No JavaScript temos três formas de declarar variáveirs:

var name = 'js' // maneira antiga de declarar variáveis em javascript escopo global  
let name = 'js' // maneira nova de declarar variáveis com escopo  
const name = 'js' // constantes em javascript tem o conceito de imutabilidade

vamos ver como elas funcionam no browser mesmo, vamos abrir o console:

*   **Windows/Linux:** Ctrl + Shift + J
*   **macOS:** Cmd + Option + J

![](https://cdn-images-1.medium.com/max/1024/1*HH-0wK9n_c9GugGL2iXgdQ.png)

Usamos também o console.log(name) usando o nome da variável para imprimir ela no console do navegador.

![](https://cdn-images-1.medium.com/max/1024/1*n269YV8IBto_79d7bkL7Sg.png)

Mesma coisa do exemplo de cima usamos o console.log para imprimir a variável.

![](https://cdn-images-1.medium.com/max/1024/1*thQRCcpXqLjs83X0l072bQ.png)

Por último declaramos uma const com o mesmo nome name e ele me retorna um erro dizendo que já foi declarada, ou seja, não podemos declarar constantes com o mesmo nome de variáveis que já foram declaradas anteriormente.

Porém no caso de var e let podemos usar o mesmo nome para reatribuir valores, afinal o próprio nome já nos da uma dica, variável, algo que muda com o tempo. Mas vou mostrar um exemplo no console do navegador mesmo.

![](https://cdn-images-1.medium.com/max/1024/1*yQ5bwdlkBWJYrkGaCaCz_Q.png)

Vejam que fui alterando o valor da let idade que nasceu tendo o valor 10, mas que poderia ou não terminar com o mesmo valor.

#### Tipos de dados

Nós temos alguns tipos de dados no JavaScript:

**Primitivos** (armazenam valores simples, imutáveis):

*   **string** — texto ("Olá")
*   **number** — números inteiros e decimais (42, 3.14)
*   **boolean** — verdadeiro ou falso (true, false)
*   **undefined** — variável declarada sem valor
*   **null** — valor intencionalmente vazio
*   **symbol** — valor único e imutável (a partir da ES6 de 2015)
*   **bigint** — números inteiros muito grandes (ES2020)

**De referência** (armazenam endereços para objetos na memória):

*   **Object** — coleção de pares chave/valor
*   **Array** — lista ordenada
*   **Function** — bloco de código executável
*   **Date — t**rabalha com datas e horas.
*   **RegExp — e**xpressões regulares para buscas de padrões em texto.
*   **Map — a**rmazena pares chave/valor com qualquer tipo de chave.
*   **Set — c**onjunto de valores únicos.

São bastante, mas vamos falar deles com mais profundidade mais para frente.

#### Comentários

As vezes fazemos funções complexas, ou escrevemos constantes que precisam de algum comentário para que serve, pois o seu projeto pode ser gigante, nessa parte os comentários podem ajudar muito se o seu código não for tão bem escrito (acredite, acontece muito), por motivos de prazo e afins.

// Isso é um comentário de uma linha  
let name = "js"; // Também pode estar no final de um código  
  
e  
  
/\*  
Isso é um comentário  
de várias linhas  
\*/

#### Escopo

Em qualquer linguagem de programação é fundamental entender o escopo, pois dessa forma você conseguirá entender as coisas que estão acontecendo.

#### Global

Variáveis globais declaradas **fora das chaves** ficam acessíveis em qualquer parte do código.

let name = "js"; // Global  
{  
  // podemos redeclarar let name dentro do bloco  
  let name = "nodejs";  
  console.log(name); // imprime nodejs  
}  
console.log(name) // imprime js  
  
let lastName = "js"  
let lastName = "nodejs"  
console.log(lastName) // SyntaxError: Identifier 'lastName' has already been declared  
// diferente do exemplo de cima  
  
Porém se eu fizer isso o resultado muda  
let name = "js"; // Global  
{  
  name = "nodejs";  
  console.log(name); // imprime nodejs  
}  
console.log(name) // imprime nodejs

Notem que no primeiro exemplo, estou criando duas variáveis, a primeira let name tem o escopo global já a segunda tem o escopo de bloco, ou seja, não pode ser acessada de fora. Tentem usar algo assim:

let name = "js"; // Global  
{  
  // podemos redeclarar let name dentro do bloco  
  let lastName = "nodejs";  
  console.log(lastName); // imprime nodejs  
  console.log(name); // imprime js  
}  
console.log(lastName) // ReferenceError: lastName is not defined

Você tomara esse erro, pois lastName só existe no bloco, fora dele não existe.

### Escopo de função

Variáveis declaradas dentro de uma função só existem dentro dela.

function teste() {  
  let msg = "Olá";  
  console.log(msg); // Funciona  
}  
teste();  
console.log(msg); // ❌ Erro: msg não existe aqui

Vamos falar um pouco menos desse caso, pois vamos ver funções no próximo artigo e vamos recapitular sobre o escopo de função.

### Escopo de condicionais e loops.

*   Criado com {} usamos as chaves para delimitar e criar um escopo também, também falaremos só o básico pois vamos falar sobre condicionais mais para frente.

if (true) {  
  let a = 10;  
  var b = 20;  
}  
// console.log(a); // ❌ Erro  
console.log(b); // ✅ 20  
  
for (let i = 0; i < 5; i++) {  
  console.log("Número:", i);  
}  
  
let i = 0;  
while (i < 5) {  
  console.log("Contagem:", i);  
  i++;  
}  
  
let i = 0;  
do {  
  console.log("Valor:", i);  
  i++;  
} while (i < 5);  
  
const frutas = \["maçã", "banana", "uva"\];  
for (const fruta of frutas) {  
  console.log(fruta);  
}  
  
const pessoa = { nome: "Maycon", idade: 30 };  
for (const chave in pessoa) {  
  console.log(chave, ":", pessoa\[chave\]);  
}

### Escopo léxico (ou estático)

Funções **lembram** o ambiente em que foram criadas.

function externa() {  
  let x = "Estou na externa";  
  function interna() {  
    console.log(x); // Acessa variável da externa  
  }  
  interna();  
}  
externa();

Essa é um pouco mais complicado e vamos deixar também para capítulos mais para frente.

Bem para iniciar é isso, espero que tenham gostado, qualquer conteúdo que queiram adicionar, deixem nos comentários, e qualquer sugestão será bem-vinda.

Referências e guia de estudos.

*   [Aprenda javascript em 5 minutos](https://www.youtube.com/watch?v=WRlfwBof66s)
*   [O que é javascript?](https://www.hostgator.com.br/blog/o-que-e-javascript/?gad_source=1&gad_campaignid=22134387764&gbraid=0AAAAAD5rgDayHeqsxEb_UqteI-3xlbn-v&gclid=CjwKCAjw7_DEBhAeEiwAWKiCC76yfbNvIZ1hq6vtZO47Se5nx-CUStmxWzFHqZnACmn36BIQ3bUJdhoCHg8QAvD_BwE)
*   [Noções básicas de javascript](https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity)
*   [Introdução ao javascript](https://www.dio.me/articles/introducao-ao-javascript-fundamentos-basicos)
*   [Sintaxe e tipos](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types)
*   [Escopo](https://developer.mozilla.org/pt-BR/docs/Glossary/Scope)
*   [Escopo do javascript](https://www.w3schools.com/js/js_scope.asp)
*   [Scope in javascript](https://www.freecodecamp.org/news/scope-in-javascript-global-vs-local-vs-block-scope/)
*   [Grammar and types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types)

![](https://medium.com/_/stat?event=post.clientViewed&referrerSource=full_rss&postId=714ef452c537)
