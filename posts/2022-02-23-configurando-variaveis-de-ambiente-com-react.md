---
title: Configurando variáveis de ambiente com React.
description: Aprenda a configurar suas variáveis de ambiente em projetos React.
date: 2022-02-23
tags: [react, env]
---

> Como nenhum político acredita no que diz, fica sempre surpreso ao ver que os outros acreditam nele. **Charles de Gaulle**.

Hoje em dia é bem comum trabalharmos com mais de um ambiente, podemos ter desenvolvimento, homologação e produção, mas isso acaba variando um pouco, já teve lugares em que eu trabalhei que tinha um ambiente chamado pré-prod, em outro lugar, só tinha desenvolvimento e produção. Isso acontece, por que em muitos casos só podemos ter coisas em ambiente de produção, por exemplo uma `key` do banco de dados, ou uma `api` de galeria que só pode ser vista em produção dependendo do `id` de um usuário.

Conseguimos fazer isso dentro do React usando um arquivo `.env` ou do inglês `dotenv` (dot significa ponto em inglês). Esse arquivo ele é oculto então você pode modificar ele localmente que o seu git ignora esse file (você deve adiciona-lo ao seu gitignore). Lá no final vou mostrar uma forma um pouco mais comum de todos os desenvolvedores da equipe sempre terem seus `.env` atualizados. Mas chega de enrolação, bora por as mãos para trabalhar.

Vamos criar um projeto react, usando cra para dar de exemplo, então abra o terminal e rode:

```bash
npx create-react-app dotenv-exemple
```

Na raiz do projeto, vamos criar um arquivo `.env` para criarmos algumas variáveis de ambiente.

```bash
REACT_APP_ENV=dev
REACT_APP_API=http://localhost:5000/api/

REACT_APP_ENV=hml
REACT_APP_API=https://site.hml.com.br/api/

REACT_APP_ENV=prod
REACT_APP_API=https://site.com.br/api/
```

Reparem que as chaves estão em caixa alta e que não tem nenhum espaço entre o sinal de = (igual) e a url desejada, se tratando de ReactJs, sempre precisamos colocar o prefixo `REACT_APP_` daí basta “concatenar” o que mais você precisa, lembrando que precisa ser um nome bem descritivo `REACT_APP_NOMEDASUAVARIAVEL` para verificar se o que fizemos está funcionando dentro do arquivo `app.js` basta colocar um console log assim:

```javascript
console.log(`${process.env.REACT_APP_API}`, "env");
```

Quando abrir o navegador da aplicação vai poder ver o log da sua chave funcionando.

Muito importante, esse arquivo pode ter urls ou keys que não podem subir para produção, por isso, mais uma vez lembre de adiciona-lo ao gitignore da sua aplicação. Para que todos os devs consigam ter acesso as várias de ambiente para depois configurar localmente é bem simples, basta criar um arquivo chamado `.env.exemple` para poder setar o que você precisa e além disso esse arquivo pode ser commitado sem nenhum problema, seguindo o nosso exemplo acima, nosso arquivo `.env.exemple` ficaria assim:

```bash
REACT_APP_ENV=dev
REACT_APP_API=urlDev

REACT_APP_ENV=hml
REACT_APP_API=urlHml

REACT_APP_ENV=prod
REACT_APP_API=urlProd
```

Normalmente as empresas tem um doc com as variáveis que tu consegue usar, então basta renomear esse arquivo como `.env` removendo o `.exemple` e completa-lo com as urls necessárias 😃.

Bem é isso, espero que tenham gostado, lembrem que qualquer informação que deixei passar, ou se quiserem adicionar qualquer coisa me mandem mensagem. Se esse artigo foi útil ficarei feliz. Abraços quentinhos para vocês!!
