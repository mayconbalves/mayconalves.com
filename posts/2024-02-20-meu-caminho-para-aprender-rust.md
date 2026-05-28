---
title: "Meu caminho para aprender rust"
description: "Como farei para aprender rust?!"   
date: 2024-02-20
tags: []
---

> O prazer no trabalho aperfeiçoa a obra. Aristóteles.

![](https://miro.medium.com/v2/resize:fit:700/1*gPVFtDRbSFwyyAsWHVoqGQ.jpeg)

Durante o ano passado eu fiz uma promessa que aprenderia Rust, pois lembra muito uma linguagem que tenho muito carinho que a linguagem C, pois tive contato com ela na faculdade durante um ano e curti muito. Como sou frontend e trabalho com Javascript, não tive tanto contato com linguagens de baixo nível há muitos anos, então lendo sobre algumas linguagens o Rust me chamou bastante a atenção e resolvi aprender, mas acabei falhando ano passado, por várias questões pessoais, mas voltei a estudar e para tentar não falhar esse ano, vou postar o meu progresso com a linguagem, mostrar vantagens, desvantagens, e conversar um pouco em forma de alguns tutoriais e se você quer acompanhar meu progresso vou criar vários artigos, conforme eu for avançando nos estudos, bora nessa ?!

Por que Rust ?
--------------

Como eu já disse, achei Rust muito interessante, pelo que li e pelo que já fiz com a linguagem (exercícios de lógica, entendendo os tipos e coisas básicas como palavras reservadas) nada intermediário ou avançado. Mas vou falar alguns pontos relevantes sobre Rust.

*   Documentação: Rust tem uma documentação incrível em várias línguas (inclusive pt-br). [Link da Doc](https://doc.rust-lang.org/book/).
*   Desempenho: É extremamente rápido e extremamente eficiente.
*   Confiabilidade: O rico sistema de tipos de Rust e seu modelo de _ownership_ garantem segurança de memória e segurança de concorrência — e permite que você elimine muitas categorias de erros durante a compilação.
*   Produtivo: Rust possui uma ótima documentação, um compilador amigável com mensagens de erros úteis, e ferramental de primeira qualidade
*   Instalação: É bem simples montar um ambiente para o Rust na sua máquina, basta você rodar um curl e pronto.

Todas essas informações estão disponíveis no próprio [website](https://www.rust-lang.org/pt-BR/) para você dar uma olhada. Além disso me senti bem confortável escrevendo minhas primeiras linhas de códigos e recebendo alguns erros bem, bem, bem amigáveis no console, apontando os meus erros.

Rustup
------

É o instalador e gerenciador de versões do rust.

Cargo
-----

É uma ferramenta de compilação e gerenciador de pacotes, ele é um `npm` do Rust

Integração
----------

Não importa se você usa vim ou até mesmo eclipse, ele tem uma boa integração com o seu editor favorito.

Criação de um projeto
---------------------

É bem simples de iniciar um projeto, depois da máquina configurada, basta rodar um `cargo new nome-do-projeto` ele gera o setup inicial do projeto.

Dependências
------------

Hoje em dia um projeto tem algumas ou diversas dependências externas, temos libs hoje em dia que são fantásticas, por exemplo, axios, lodash, express, etc… Rust não é diferente e para instalar é bem simples, basta adicionar a dependência em um arquivo chamado `cargo.toml` e rodar `cargo build` e pronto dependência instalada.


Por todos esses motivos esse ano estou disposto a resetar meu conhecimento em Rust e tentar mais uma vez, se você quiser me acompanhar, para aprender e ensinar um pouco, comente aqui em baixo, vai será muito bem-vindo.

Quem é Ferris ?
---------------

Ferris é a mascote não oficial da comunidade Rust. Muitas pessoas que programam Rust se consideram Rustáceos (“Rustaceans”), uma piadinha com a palavra “[crustáceos](https://en.wikipedia.org/wiki/Crustacean).” Em inglês, nos referimos a Ferris usando pronomes neutros ao invés de usar pronomes com gênero.

Ferris é um nome que brinca com o adjetivo ferroso (“ferrous”) que significa “do ferro ou que contém ferro”. Como Rust (ferrugem, em Português) surge em ferro, isso pareceu ser uma origem divertida para o nome da mascote!

Bem é isso, espero que tenham gostado, lembrem que qualquer informação que deixei passar, ou se quiserem adicionar qualquer coisa me mandem mensagem. Se esse artigo foi útil ficarei feliz. Abraços quentinhos para vocês!!

![](https://miro.medium.com/v2/resize:fit:540/1*m1R8owmhSiWCsbK3FyzPwA.gif)
