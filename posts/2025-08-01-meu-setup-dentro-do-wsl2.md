---
title: "Meu setup dentro do wsl2"
description: "A maioria dos desenvolvedores que conheço não curtem desenvolver em ambiente Windows. Existem vários motivos, é lento, não tem um terminal nativo com "
date: 2025-08-01
tags: [wsl-2, terminal, windows, lunarvim, vim]
---

> Deve-se temer a velhice, porque ela nunca vem só. Bengalas são provas de idade e não de prudência. [Platão](https://www.pensador.com/autor/platao/)

![](https://cdn-images-1.medium.com/max/1024/1*Wdl1tS1xMaZeBvOxgYi2rg.avif)

A maioria dos desenvolvedores que conheço não curtem desenvolver em ambiente Windows. Existem vários motivos, é lento, não tem um terminal nativo com boa integração, carrega muitos processos desnecessários entre outras coisas.

Porém, atualmente estou trabalhando com o Windows como SO, para tentar dar mais velocidade ao meu dia-a-dia, adicionei o wsl2 para fazer os meu projetos e só essa mudança me deu mais liberdade e mais velocidade, no entanto, percebi que o wsl2 poderia me entregar muito mais do que o powershell ou gitbash.

Então vamos ao setup do qual estou usando:

Zsh

Zsh é um shell projetado para uso interativo, embora seja também uma poderosa linguagem de script. Muitos dos recursos úteis do bash, ksh e tcsh foram incorporados ao zsh muitas características originais foram adicionadas.

Para instalar rode no terminal:

sudo apt-get install zsh

Mas ainda o terminal fica sem graça, mesmo com esse bom upgrade, agora vamos personalizar o terminal com o oh-my-zsh que vai deixar nosso terminal muito mais legal, porém antes de instalar o oh-my-zsh precisamos do curl vamos instalar os dois:

sudo apt-get install curl

sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

Uma alternativa se quiser pode usar o wget

sudo apt install wget

sh -c "$(wget https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh -O -)"

Agora temos um terminal dessa forma:

![](https://cdn-images-1.medium.com/max/1024/1*bTkZStedi0s93p_lgr5fYQ.png)

Agora temos um terminal muito mais amigável, mostrando a branch que estamos e uma forma muito melhor de ver o nome do repositório, a vantagem do oh-my-zsh que tem vários plugins legais que podem te auxiliar no dia-a-dia, porém eu só uso o plugin de autocomplete é o único que vejo necessidade, adicionamos plugins e thema, em um arquivo chamado zshrc ele fica localizado em ~/.zshrc, aqui estão os plugins que você pode adicionar [Plugins.](https://github.com/ohmyzsh/ohmyzsh/wiki/Plugins)

Tmux

O Tmux é um multiplexador de terminal que permite gerenciar várias sessões de terminal em uma única janela, facilitando o trabalho com múltiplas tarefas simultaneamente. Ele permite dividir a tela em painéis, alternar entre janelas e retomar sessões, ideal para quem trabalha com muitos processos ao mesmo tempo.

O wsl2 tem uma divisão de terminal até que legal, porém gosto do tmux eleva isso em um nível, hoje em dia nós desenvolvedores frontend trabalhamos geralmente com mais de um processo rodando no terminal, então é algo que acho bem importante.

sudo apt install tmux

Depois de instalado, basta digitar no terminal tmux pronto.

![](https://cdn-images-1.medium.com/max/1024/1*aumzKg5ZxP8cd5rTOh61bw.png)

Aparentemente pouca coisa mudou, mas o tmux já indica que estamos com zsh, a data, horário e no nome do seu computador, porém vou ensinar um pouco do poder do tmux digite control + b depois sinal de % e depois control + b depois aspas duplas o terminal ficará assim:

![](https://cdn-images-1.medium.com/max/1024/1*loF8kx69rJH9GuBjtDW-1w.png)

Depois você ainda pode apertar control + b depois apertar o c e vai abrir uma nova janela do tmux para você trabalhar com mais processos se quiser:

![](https://cdn-images-1.medium.com/max/446/1*CYbFm60J34SoWgkRQmR9MQ.png)

A barra do tmux ficará assim, você tem duas instâncias do tmux o \* indica a janela atual.

### Extra

Agora para fechar o meu setup, para desenvolver estou usando o lunarvim para usar a mesma janela do terminal, deixando tudo mais leve e fazendo o Windows voar.

Sei que tem muitas pessoas que acham loucura desenvolver com vim e seus derivados hoje em dia, visto que tem muitos editores que são muito legais ainda mais com integrações com ferramentas de IA.

Mas estou mostrando como deixei meu setup e seria legal você dar uma chance para o vim ou lunarvim eles tem plugins bem legais que podem deixar seu desenvolvimento muito mais ágil com seus vários atalhos no teclado.

Para instalar o lunarvim:

LV\_BRANCH='release-1.4/neovim-0.9' bash <(curl -s https://raw.githubusercontent.com/LunarVim/LunarVim/release-1.4/neovim-0.9/utils/installer/install.sh)

ele vai te fazer três perguntas, primeiro para instalar o nodeJs/bun pois são dependências do neovim, perguntar se tem python instalado e se podem instalar junto o rust e o rustc

![](https://cdn-images-1.medium.com/max/1024/1*81epKkf5KsJN_pYGwzkSNg.png)

Você precisa adicionar o path do lunarvim no seu zshrc

   export PATH="$HOME/.local/bin:$PATH"

Se tudo correr certo basta digitar lvim no terminal e pronto você tem um bom editor com um ótimo terminal em mãos.

![](https://cdn-images-1.medium.com/max/1024/1*J4SaaTt33HdSB8ZX46gKQw.png)

Com certeza sua vida vai melhorar muito se estiver desenvolvendo em ambiente Windows, espero ter ajudado, qualquer comentário ou coisa para melhorar o artigo será muito bem-vindo, abraços até o próximo.

![](https://medium.com/_/stat?event=post.clientViewed&referrerSource=full_rss&postId=8f2fad7ad94c)
