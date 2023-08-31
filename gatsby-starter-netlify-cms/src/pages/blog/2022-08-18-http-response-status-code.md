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

Estou escrevendo esse artigo enquanto minha esposa assiste o filme [O diabo veste prada](https://www.youtube.com/watch?v=2A0xhJ7RcCs&ab_channel=Telecine) (não estou prestando muita atenção, mas me parece um bom filme) estava fazendo um quiz de JavaScript e apareceu uma pergunta bem interessante, daí resolvi escrever sobre response status code não é muito complicado, mas se você consome ou cria API's precisa entender um pouco sobre alguns deles, não estou aqui para falar que você precisa conhecer todos (eu não conheço 😃) mas pelo menos os ranges e os principais você precisa conhecer e entender.

### 1xx (informação)

### 2xx (sucesso)

### 3xx (redirecionamento)

### 4xx (erro no cliente / frontend)

### 5xx (erro no servidor / backend)

Vou falar um pouco de alguns na faixa dos 200 que acho que precisamos entender.

## 200 status ok

Isso significa que a requisição foi feita com sucesso.

## 201 Created

Isso significa que o requisição foi feita com sucesso e que um recurso foi criado, geralmente é usado com o verbo POST.

## 204 No Content

Requisição feita com sucesso, mas não retorna nada para o cliente (frontend) isso pode acontecer em uma redefinição de senha.
***

Agora um pouco sobre status da faixa de 400 que acho importante.

## 400 Bad Request

Requisição feita com algum erro pelo cliente (frontend) esquecendo de passar algum parâmetro necessário, ou chamando alguma API de forma errada, por exemplo: https://api.githubsss.com/ ao invés do certo https://api.github.com/

## 401 Unauthorized

Requisição não autorizada, quando você precisa de credencias para pedir algum recurso ao servidor (backend) e não tem essas credenciais, imagine estar logado em um sistema e o seu token expira só que você ainda não deu refresh na página, quando tenta fazer alguma página acontece esse erro.

## 404 Not Found

Recurso não encontrado, isso pode acontecer com algum tipo de link, imagina que tem alguma promoção relâmpago em um site de varejo, só que essa promoção só irá durar 24h. Pode ser que acessemos depois desse período e caímos em uma página de 404.
***

Agora para finalizar falar sobre um da faixa dos 500 de status code.

## 500 Internal Server Error

Esse erro acontece quando o frontend pede algum recurso para o backend e por algum problema (instabilidade por exemplo) ele não consegue responder com um recurso que o frontend espera.

Bom existem muitos outros status code, mas acredito que esses você precisa conhecer para entender quando pede algum recurso para o backend e você recebe algum desses status ou quando está construindo uma API e precisa retornar o status correto para o seu cliente.

Espero que tenham gostado, lembrem que qualquer feedback é muito bem vindo e se acharam que faltou algum status code aqui nessa lista, por favor comentem aqui em baixo. Abraços quentinhos para vocês !!!

