---
title: Usando redux-persist para guardar seus dados.
description: Vamos guardar dados usando redux-persist.
date: 2022-03-02
tags: [react, redux-persist, redux]
---

> O tamanho trabalha contra a excelência. **Bill Gates**.

Ainda é bem comum em projetos de ReactJs, usarmos algum tipo de lib para gerenciar os estados da nossa aplicação, eu trabalhei quase que 100% em aplicações que utilizavam/utilizam redux, se não conhece ainda, leia a documentação deles que é muito boa, [clicando aqui](https://redux.js.org/). Em alguns tipos de aplicações precisamos guardar alguns dados (persistir) para que possamos consultar em algum momento, por exemplo, assim que você faz login em alguma aplicação, é gerado um token que nada mais é do que uma credencial para você poder explorar o aplicativo e suas funcionalidades, porém se o frontend não armazenar esse token, podemos ter vários problemas, um deles é, se você der refresh em alguma página você será deslogado, pois normalmente qualquer chamada que fazemos para a API, depois de logado é necessário repassar o este token para o backend.

Podemos fazer isso de algumas maneiras diferentes, usando localstorage, sessionstorage e afins, mas hoje vamos ver como usar o redux-persist que faz esse trabalho de guardar esses estados, usando o localstorage no nosso exemplo, para dar um refresh na nossa aplicação e não perdermos os dados que estão em tela.

O repositório que irei usar como exemplo é esse aqui: [github-stars](https://github.com/mayconbalves/github-stars)

Ele é um pouco mais antigo, mas vai servir para o exemplo, quando vocês olharem o código, ele vai estar atualizado, então nas partes que eu alterei para usar o redux-persist vou por a diferença do antes e depois dos arquivos.

Primeiro passo para instalar a lib no seu projeto basta rodar:

```bash
npm install redux-persist
```

Depois de instalado, vou atualizar o arquivo `store.js`

```javascript
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "../CombineReducers";

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = applyMiddleware(thunk)(createStore)(reducers, devTools);

export default store;
```

Notem que configurei de forma bem simples e nesse caso eu usei o `redux-thunk` que é um middleware para sincronia do react e redux, se você não conhece, [clique aqui](https://github.com/reduxjs/redux-thunk) para ler sobre ele. Agora vamos fazer um update do nosso `store.js`:

```javascript
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { reducers } from "./CombineReducers";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = applyMiddleware(thunk)(createStore)(persistedReducer);
export const persistor = persistStore(store);

export { store, persistor };
```

Eu inclui algumas linhas que são as funções que vou usar do redux-persist, inclui a `const persistConfig` que é um objeto simples, passando a key, que por padrão a documentação pede para chamar de root e passei a storage, que vai ser onde todos os meus reducers vão estar armazenados. Criei uma `const persistedReducer` que recebe o `persistReducer` que é uma função que recebe os nossos reducers e a configuração que acabamos de criar.

Antes quando eu criei a const store eu passava os reducers para ela, mas agora eu passo nossa `const persistedReducer` que já contem os reducers. Por último eu criei uma `const persistor` que usa a função `persistStore` que nesse momento usa nossa nova store configurada com o redux-persist.

Agora as duas alterações que precisamos fazer são bem simples, primeiro no nosso `index.js` que está dessa forma:

```javascript
import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import Root from "./Root";
import store from "./store/store";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: Arial, sans-serif;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Root store={store} />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
```

O importante aqui é onde importamos a store que vai mudar e também no `<Root store={store} />`, que passamos a store para o nosso componente root que é onde as rotas da aplicação ficam. Fazendo o update o componente fica assim:

```javascript
import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import Root from "./Root";
import { store, persistor } from "./store/store"; // alteração aqui para importar a persistor
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: Arial, sans-serif;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Root store={store} persistor={persistor} /> // alteração aqui para passar a
    persistor para o root
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
```

Dentro do `root.js` eu uso o provider do react-redux para receber nossa store e ficar visível para toda aplicação e também a alteração que eu fiz é bem tranquila. Vamos ver o antes e depois do nosso `root.js`

Antes da alteração:

```javascript
import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Home from "pages/home";

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
```

Depois da alteração

```javascript

import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import Home from 'pages/home'

const Root = ({ store, persistor }) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}> // alteração aqui para passar a persistor para o root
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
```

Adicionei o PersistGate que é o `provider` do redux-persist e usei ele logo abaixo do provider do react-redux, recebendo `loading={null} e persistor={persistor}` o loading é uma prop obrigatória, mas se você não quiser usar, basta deixar o seu valor como null.

Pronto já implementamos o nosso redux-persist, vocês podem dar refresh e a aplicação não vai perder o estado atual do componente. Se forem usar o meu repositório como exemplo, façam o teste dele antes e depois do redux-persist, só commitei a inclusão da lib, mas as alterações eu deixo por conta de vocês.

Bem é isso, espero que tenham gostado, lembrem que qualquer informação que deixei passar, ou se quiserem adicionar qualquer coisa me mandem mensagem. Se esse artigo foi útil ficarei feliz. Abraços quentinhos para vocês!!
