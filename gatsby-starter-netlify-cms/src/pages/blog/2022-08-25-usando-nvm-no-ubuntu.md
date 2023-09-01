---
templateKey: 'blog-post'
title: 'Como usar nvm no ubuntu'
date: 2022-08-25T15:04:10.000Z
featuredpost: true
description: >-
  Aqui nesse tutorial simples eu mostro como configurar a nvm se você está em um ambiente linux.
tags:
  - nvm
  - linux
  - ubuntu
  - node
---

>Na minha opinião, a Microsoft é muito melhor em fazer dinheiro do que Sistemas Operacionais. **Linus Torvalds.**

![nvm](https://miro.medium.com/max/1400/1*5zVlRFwp4J29mFZ9wDAR1Q.jpeg)

Mas como voltei a trabalhar com linux (ainda bem que isso aconteceu) não tenho nada contra windows, até me surpreendi positivamente em um ano de trabalho com esse SO, mas acho que ele ainda está muito longe do MacOS e qualquer versão de linux. Chega de choro e bora para o artigo.

Hoje em dia é bom comum você trabalhar em mais de um projeto ao mesmo tempo com uma máquina só, as vezes no trabalho e as vezes em alguns projetos pessoais, eu acabo fazendo bastante isso, e isso pode causar um pequeno problema para rodar os seus projetos, pois package.json pode não aceitar a versão mais atual do node e isso pode causar uma certa dor de cabeça, por isso no lugar de instalar direto a última versão do node ou uma versão especifica você pode instalar o nvm (gerenciador de versões do node) para que você consiga controlar a versão do node que cada projeto seu necessita.

Dito isso bora instalar no nosso ubuntu, primeiro vamos baixar na máquina:

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
ou
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```
Ele vai ser baixado em uma pasta oculta nesse caminho `~/.nvm` e você precisa adicionar um snippet no perfil do seu terminal, se você usa zsh igual eu precisa adicionar dentro do `~/.zshrc` se usa bash adicione no `~/.bashrc` com snippet assim que abrir o terminal ele vai conseguir ler o source de onde foi instalado o nvm:

```
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```

Pronto. Feche o terminal e abra novamente, para verificar se está tudo certinho basta rodar esse comando:

```command -v nvm```

O terminal mostrará o seguinte:

![Terminal](https://miro.medium.com/max/1396/1*2NU9jjErEM4mggQ31_hVBQ.png)

Significa que foi instalado com sucesso, e agora vamos para parte mais legal, instalar uma versão de node na máquina, é só rodar um comando:

```nvm install node```

Dessa forma vai instalar a última versão do node válida, se quiser instalar uma versão especifica basta rodar o comando:

```nvm install 14.15.0```

Para trocar sua versão de node atual, imaginando que você instalou as duas versões acima a lasted e a versão 14.15.0 e está usando a lasted em um terminal, você pode abrir outro terminal e rodar o comando:

```nvm use node 14.15.0```

Você também pode listar todas as versões do node que tem instalado no seu terminal e as versão que podem ser instaladas:

```nvm ls```

E se você estiver tendo algum problema com a sua nvm, para desinstalar basta executar:

```rm -rf "$NVM_DIR"```

Bom é bem simples, fazia um tempo que não escrevia, pois estava em uma transição de emprego e estava de férias então por isso estou há mais de um mês sem escrever, se quiser ver essa explicação direto no github da galera está aqui: [NVM](https://github.com/nvm-sh/nvm#installing-and-updating) da uma força para os caras e dá um estrelinha para eles.

Espero que tenham gostado do artigo e que tenha ajudado, até semana que vem, abraços quentinhos para vocês !!
