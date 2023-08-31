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

>A mudança é a lei da vida. E aqueles que apenas olham para o passado ou para o presente irão com certeza perder o futuro. **John Kennedy**


![background](assets/img/commitlint-and.png)

Tem algum tempo que não escrevo artigos infelizmente, mas hoje eu estou voltando com um artigo bem simples sobre automatização do seus commits, parece algo que não importa muito, mas é muito importante manter um histórico legal na sua árvore do git, pois é o roadmap do seu projeto.

Um ponto bem legal que eu acho é, assim que entra uma pessoa nova na equipe consegue entender como funciona de uma forma bem fácil.

Antes de falarmos sobre a instalação e configuração do `commitizen` e `commitlint` precisamos entender um pouco sobre as convenções de `commmit`. Resumidamente falando nós seguimos o seguinte padrão para criar uma mensagem quando "commitamos" algo:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```
traduzindo para algo mais do dia-a-dia:
```
feat(card): created component

created structure, styles and tests 
```

Tenha em mente que isso é só um exemplo, eu prefiro criar um `commit` para cada um desses casos acima, pois na convenção temos um tipo de `commit` diferente para cada mudança no código, vamos então para a convenção:

```
feat: que adiciona uma new feature ao código
fix: que corrigi algum tipo de bug
chore: alguma melhoria em um componente
style: mudança de estilo
refactor: refatorando um componente ou algum trecho de código
doc: adicionando algum documento novo ou fazendo um update em algum documento
```

Com isso em mente podemos seguir para padronizar os `commits` do nosso projeto, vamos criar uma pasta e criar um projeto de forma bem simples mesmo:

```
mkdir padrao-commit && cd padrao-commit && git init && yarn init -y
```

## Commitlint

Agora que entendemos Conventional Commits, mas nada garante que vamos respeitar as regras impostas, pois, mesmo trabalhando sozinho em um projeto, pode ser que esqueçamos de seguir o padrão que foi definido.

É ai que entra o commitlint, com ele conseguimos verificar se a mensagem de commit que escrevemos realmente está dentro dos padrões pré definidos. Vamos usar os padrões do Angular, mas ele pode ser alterado e podemos até mesmo criar o nosso próprio padrão.

Vamos instalar o `commitlint` e vamos iniciar a configuração dele, vamos rodar no terminal o seguinte comando:

```
yarn add @commitlint/config-conventional @commitlint/cli -D

echo "module.exports = { extends: ['@commitlint/config-conventional'] };" > commitlint.config.js
```

Podemos rodar no terminal um teste para saber se tudo está funcionando:

```
echo "test" | yarn commitlint

echo "fix: test" | yarn commitlint

```

## Commitizen

O Commitizen é uma biblioteca que vai nos ajudar a criar os commits seguindo o padrão do Conventional Commit. Ela gera uma interface no terminal e assim vamos conseguir acessar todos os tipos de commits e suas descrições:

Ao adotar um novo padrão como estamos fazendo, precisamos de um tempo até decorarmos os tipos e não precisar ficar consultando a documentação para conferir qual tipo usar. É aí que essa biblioteca vai nos ajudar.

Se tudo estiver ok, podemos seguir com a instalação e a configuração da `conventional-changelog` do commitizen:

```
yarn add commitizen -D

yarn commitizen init cz-conventional-changelog --yarn --dev --exact
```

E agora temos que adicionar um `script` no nosso `package.json` para rodarmos antes de fazermos um `commit message`:

```
"commit": "git-cz"
```

Por último vamos adicionar todos os arquivos para podermos commitar:

```
git add .

#para rodar nosso script
yarn commit
```

Se tudo deu certo vamos ter esse resulta aqui:

![Screenshot do terminal](https://user-images.githubusercontent.com/14244623/210809403-a9f5a62f-f444-4ef8-affd-e43cb84b6bc7.png)

Ele irá fazer algumas perguntas para você, daí você escolhe aquilo que precisa, igual eu fiz aqui no exemplo:

![Screenshot do terminal](https://user-images.githubusercontent.com/14244623/210809948-22517877-73ec-47eb-add1-4c8d60338a63.png)

Fica um resultado bem legal, basta digitar `git log` para ver o seu resultado:

![Screenshot do terminal](https://user-images.githubusercontent.com/14244623/210810190-318db18a-468b-4d9d-9d60-b0b371055fdd.png)


Bem é isso espero que tenham gostado, e eu espero que tenha ajudado, lembrando que qualquer feedback é muito bem vindo, abraços quentinhos para vocês !!!

### Links de referência:
- [Commitizen](https://commitizen-tools.github.io/commitizen/)
- [Commitlint](https://commitlint.js.org/#/)
- [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
