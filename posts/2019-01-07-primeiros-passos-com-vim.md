---
title: Primeiros passos com VIM
description: Alguns dicas de como começar a usar VIM
date: 2019-01-07
image: /images/primeiros-passos-com-vim.webp
tags: [vim]
background: "#D6BA32"
---

> Não espere por uma crise para descobrir o que é importante em sua vida. **Platão.**

![primeiros passos com VIM](/images/primeiros-passos-com-vim.webp)

Se você já “teve” de usar o vim, para editar alguma coisa sabe o quanto é assustador editar um simples arquivo, ou até mesmo fazer um simples `commit`.

Normalmente acostumados com editores de texto que tem uma interface mais amigavel (Sublime Text, VS code, Atom, etc…), onde algumas operações como salvar, copiar, deletar um arquivo ou até mesmo navegar entre arquivos e pastas estão a um click de distância. Quando vemos uma tela preta e que para salvar um arquivo devemos fazer um comando :w e não simplesmente ctrl + S pensamos: “Tem algo de errado”. A ideia desse post é mostrar o básico de VIM para poder incentivar mais o seu uso.

## Modos

Você não leu errado, é isso mesmo, dentro do vim temos alguns modos que facilitam tanto na hora de navegar dentro de um arquivo quanto quando vamos editar.

### Modo normal

serve para navegar dentro de um arquivo `h,j,k,l` assim como apagar uma linha inteira `dd` ou copiar uma linha inteira `yy` ou até mesmo o famoso “recortar e colar (me perdoem por não usar o copiar e colar kkk)” usando simplesmente `x` para recortar e `p` para poder colar, isso também funciona para o `yy` e depois `p` não é tão complicado quanto parece certo !!

### Modo insert

como o próprio nome já sugere é o modo que inserimos texto, e o teclado funciona como em qualquer editor comum, ou seja, aqui é sem surpresas.

### Modo visual

é bem parecido com o modo normal, mas podemos fazer algumas coisas legais nesse modo, como copiar e colar diversos blocos de texto.

Bem fácil, não? No começo realmente parecem ser muitos comandos, mas duas dicas valiosas que tenho são: decore as teclas de movimentação `h,j,k,l` (esquerda, para cima, para baixo, direita, respectivamente) e faça do `ESC` um ótimo amigo, pois para sair de um modo e entrar em outro é necessário apertar a tecla, ou seja, durante o dia você irá usa-la muito.

## Por que usar VIM

Pelo fato de não curtir muito o `sublime text` e na época o `vscode` ainda não estava tão legal e bom como é hoje, comecei usar, sofrendo muito, eu confesso. Mas por isso recomendo começar com coisas pequenas.

Mas depois de tanto sofrer vi o que quanto ele ajudava, me tornei mais rápido, nunca gostei de usar o mouse, então consigo fazer tudo por atalhos, acredite se quiser, mas nunca consegui decorar nenhum atalho do `vscode` pelo fato de poder usar o mouse.

Mude o `core editor` do seu `git` para usar vim como editor padrão, é simples, cole esse comando no seu terminal git `config --global core.editor vim` e esqueça o atalho `git commit -m ""` pelo menos até pegar a prática de commits usando vim.

Depois comece a editar pequenos textos ou blocos de código usando o vim, com os comandos listados acima você já consegue se virar muito bem.

Jogue [Vim adventure](https://vim-adventures.com/) é um jogo bem interessante, que ensina muitos comandos desse editor fantástico.

Bem é isso, espero que tenham gostado, lembrem que qualquer informação que deixei passar, ou se quiserem adicionar qualquer coisa postem nos comentários. Se esse artigo foi útil e puder me pagar um café ficarei feliz. Abraços quentinhos para vocês !!
