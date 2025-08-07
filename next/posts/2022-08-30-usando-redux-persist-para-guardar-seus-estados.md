---
title: Usando Redux-persist para guardar seus estados.
description: usando localstorage para guardas nossos states
date: 2022-08-29 09:45:11
image: https://miro.medium.com/max/640/1*cgENbj5agK33nWhORN6QpA.jpeg
category: redux
background: "#774ABC"
---
>O tamanho trabalha contra a excelência. **Bill Gates.**
![redux](https://miro.medium.com/max/640/1*cgENbj5agK33nWhORN6QpA.jpeg)

Ainda é bem comum em projetos de ReactJs, usarmos algum tipo de lib para gerenciar os estados da nossa aplicação, eu trabalhei quase que 100% em aplicações que utilizavam/utilizam redux, se não conhece ainda, leia a documentação deles que é muito boa, [clicando aqui.](https://redux.js.org/) Em alguns tipos de aplicações precisamos guardar alguns dados (persistir) para que possamos consultar em algum momento, por exemplo, assim que você faz login em alguma aplicação, é gerado um token que nada mais é do que uma credencial para você poder explorar o aplicativo e suas funcionalidades, porém se o frontend não armazenar esse token, podemos ter vários problemas, um deles é, se você der refresh em alguma página você será deslogado, pois normalmente qualquer chamada que fazemos para a API, depois de logado é necessário repassar o este token para o backend.

Podemos fazer isso de algumas maneiras diferentes, usando localstorage, sessionstorage e afins, mas hoje vamos ver como usar o redux-persist que faz esse trabalho de guardar esses estados, usando o localstorage no nosso exemplo, para dar um refresh na nossa aplicação e não perdermos os dados que estão em tela.

O repositório que irei usar como exemplo é esse aqui:
`**https://github.com/mayconbalves/github-stars**`

Ele é um pouco mais antigo, mas vai servir para o exemplo, quando vocês olharem o código, ele vai estar atualizado, então nas partes que eu alterei para usar o **redux-persist** vou por a diferença do antes e depois dos arquivos.

Primeiro passo para instalar a lib no seu projeto basta rodar:

`npm install redux-persist`

Depois de instalado, vou atualizar o arquivo store.js

![store.js](https://miro.medium.com/max/1400/1*MsUsNZ-9rqYqKtZzzmWfiQ.png)

Notem que configurei de forma bem simples e nesse caso eu usei o `redux-thunk` que é um middleware para sincronia do react e redux, se você não conhece, [clique aqui para ler sobre ele.](https://github.com/reduxjs/redux-thunk) Agora nossa store, está desse jeito:

![store.js](https://miro.medium.com/max/1400/1*LSa1SBFFta6KZ9XI-kW0Ow.png)

Eu inclui as **linhas 3 e 4**, que são as funções que vou usar do redux-persist, inclui a const persistConfig que é um objeto simples, passando a key, que por padrão a documentação pede para chamar de `root` e passei a storage, que vai ser onde todos os meus reducers vão estar armazenados. Na linha 12 criei uma const persistedReducer que recebe o persistReducer que é uma função que recebe os nossos reducers e a configuração que acabamos de criar.

Antes quando eu criei a const store eu passava os reducers para ela, mas agora eu passo nossa const persistedReducer que já contem os reducers. Por último eu criei uma const persistor que usa a função persistStore que nesse momento usa nossa nova store configurada com o redux-persist.

Agora as duas alterações que precisamos fazer são bem simples, primeiro no nosso index.js

![index.js](https://miro.medium.com/max/1400/1*g-ld6B98acNkH_zLjiPNQA.png)

O importante aqui são as linhas 5 que é onde importamos a store que vai mudar e também na linha 22, que passamos a store para o nosso componente root que é onde as rotas da aplicação ficam.

![root](https://miro.medium.com/max/1400/1*Y3Gtz16EJl7iLF0BXhQP8Q.png)

Notem que mudei como a store é importada, pois mudei o export dela e também importei o persistor, além disso inclui o persistor na linha 22, pois o Root agora recebe ele como prop.

Dentro do root.js eu uso o provider do react-redux para receber nossa store e ficar visível para toda aplicação e também a alteração que eu fiz é bem tranquila. Vamos ver o antes e depois do nosso root.js

![root.js](https://miro.medium.com/max/1400/1*V6Ar5o_V2pJ2KO9aeCRZNw.png)

Recebo a store como prop do componente e passo para o provider, bem simples. E agora o nosso **root.js** ficou assim:

![root.js](https://miro.medium.com/max/1400/1*t36DlhiQ4OGWmwWRC89wYQ.png)

Adicionei o PersistGate que é o “provider” do redux-persist e usei ele logo abaixo do provider do react-redux, recebendo ```loading={null}``` e ```persistor={persistor}``` o **loading** é uma prop obrigatória, mas se você não quiser usar, basta deixar o seu valor como null .

Pronto já implementamos o nosso redux-persist e vocês podem dar refresh o quanto quiserem na aplicação de vocês que não vão perder o estado atual do componente. Se forem usar o meu repositório como exemplo, façam o teste dele antes e depois do redux-persist, só commitei a inclusão da lib, mas as alterações eu deixo por conta de vocês.

Espero que tenham gostado, qualquer feedback, critica ou sugestão são sempre muito bem vindos. Abraços quentinhos para vocês !!!
