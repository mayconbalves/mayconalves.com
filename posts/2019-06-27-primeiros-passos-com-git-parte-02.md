---
title: Primeiros passos com git parte 02
description: Integração com o Github. Começando a entender as como tudo funciona.
date: 2019-06-27
image: /images/primeiros-passos-com-git-parte-02.webp
tags: [git, github]
background: "#5ED3F3"
---

> Os lobos agora são seus senhores, sem esperança seus lobos devoram a terra. **Gojira**.

![primeiros passos com git parte 02](/images/primeiros-passos-com-git-parte-02.webp)
No primeiro tutorial, fizemos coisas básicas, aprendemos instalar o git na nossa máquina e fazer as primeiras configurações, se você não leu ainda é só [clicar aqui.](blog/2019-01-17-primeiros-passos-com-git) Bora lá…

# Criando o nosso primeiro repositório

Sempre que criamos um projeto localmente (nossa máquina) que precisamos compartilhar com alguém, o que fazer ? usamos pen drive, enviamos por e-mail ?, chega disso, vamos compartilhar nosso código de maneira certa !! Bora codar

Abra o terminal crie uma pasta, depois inicie um repositório git.

```shell
mkdir aprendendo-git && cd aprendendo-git

> aprendendo-git:
git init
```

Após o comando `git init` recebemos a mensagem no terminal `Inittialized empty git repository in local-onde-criamos-a-pasta/.git/` essa pasta `.git` (ponto git) tem uma série de configurações sobre o nosso repositório.

Agora já temos um repositório local, vamos mandar nosso projeto para o `github` para podermos compartilhar nosso código com outros devs.

Agora vamos criar nosso primeiro repositório no `github` com o mesmo nome aprendendo-git , após criar vamos ter essa tela:

![repositorio github](/images/repositorio-github.webp)

Para subirmos nosso primeiro repo, basta seguirmos esse passo a passo, vamos lá.

Dentro da nossa pasta local, vamos criar um simples arquivo README.md e vamos fazer o push desse arquivo:

```shell
touch README.md (para criar o arquivo)
git add . (para trackear nosso arquivo)
git commit -m "entre aspas nossa mensagem"
git remote add origin (a origin do seu repositório)
git push -u origin master (para mandar o que você fez para o Github)
```

Após esses 5 passos já temos nosso repositório no Github, ele ficará assim:

![primeiro commit](/images/primeiro-commit.webp)

Pronto. Está feito. já temos nosso repositório no ar, sei que se você está lendo esse tutorial, tem pouca experiência com git e Github, então na parte 3, vou explicar sobre os comandos acima e mais alguns.

Bem é isso, espero que tenham gostado, lembrem que qualquer informação que deixei passar, ou se quiserem adicionar qualquer coisa postem nos comentários. Abraços quentinhos para vocês !!
