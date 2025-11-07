---
title: Como configurar enzyme e jest em projetos react.
description: Configuração para você adicionar testes unitários no seu projeto.
date: 2019-07-24
image: /images/configurar-jest-enzyme.webp
tags: [jest, react, setup, enzyme]
background: "#5ED3F3"
---

> O pessimismo, depois de você se acostumar a ele, é tão agradável quanto o otimismo. **Arnold Bennett**.

![configurar jest e enzyme](/images/configurar-jest-enzyme.webp)

Vamos parar de quebrar tanto a cabeça e vamos entender o que estamos testando. Mas antes de tudo vamos começar pelo começo, bora configurar esse parada.

Bora criar um setup rápido para podermos começar a codar nessa bagaça. Então abra o terminal execute o comando:

```shell
create-react-app nome-do-seu-projeto
```

Em seguida vamos instalar o enzyme, pois o jest já vem nativo com versões mais novas do cra (ainda bem 🙏) e vamos criar um setup para nossos testes rodarem na boa. Executem o comando dentro da pasta do seu projeto

```shell
yarn add -D enzyme enzyme-adapter-react-16
```

Precisamos adicionar o enzyme e seu adpter para o react 16. E agora vamos criar o arquivo `src/setupTest.js`

```js
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
```

Por padrão o CRA reconhece esse arquivo, sem precisar de mais nenhuma configuração.

Agora vamos modificar o nosso arquivo `App.test.js` para usarmos o enzyme no teste:

```js
import React from "react";
import { shallow } from "enzyme";
import App from "./App";
it("renders without crashing", () => {
  const component = shallow(<App />);
  expect(component.find("div")).toHaveLength(1);
});
```

Basta rodar o comando `yarn test` e o resultado esperado deve ser esse:

![testes rodando no terminal](/images/jest-enzyme-test.webp)

Pronto estamos prontos para começar a entender o que testar, por quê testar e como testar. Mas para esse tutorial não ficar tão longo, vou dividi-lo em algumas partes, então espero que tenha gostado de aprender a montar um setup bem rápido e fácil.

Bem é isso, espero que tenham gostado, lembrem que qualquer informação que deixei passar, ou se quiserem adicionar qualquer coisa postem nos comentários. Se esse artigo foi útil ficarei feliz. Abraços quentinhos para vocês !!
