---
title: Primeiros passos com git parte 03
description: 7 comandos essenciais para quem está aprendendo git
date: 2019-07-09
image: /images/primeiros-passos-com-git-parte-03.webp
tags: [git]
background: "#5ED3F3"
---

> O otimismo é a fé em ação. Nada se pode levar a efeito sem otimismo. **Helen Keller**.

![git commit e git push gif](/images/primeiros-passos-com-git-parte-03.webp)

Esse é o terceiro post da minha série sobre git, se você não viu nenhum e não sabe nada sobre git eu recomendo eles para que você dê os primeiros passos com essa ferramenta fantástica. [Parte 1](/blog/2019-01-17-primeiros-passos-com-git), [Parte 2.](/blog/2019-06-27-primeiros-passos-com-git-parte-02)

Se você está aqui acredito que já tenha lido pelo menos, meus três primeiros posts, então já tem ideia de como criar um repositório no git e como fazer o download dele, mas essa maneira é um pouco feia, vamos usar a linha de comando do git e aprendermos alguns comandos essenciais para começarmos a nos virarmos sozinhos.

## 1 - Git CLONE:

clonamos qualquer repositório nosso ou de algum repositório publico que permita. Basta irmos no projeto que quisermos e selecionamos a sua url e clonamos o projeto localmente. Você pode entrar nesse meu repositório `https://github.com/mayconbalves/treinando-git` (mas recomendo que crie o seu) copie a url e dentro do seu terminal execute o comando:

`git clone https://github.com/mayconbalves/treinando-git`
basta entrar no repositório e começar a brincar.

Obs: você está baixando o repositório via https então sempre que for dar um push ou um pull ele pedirá sua senha cadastrada no git. Farei um artigo sobre ssh e explicar um pouco a diferença entre os dois métodos, por enquanto podemos pular essa parte.

## 2 - Git STATUS:

após ter clonado e entrado no seu repo, modifique um arquivo ou crie um novo e execute o comando:

```shell
git status
```

irá aparecer o seguinte para você no terminal:
![terminal após git status](/images/git-status.webp)

No primeiro paragrafo temos changes not staged for commit , ou seja, mudanças que fizemos e não commitamos (não sei se esse termo é o certo ou se existe 😃). No segundo temos `Untracked files`, ou seja, arquivos que o git não reconhece ainda. Vamos usar esses arquivos `README.md` e `test.js` para mostrar nossos próximos comandos.

## 3 - Git ADD:

serve para adicionarmos arquivos para podermos commitar e mandar para nosso repo. Vamos fazer algumas variações do git add pois só ele, por si só não funciona, então vamos lá, primeiro:

```shell
git add caminho do arquivo, exemplo
git add test.js
se quisermos adicionar todos os arquivos podemos simplesmente usar o comando:

git add . ou git add -A
E se quisermos só adicionarmos todos os arquivos modificados usamos:

git add -u
```

Após adicionarmos um ou mais arquivos que quisermos, nossa tela ficará assim:
![terminal após git add](/images/git-add.webp)

Temos o paragrafo `changes to be commited` a partir daqui podemos tomar duas decisões, commitar ou resetar nossas mudanças. vamos pelo mais fácil.

## 4 - Git COMMIT:

serve para escrevermos as mudanças que fizemos no arquivo, é muito importante deixarmos uma mensagem que diga com detalhes o que fizemos ou bem explicativa, por isso é legal a ideia de fazermos um commit por arquivo. Podemos usar das seguintes formas:

```shell
git commit
ou
git commit -m "mensagem do commit"
```

Após o primeiro comando o terminal abrirá o seu editor core para fazer a mensagem, como configuramos no nosso primeiro tutorial.

## 5 - Git RESET:

No nosso caso adicionamos os dois arquivos, mas percebemos que na verdade não queríamos isso, então usamos o reset, de forma parecida com o git add assim:

```
git reset - isso reseta todos os arquivos
```

git reset caminho do arquivo - reseta o arquivo selecionado
não tem segredo 😏

## 6 - Git PUSH:

depois de adicionarmos um ou mais arquivos precisamos mandar eles para nosso repo no github, basta executar o comando:

```shell
git push
ou
git push origin nome_da_branch - esse comando serve para mandarmos nossas modificações para uma branch especifica, falarei sobre branchs em um
próximo artigo
```

Pronto. Se tudo deu certo, nosso terminal ficará mais ou menos assim:
![terminal após git push](/images/git-push.webp)

Temos na terceira linha compressing objects: 100% (2/2), done ou seja, tínhamos dois arquivos para darmos o push e ambos foram para o nosso repo com sucesso e na ultima linha, temos o endereço do nosso repo, nossa branch local para branch de origin master -> master

## 7 - Git PULL:

esse comando serve para baixarmos qualquer alteração que nosso repo sofreu, a ideia do git é de trabalharmos no projeto com mais pessoas, então se tem mais de um dev e esse faz um push, você localmente não terá as mudanças que ele fez, então é necessário atualizarmos nossa branch master para começarmos a nossa tarefa, para isso basta executarmos:

```shell
git pull origin master
```

Pronto nossa branch estará atualizada, assim podemos continuar o fluxo.

Bem é isso, espero que tenham gostado, lembrem que qualquer informação que deixei passar, ou se quiserem adicionar qualquer coisa só me mandar mensagem. Se esse artigo foi útil ficarei feliz. Abraços quentinhos para vocês !!
