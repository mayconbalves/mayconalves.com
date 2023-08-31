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

>É bom ter livros de citações. Gravadas na memória, elas inspiram-nos bons pensamentos. **Winston Churchill.**

![background](https://miro.medium.com/max/1400/1*ZrTvLOQVlNa7AJJRK3juRg.png)

O Gatsby é um framework muito interessante, tenho contato com alguns devs que já fizeram coisas bem legais e eu só tinha dado um start e olhado na estruta de pastas e o seu funcionamento, mas resolvi pôr a mão na massa e mudar meu website que era feito em `Nextjs` para `Gatsby` e realmente testar as funcionalidades, rotas, GraphQL e afins (ainda não terminei o refactor) mudou bastante, entre a versão 2 (quando eu fiz o teste) e a versão 4 que é a atual.

## Mas que diabo é essa tal de Gatsby

`
Gatsby é a estrutura rápida e flexível que torna a criação de sites com qualquer CMS, API ou banco de dados divertido novamente. Crie e implante sites sem cabeça que geram mais tráfego, convertem melhor e geram mais receita!
`

Essa é a descrição que você pode achar no site do [Gatsby](https://www.gatsbyjs.com/). Ele também é baseado em ReactJs então para quem já tem uma familiaridade vai se sentir em casa, além de parecer ser bem rápido, um dos motivos dessa velocidade é o prefetch de informações de uma nova página (como assim ? Não entendi nada 😕) quando criamos um link para uma página quando fazemos o hover sobre o link ele já baixa um `JSON` da página seguinte, fazendo com que o seu carregamento seja quase que instantâneo, isso é fantástico!. Mas se você quiser ler um pouco mais sobre esse framework vou deixar o [link da documentação aqui](https://www.gatsbyjs.com/docs/quick-start/).

## Get started
Vamos iniciar um projeto usando o Gatsby, basta você rodar o seguinte comando:

`npm init gatsby`

Ele vai lhe fazer algumas perguntas:

- Nome do projeto ?
- Onde vai ser instalado ?
- Se você quer usar JavaScript ou TypeScript ?
- Qual cms vai querer usar ?
- Qual lib de style vamos usar ?
- E alguns plugins que podemos instalar !!

![Terminal](https://miro.medium.com/max/1400/1*IQKIWdS52-MBe-svZjsmAA.png)

Ou seja, escolhi o nome do projeto, deixei dentro da pasta documents escolhi TypeScript, Netlify como cms, styled-components e adicionei plugin de imagem responsiva e suporte ao markdown

Essa é a estrutura inicial do nosso projeto:

![estrutura do projeto](https://miro.medium.com/max/1400/1*vmOVFRN2vb2oO7oRX6PLzA.png)

Para subir o projeto basta rodar `yarn develop` ou `yarn start` se estiver usando o npm basta rodar `npm run develop` ou `npm run start` irá subir em duas portas:

`
http://localhost:8000/
e
http://localhost:8000/___graphql
`

Podemos fazer consultas no nosso GraphiQl que já está incluso dentro do Gatsby, isso é incrível, temos uma interface bem legal:

![graphql](https://miro.medium.com/max/1400/1*MozcQ-4z5D594HKQcj4kHw.png)

Ele nos oferece muitas consultas ao lado esquerdo de forma simples, basta alguns clicks de mouse e você consegue montar suas `queries` de forma fácil, se você ainda não sabe o que é GraphQl [leia essa doc](https://graphql.org/learn/).

E por último mas não menos importante, temos o arquivo `gatsby-config.ts` (no meu caso escolhi TS, mas se escolher JavaScript vai ser `gatsby-config.js`)

Nesse arquivo configuramos nossos plugins novos, para que toda aplicação possa enxergar. Obs: Sempre que mudar algo nesse arquivo é necessário reiniciar o servidor e subir de novo para o Gatsby entender as mudanças.

```javascript
import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `my-project`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-netlify-cms", "gatsby-plugin-styled-components", "gatsby-plugin-image", "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};

export default config;
```

>SiteMetadata
É a chave para dados do nosso projeto, titulo, url, autor, descrição, etc…

>graphqlTypegen
É alto explicativo e o próprio Gatsby da uma descrição do que ele faz.

>Plugins
É um array, com todos os nossos plugins e novos plugins que podemos instalar.

Bom é isso. Espero que tenham gostado, se ainda não conhecia Gatsby acho que esse pode ser um ponta pé inicial. Logo mais, vou falar um pouco mais sobre esse framework, mas eu ainda preciso estressar mais ele 😃.

Se você está pensando em criar um blog e quer experimentar algo diferente, recomendo bastante fazer uma experiência com Gatsby, você vai se surpreender igual eu, pode acreditar. Espero que tenham gostado, lembrando que qualquer feedback é muito bem vindo. Abraços quentinhos para vocês !!!
