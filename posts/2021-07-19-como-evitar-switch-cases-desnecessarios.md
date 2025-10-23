---
title: Como evitar switch cases desnecessários.
description: Vou mostrar uma alternativa legal ao switch case.
date: 2022-08-16
image: /images/como-evitar-switch-cases-desnecessarios.webp
tags: [js, switch-case]
background: "#D6BA32"
---

> Se o orgasmo do rock'n'roll pudesse ser vendido em saquinhos, drogas como a maconha e a heroina não valeriam um centavo. **Ozzy Osbourne.**

![switch case](/images/como-evitar-switch-cases-desnecessarios.webp)

Já faz um tempo que não escrevo nada, mas é que a correria está bem grande, por isso hoje vou trazer um artigo “leve e rápido” mas que espero ajudar a galera e gerar um movimento de refactor 😃.

Já vi muito código com o famoso e muitas vezes “odiado” **switch case** eu particularmente não acho ruim, mas em muitos casos podemos evitar, deixarmos nosso código mais enxuto e mais digamos “elegante”

Chega de conversa mole e bora para o exemplo.

Criei uma simples mudança de ambiente dependendo da url que recebo dentro do projeto, essa `url` pode vir dentro do nosso .env e podemos manipular dentro desse switch case, mas podemos facilitar esse trabalho, e deixar de forma mais “elegante” pelo menos para mim 😅.

```javascript
switch (url) {
  case "dev":
    envUrl = env.dev;
    break;
  case "hom":
    envUrl = env.hom;
    break;
  case "prod":
    envUrl = env.prod;
    break;
  default:
    envUrl = env.prod;
    break;
}
```

Podemos mudar esse `switch case` para algo com mais performance, e mais digamos “elegante”:

```javascript
const switchUrl = (env) => {
  const envUrl = {
    dev: "http://localhost:3000",
    hom: "http://www.hom.com.br",
    prod: "http://www.prod.com.br",
  };
  return envUrl[env] || envUrl.prod;
};

switchUrl("dev"); ou switchUrl(env);
```

Percebam que criei uma função `switchUrl`, que recebe uma `env`, e dentro dessa função simplesmente criei um objeto `envUrl` com chave e valor, e o retorno é simplesmente meu objeto `envUrl` sendo iterado de acordo com a url que ele recebe, dessa forma ao chamar minha função `switchUrl`, devemos passar o ambiente que queremos ter a url (no caso acima foi `dev`), dessa forma ele resolve nosso problema, se não passarmos nenhum valor para a função e mesmo assim executarmos, por padrão ela retorna a mesma chave de prod 😏

Agora temos um bônus, para mostrar o quanto esse tipo de função é útil no nosso dia-a-dia criei algo parecido para mudar a cor do titulo de uma página, dessa forma:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1 class="title">hello world</h1>

    <script>
      const switchColor = (color) => {
        const changeColor = {
          red: "#f00",
          green: "#0f0",
          blue: "#00f",
        };

        const style = `
        color: ${changeColor[color] || "#fff"};
      `;
        const title = document.querySelector(".title");
        title.setAttribute("style", style);
        return title;
      };

      switchColor("blue");
    </script>
  </body>
</html>
```

Bem é isso, espero que tenham gostado, lembrem que qualquer informação que deixei passar, ou se quiserem adicionar qualquer coisa me mandem mensagem. Se esse artigo foi útil ficarei feliz. Abraços quentinhos para vocês!!
