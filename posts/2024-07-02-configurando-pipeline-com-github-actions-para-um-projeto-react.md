---
title: Configurando pipeline com github actions para um projeto react
description: Configurando ci/cd para um projeto react
date: 2024-07-02
tags: [react, github-actions, github, devops]
---

> A vida é muito importante para ser levada a sério. *Oscar Wilde*.

![github actions](/images/github-actions.webp)

Fazia tempo que não configurava um serviço de `ci/cd` e esses dias fui fazer isso no github usando o github actions e percebi ser bem simples, e podemos fazer várias rotinas, é bem legal, mesmo se você estiver trabalhando sozinho, pois consegue que todo commit seja verificado para saber se não quebrou nada.

Vou mostrar uma configuração simples e você pode adaptar para o que você vai precisar no seu dia-a-dia

Primeiro passo, dentro da raiz do seu projeto, crie uma pasta `.github` dentro dessa pasta crie outra pasta chamada `workflows` e dentro crie o seu arquivo para rodar sempre que um commit entrar na sua branch `main` ou sempre que abrir Pull Request. Vou chamar o arquivo de `build.yaml` para o exemplo:

```yml
name: Build and Deploy

on:
  push:
    branches: 'main'
  pull_request:
    branches: 'main'

jobs:
  tests:
    name: Run Tests
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Use Node.js 20.x
        uses: actions/setup-node@v3
        with:
          node-version: 20.x
          cache: 'yarn'

      - name: Install Dependencies
        run: yarn install

      - name: Run Tests
        run: yarn test

  deploy:
    name: Build and Deploy
    needs: [tests]
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Use Node.js 20.x
        uses: actions/setup-node@v3
        with:
          node-version: 20.x
          cache: 'yarn'

      - name: Install Dependencies
        run: yarn install

      - name: Run Build
        run: yarn build
```

1 `On` nessa propriedade dizemos quando a action deve rodar, no caso, quando acontecer um commit ou um PR para a branch main.


2 `Jobs` nessa rotina dizemos quais `scripts` que queremos que nosso action execute no meu caso só tem dois o de tests e deploy o primeiro argumento é nome da tarefa no meu caso são `Run Tests` e `Build and Deploy`, depois temos `runs-on` que vai ser o ambiente que vamos querer que o nossa pipe rode, ou seja, vamos querer uma máquina virtual ubuntu na última versão, antes de entrar nos `steps` nosso job de build tem uma instrução chamada `needs` passando o argumento [tests], ou seja, para o nosso deploy rodar, precisa rodar os testes antes sem que nada quebre.

3 `Steps` temos algumas rotinas aqui dentro, no primeiro `name e uses` as actions fazem checkout do seu código e “pedem autorização” para seguir com as próximas rotinas:

```yml
  - name: Checkout code
      uses: actions/checkout@v3
```

Depois podemos declarar qual versão do node ele vai usar para rodar os scripts do nosso projeto:

```yml
  - name: Use Node.js 20.x
    uses: actions/setup-node@v3
    with:
      node-version: 20.x
      cache: 'yarn'
```

Normalmente você vai ver essa propriedade cache com npm, mas eu preferi usar o yarn, pois estava usando ele localmente também.

Por último pedimos para de fato ele rodar o script de instalação e logo em seguida o de testes:

```yml
- name: Install Dependencies
    run: yarn install

- name: Run Tests
    run: yarn test
```

O de `build` é o mesmo, porém só muda de `yarn test` para `yarn build`.

Bem é isso, espero que tenham gostado, lembrem que qualquer informação que deixei passar, ou se quiserem adicionar qualquer coisa me mandem mensagem. Se esse artigo foi útil ficarei feliz. Abraços quentinhos para vocês!!
