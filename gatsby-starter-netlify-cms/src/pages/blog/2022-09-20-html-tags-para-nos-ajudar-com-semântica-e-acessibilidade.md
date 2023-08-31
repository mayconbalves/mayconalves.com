---
templateKey: 'blog-post'
title: 'Just in: small batch of Jamaican Blue Mountain in store next week'
date: 2017-01-04T15:04:10.000Z
featuredpost: true
description: >-
  We’re proud to announce that we’ll be offering a small batch of Jamaica Blue
  Mountain coffee beans in our store next week.
tags:
  - jamaica
  - green beans
  - flavor
  - tasting
---

>Eu sempre fui o tipo de pessoa que, se há alguma coisa que pode me matar, eu quero saber algo sobre isso. **Ray Charles.**

![acessibilidade](https://miro.medium.com/max/1400/1*8BpDVqyLm-hAQ4aQmEzChA.png)

## Por que acessibilidade é importante ?

Diferente de dez anos atrás, hoje em dia praticamente todo mundo tem um celular com acesso a internet. Mas muitas vezes acabamos esquecendo que tem pessoas que acessam os sites que construímos que possuem algum tipo de deficiência (visual, auditiva, etc…). Pensando nessas pessoas, precisamos escrever um html semântico e com atributos de acessibilidade, para facilitar a vida dessas pessoas, além disso ganhamos em mais dois pontos, com uma boa semântica temos um código bem escrito e de fácil manutenção, segundo ponto é que também nos ajuda com o SEO (pode gerar um novo artigo) que falando a grosso modo, ele ajuda sua página/site ser “achado” de maneira mais fácil nos buscadores.

## Títulos e subtítulos

É muito comum quando estamos aprendendo, usar muitos títulos em uma página, mas por uma questão de semântica e acessibilidade o ideal é termos apenas um h1 por página, por isso se quisermos usar um subtítulo podemos usar as tags h2, h3… h6 para nos auxiliar. Os títulos são importantes, pois uma pessoa com deficiência visual ou alguma deficiência motora, que tenha a necessidade de usar um microfone para achar uma página.

## Destaque seu texto

Podemos destacar algum trecho do texto para darmos uma ênfase se for necessário. Por isso temos 4 tags: 
`<strong>, <b>, para negrito` e `<em>, <i>`
para itálico que fazem essa função, sem a necessidade de escrevermos nada em css, porém existe uma diferença entre elas.

As diferença entre as tags de negrito é que o `strong` o texto é carregado com entoação, ou seja, com semântica e o `b` apenas deixa o texto destacado. Já com as tags em itálico o `em` gera um texto a ser lido com ênfase e o `i` apenas destaca o texto.

## Abreviações são importantes

Utilizamos muitas siglas e muitas abreviações no nosso dia a dia, pelo menos para mim é bem comum, até pouco tempo atrás eu acabava usando uma tag `span` que não tem nenhum valor semântico, e simplesmente estilizar da melhor forma possível. Agora sempre que preciso de alguma sigla eu uso a `abbr` com o atributo title para explicar o que significa a sigla. Vamos para um exemplo:

```html
<p>Eu possuo um <abbr title="Cadastro Nacional da Pessoa Jurídica">CNPJ</abbr></p>
```

## Para cadastros e endereços

Em alguns casos, precisamos mostrar um endereço físico, eletrônico ou até mesmo de e-mail, temos a tag `address` que nós auxilia com a semântica e com acessibilidade, principalmente com leitores de tela 😃

Ainda temos muitas coisas sobre acessibilidade e semântica para conversarmos, mas vou deixar para um segundo post e não deixar essa leitura muito pesada, então espero que vocês tenham gostado, lembre-se, qualquer dúvida, crítica ou feedback, pode deixar aqui que terei o maior prazer em responder.

E isso aí galera, abraços quentinhos para vocês !!