---
title: Resolvendo problema de import no react.
description: Chega de importar componentes com o path absoluto.
date: 2021-08-31
tags: [javascript, react]
background: "#5ED3F3"
---

> Lute. Acredite. Conquiste. Perca. Deseje. Espere. Alcance. Invada. Caia. Seja tudo o quiser ser, mas, acima de tudo, seja você sempre. **Tumblr**.

Em muitos projetos react, acabamos encontrando esses tipos de import de componentes e afins dessa forma, isso acaba poluindo seu código e confundindo quem está começando a conhecer o projeto, pois ainda não conhece a arquitetura.

É muito mais simples fazermos `import Card from components/card` do que `import Card from ../../../../components/card` não é mesmo ?!

Para resolvermos esse problema de imports absolutos é bem simples. Basta você criar um arquivo chamado de `jsconfig.json` na raiz do seu projeto e adicionar as seguintes linhas de código:

```json
{
  "compilerOptions": {
    "baseUrl": "src"
  },
  "include": ["src"]
}
```

Se está rodando seu projeto, basta dar um stop nele com ctrl + c e restartar o projeto e fazer as alterações nos paths dos imports. Ele vai mudar para algo parecido com isso.

```js
disso
import Card from ../../../../components/card

para isso
import Card from components/card
```

Bem é isso, espero que tenham gostado, lembrem que qualquer informação que deixei passar, ou se quiserem adicionar qualquer coisa me mandem mensagem. Se esse artigo foi útil ficarei feliz. Abraços quentinhos para vocês!!
