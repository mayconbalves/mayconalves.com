---
date: 2019-01-17
title: Primeiros Passos com git
description: Aprenda de forma fácil como usar o git de maneira fácil
tags: [git]
---

> Nunca fui para a cama com uma garota feia, mas acordei com algumas delas. **Lemmy Kilmister.**

## Controle de versão

O que é controle de versão, e por que você deve se importar? O controle de versão é um sistema que registra as mudanças feitas em um arquivo ou um conjunto de arquivos ao longo do tempo de forma que você possa recuperar versões específicas. Leia a história completa [Git Book.](https://git-scm.com/book/pt-br/v1/Primeiros-passos-Sobre-Controle-de-Vers%C3%A3o)

## Mas para que precisamos controlar versões do nosso código

Quando trabalhamos em equipe, muitas vezes precisamos desenvolver grandes features. Mas isso não quer dizer que teremos que desenvolve-la sozinhos, ou seja, podem ter um, dois ou n devs trabalhando em um mesmo arquivo, e se isso acontece (é bem comum) como faremos para evitar conflitos ?

O que são conflitos ? é bem simples, quando dois devs estão trabalhando em um mesmo arquivo, ambos podem escrever funções ou métodos com o mesmo nome, mas com códigos diferentes, isso resultaria em um conflito !! E como resolver isso ? Você simplesmente ignora o que o seu colega de trabalho fez a assume que o seu código está certo ? Talvez essa não seja a melhor solução para um conflito !!

Foi pensando nesse tipo de coisa que Linus Torvalds (inventor do linux) criou essa fantástica ferramenta de versionamento de código.

## Instalando o git na sua máquina

Se você utiliza alguma versão de linux: [Download para linux.](https://git-scm.com/download/linux) Para usuários de windows: [Download para Windows.](https://git-scm.com/download/win) (Obs: para usuários de windows é disponibilizado um gitbash) e para quem usa mac: [Download para MacOs.](https://git-scm.com/download/mac)

Não é nenhum mistério fazer a instalação, sendo que em qualquer uma das plataformas basta executar um simples comando e no caso do windows, basta dar next, next e next, para finalizar a instalação com sucesso.

Para conferir se o git realmente foi instalado na sua máquina, digite no terminal (gitbash no caso do windows) git --version se o resultado for algo como git version x.x.x parabéns, o git já está disponível para podermos configurar.

## Configurando nosso git

Quando fazemos um commit é necessário termos um nome de usuário e senha, então vamos começar a configurar essa bagaça.

Vamos começar configurando o nosso nome de user e email. É bem tranquilo, abra o terminal e digite: `git config --global user.name` "Seu nome de usuário" e `git config -- user.email` "seuemail@email".

Agora vamos configurar nosso editor para commits e coisas afins. Digite `git config --global core.editor` "nome do seu editor preferido" Eu uso o VIM como editor para o git. Lembrando que no caso do windows para mudarmos o editor padrão `git config --global core.editor` "'C:/Program caminho do seu editor' -multiInst -nosession" e se o sistema operacional for 32 bits "'C:/Program Files (x86)/sublimeText/sublimeText.exe' -multiInst -nosession"

Por ultimo para saber se nossa configuração está certinha digitamos no terminal `git config --list` vai mostrar todas suas configs locais (logo menos vou postar a imagem do terminal).

Bem é isso, espero que tenham gostado, lembrem que qualquer informação que deixei passar, ou se quiserem adicionar qualquer coisa me mandem mensagem. Se esse artigo foi útil ficarei feliz. Abraços quentinhos para vocês!!
