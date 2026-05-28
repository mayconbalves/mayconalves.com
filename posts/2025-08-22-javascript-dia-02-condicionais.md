---
title: "JavaScript dia 02: Condicionais"
description: "Condicionais são usadas para tomar decisões diferentes. Por padrão, instruções em JavaScript são executadas sequencialmente de cima para baixo. Se a l"
date: 2025-08-22
tags: [es6, front-end-development, javascript-concepts, javascript-development, javascript]
---

> Felicidade é como uma borboleta: quanto mais você tenta apanhá-la, mais ela se afasta de você. Mas se você dirigir sua atenção para outras coisas, ela virá e pousará suavemente no seu ombro. Henry Thoreau

![](https://cdn-images-1.medium.com/max/1024/1*RLCSo8CW8imRt1FXAoaX4g.png)

Condicionais são usadas para tomar decisões diferentes. Por padrão, instruções em JavaScript são executadas sequencialmente de cima para baixo. Se a lógica de processamento exigir, o fluxo sequencial de execução pode ser alterado, temos duas abordagens diferentes, a abordagem condicional e a abordagem repetitiva, hoje falaremos só da primeira abordagem.

Obs: Todos os códigos que iremos executar, será no [StackBlitz](https://stackblitz.com/) para você fazer os seus exemplos e exercícios, sim, teremos exercícios. Basta logar no site usando sua conta do google, clique em criar em novo projeto.

![](https://cdn-images-1.medium.com/max/1024/1*eAEIWEfQi2s5uhFIWXIYQg.png)

Basta escolher o nodejs

![](https://cdn-images-1.medium.com/max/1024/1*_su6QxevM8_yAKOxaq-Azg.png)

E agora você terá uma tela onde pode escrever seu código e vai ter um terminal para sempre que fizer um código você executar o comando node index.js

![](https://cdn-images-1.medium.com/max/1024/1*na8X33cXUR__vZfrsBtDTA.png)

Dito isso vamos para os condicionais.

#### if

Executa um bloco de código se a condição for verdadeira.

if (condicao) {  
  // aqui seu código é executado se a condição é verdadeira  
}

#### if…else

Permite executar um bloco caso a condição seja verdadeira e outro caso seja falsa.

if (condicao) {  
  // se a condição é verdadeira aqui é executado  
} else {  
  // senão seu código é executado aqui  
}

#### if…else if…else

Permite testar múltiplas condições.

if (condicao) {  
  // se a condição é verdadeira aqui é executado  
} else if (condicao) {  
  // se a primeira condição é falsa e a segunda é verdadeira aqui é executado  
} else {  
 // senão seu código é executado aqui  
}

#### switch case

Usado quando há muitas opções para uma mesma variável, para não termos um código muito grande e não termos muitos if else deixando nosso código feio e difícil de ler.

let cor = "verde";  
  
switch (cor) {  
  case "vermelho":  
    console.log("Pare!");  
    break;  
  case "amarelo":  
    console.log("Atenção!");  
    break;  
  case "verde":  
    console.log("Siga!");  
    break;  
  default:  
    console.log("Cor inválida");  
}

Note que o switch recebe a variável cor que tem o valor verde e tem vários case que são os tipos de valores que a variável cor poderia receber.

#### Operador ternário

Forma reduzida de escrever if...else. No começo eu demorei um pouco para entender esse operador ternário, mas quando fixou na mente só uso ele para fazer qualquer coisa. São dois operadores (nós iremos falar de operadores no próximo artigo, precisamos conhecer operadores para fazer exemplos legais até mesmo com condicionais) os operadores ? e :

let idade = 20;  
let status = idade > 18 ? "Maior de idade" : "Menor de idade";

Perceba que se a variável idade for maior > (operador de maior) 18 a condição é verdadeira, logo é executado o código depois do operador ? se for falsa é executado o código depois do operador : simples não?? Vamos transformar esse ternário em um if para você poder comparar:

let idade = 20  
  
if (idade > 18) {  
  "Maior de idade"  
} else {  
  "Menor de idade"  
}

Bem esses são os condicionais em JavaScript, esse foi mais curto, mas se preparem para o próximo artigo, pois iremos começar com alguns exercícios para aprofundarmos nosso conhecimento.

Se quiser adicionar qualquer coisa nesse artigo, fique a vontade, sua opinião é muito bem-vinda. Muito obrigado por tudo.

![](https://medium.com/_/stat?event=post.clientViewed&referrerSource=full_rss&postId=678d82e68ef2)
