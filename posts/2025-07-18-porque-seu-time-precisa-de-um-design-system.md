---
title: "Porque seu time precisa de um design system"
description: "Todas as empresas que eu já pude ter o prazer de trabalhar, tinham seu próprio DS ou estavam construindo, afinal quando falamos de Design System, não "
date: 2025-07-18
tags: [design-systems, frontend-development, frontend, user-experience, sd]
---

> A vida não vai esperar por você. [Ozzy Osbourne](https://www.pensador.com/autor/ozzy_osbourne/)

![](https://cdn-images-1.medium.com/max/1024/1*1p22BYUH8ibE80QYRmodXA.avif)

Todas as empresas que eu já pude ter o prazer de trabalhar, tinham seu próprio DS ou estavam construindo, afinal quando falamos de Design System, não estamos falando meramente de um produto que é construído e com um tempo é deixado de lado, um DS é algo vivo, algo mutável que precisa sempre estar em movimento.

Infelizmente por alguns lugares que passei o fato de ter o seu DS era algo mais ligado ao hype de ter o seu próprio design system do que de fato entender para quais propósitos ele serve, mas eu como desenvolvedor até pouco tempo atrás achava que ter um design system era somente um trabalho dobrado, pois você precisa, criar componentes de um lado, para servir aplicações do outro lado, saber lidar com diferentes versões de projetos, ter cuidado com o excesso ou a falta de atributos que um componente pode receber, ter uma boa esteira de deploy, pois qualquer pequena alteração que o seu “botão” vai precisar, vai ter necessidade de incluir mais testes unitários, mais um caseno seu storybook, precisará criar um pull request, fazer deploy, depois no projeto que é consome seu DS fazer update para a nova versão, entre outras coisas, mas ainda assim, por que acho que todo time precisa de um design system??

#### 1 — Maior consistência no produto que está sendo entregue.

Quando seu time trabalha com um DS muito bem feito, você e a equipe de desenvolvedores, não precisa se preocupar com um input ter 40px de altura e 200px de largura e outro ser de outro tamanho (tem casos que são necessários inputs de tamanhos diferentes) ter botões de larguras e alturas diferentes com efeitos hover de forma errada, tamanhos de fontes e cores de textos de forma diferentes em páginas diferentes.

Um DS bem feito ajuda seu time a “montar telas” de forma mais rápida e precisa, sem se preocupar com o famoso pixel perfect.

#### 2 — Escrever mais CSS para escrever menos CSS.

Soa um pouco estranho essa né! Mas é bem simples se o seu componente for muito bem escrito no DS, não vai haver necessidade para que em qualquer outro projeto do qual ele é consumido você e sua equipe escreva qualquer linha de css para ajustar o componente na tela, isso poupa muito tempo de desenvolvimento e ajuda muito o desenvolvedor se preocupar com aquilo que é mais importante na hora de desenvolver qualquer coisa nova para o projeto.

#### 3 — Evitar bugs.

Esse é bem clássico, mas não posso deixar de falar sobre ele, com componentes muito bem pensados e bem feitos, você e sua equipe podem evitar muitos bugs, com tabelas, filtros, paginação, modal, menus e coisas do tipo, mesmo assim se ainda acontecer um bug em um botão, por exemplo, é feito uma correção no DS e é resolvido em todos os lugares onde esse botão é consumido.

#### 4 — Menos testes unitários.

Se sua equipe não trabalha com um DS, com certeza vocês precisaram fazer muito mais testes unitários.

Voltando ao exemplo do botão, se no seu projeto você cria um botão, você adiciona alguns testes unitários para esse botão e também para onde ele será usado.

Já com um DS os testes unitários do botão ficaram dentro do próprio DS, isso faz com que você e sua equipe criem testes unitários para aquilo que é importante de verdade, como regras de negócio, se o componente A precisa estar na tela naquele momento, testar se um botão dispara uma action corretamente, e não gastar tempo criando mais testes a cada nova prop que for adicionada ao botão.

#### 5 — Projetos menores.

É bem comum em projetos, React, por exemplo, você ter uma pasta só para os componentes, daí você tem testes de cada componente, estilo e ainda o storybook de cada um deles, quando você vai perceber um projeto de quatro ou cinco páginas, está lotado de arquivos por todo lado, fazendo com que o bundle entregue para produção seja pesado e muitas vezes com componentes que nunca serão usados.

Bom, acredito que esses são os pontos mais fortes “na minha visão” do porquê um design system é bem importante para a sua equipe, desculpe se o artigo não está tão bem escrito, mas estou um pouco enferrujado, afinal faz muito tempo que não escrevo nada, mas espero que tenham gostado, e não esqueça que sua opinião pode ajudar muito eu que estou escrevendo, mas para quem vai ler também, é isso, muito obrigado e abraços quentinhos para vocês!!!

![](https://medium.com/_/stat?event=post.clientViewed&referrerSource=full_rss&postId=44a0e2b191d0)
