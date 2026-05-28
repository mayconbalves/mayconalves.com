---
title: "Resolvendo problema de CR Prettier Prettier em projetos react."
description: "Um massete simples para resolver o problema de CR Prettier Prettier em projetos react."
date: 2021-09-12
tags: [javascript, react]
---

> Só há felicidade se não exigirmos nada do amanhã e aceitarmos do hoje, com gratidão, o que nos trouxer. A hora mágica chega sempre. **Hermann Hesse**.

Essa semana eu tive o prazer de configurar meu primeiro projeto do zero 😃 pensando em manter a qualidade boa e o projeto padronizado, configurei o eslint e o prettier subi o projeto e estava tudo ok. Porem quando os outros desenvolvedores da equipe baixaram o projetos estávamos tendo o erro da imagem acima `delete 'CR' [prettier/prettier]`.

Esse erro aconteceu pois estamos desenvolvendo em ambiente windows, isso por que, por padrão quando você baixa um repositório ele quebra linha no formato `CRLF` isso não importa se o seu editor está configurado com o padrão `LF` que é o padrão usado no linux e no mac (nos macs mais antigos era usado o CR).

Para corrigir esse erro é bem simples, basta abrir o terminal e digitar o seguinte comando `git config --global core.autocrlf false` depois disso delete o repositório e baixe de novo que o problema estará resolvido.

Bem é isso, espero que tenham gostado, lembrem que qualquer informação que deixei passar, ou se quiserem adicionar qualquer coisa me mandem mensagem. Se esse artigo foi útil ficarei feliz. Abraços quentinhos para vocês!!
