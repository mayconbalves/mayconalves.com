---
title: Como usar FETCH em suas requisições para API.
description: Usando FETCH API nativa para buscar nossos recursos
date: 2019-04-19
tags: [dev, javascript]
---

> Estamos olhando para estes campistas de rock 'n' rock, e sabemos o que está acontecendo em suas mentes porque estivemos lá. **Rob Halford.**

## O que é uma requisição ajax ?

> É simplesmente a comunicação com scripts do lado do servidor. Ele pode enviar bem como receber informações em uma variedade de formatos, incluindo JSON, XML, HTML, e até mesmo arquivos de texto. Porém a característica mais atraente do AJAX, é a sua natureza “assíncrona”, o que significa que ele pode fazer tudo isso sem a necessidade de atualizar a página. Isso permite a você atualizar partes de uma página com base em eventos do usuário — para saber mais continue lendo o artigo aqui do site [MDN](https://developer.mozilla.org/pt-BR/docs/Web/Guide/AJAX/Getting_Started)

Basicamente você envia dados (client) para o servidor (server) por base de url’s, formulários entre outros. E sempre que fazemos isso esperamos uma resposta, ou seja, esperamos algo do servidor.

## Agora que já sabemos de tudo isso, estamos pronto, bora usar essa tal de FETCH

Vamos fazer dois fetchs simples, o primeiro um simples get e o segundo um post que precisamos mandar um head e um body para funcionar.

Um exemplo de um GET simples na API de usuários do github

```javascript
const url = "https://api.github.com/users/nodejs";

fetch(url)
  .then((res) => res.json())
  .then((resp) => console.log(resp));
```

Linha 1: declaramos a url que queremos fazer a requisição.

Linha 3: usamos o **FETCH** para fazer a requisição para a url que declaramos.

Linha 4: é a resposta da requisição (lembrando que o fetch retorna uma promise) e assim que essa promise retornar um valor res transforme esse valor em json, `res.json()`.

Linha 5: já com a promise resolvida, só é necessário olhar a resposta que recebemos da nossa requisição.

Agora para finalizar, vamos a um exemplo de POST.

```javascript
const url = "https://api.github.com/gists";
const body = { name: "teste" };

fetch(url, {
  method: "POST",
  body: JSON.stringify(body),
})
  .then((res) => res.json())
  .then((response) => console.log(response));
```

Linha 1: declaramos a **URL** que queremos fazer a requisição.

Linha 2: declaramos um objeto body para ser enviado no nosso **POST**.

Linha 4: usamos o **FETCH** para fazer a requisição para a url que declaramos.

Linha 5: dizemos que a nossa requisição é um **POST**, por default o **FETCH** é **GET** por isso não há necessidade de declarar um método.

Linha 6: estamos mandando um **body** (corpo) na nossa requisição, no nosso caso é um simples objeto que tem um nome, ainda transformamos cada elemento do objeto em string, usando **JSON.stringify**.

Linha 8: é a resposta da requisição (lembrando que o fetch retorna uma promise) e assim que essa promise retornar um valor res transforme esse valor em json, **res.json()**.

Linha 9: já com a promise resolvida, só é necessário olhar a resposta que recebemos da nossa requisição.

Bem é isso, espero que tenham gostado, lembrem que qualquer informação que deixei passar, ou se quiserem adicionar qualquer coisa me mandem mensagem. Se esse artigo foi útil ficarei feliz. Abraços quentinhos para vocês!!
