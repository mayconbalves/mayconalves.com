---
title: "Como um web browser funciona"
description: "Um artigo explicando como um web browser funciona por debaixo dos panos"
date: 2023-09-01
tags: []
---

> "Se você estabelece metas ridiculamente altas, e falha, tera falhado muito acima do que os outros consideram como sucesso" — James Cameron

![](https://miro.medium.com/v2/resize:fit:700/1*1fslgiRQjdU68i8XSwOypA.png)

Os web browser, são muito, muito, muito utilizados, se você está lendo esse artigo, é bem provável que esteja vendo através de um web browser (pode estar vendo por um app é claro) mas utilizamos praticamente o dia todo nossos web browser de preferência, seja para ver um vídeo, ler uma notícia, comprar alguma coisa, ele serve para muitos fins, mas hoje vou falar um pouco, como ele funciona por baixo dos panos !!

Um browser tem diversas camadas, e a forma como ele funciona é bem complexa, vou cobrir alguns pontos, pode ser que eu esqueça alguns, mas tem a parte de comentários para esse artigo crescer com outros pontos de vista ou algo que eu esqueça então fiquem a vontade para comentar.

Vamos começar pela arquitetura de um browser e conversar um pouco sobre cada camada:

![](https://miro.medium.com/v2/resize:fit:500/1*8GJGIHtFiFsBRgbZsUdUkw.png)

Interface de usuário:
---------------------

De fato essa é o resultado de tudo que foi programado, ou seja, a página que é entregue para o usuário, assim que ele digita um endereço na URL por exemplo: `https://www.mayconalves.com` você vai esperar alguns segundos para que a página carregue por inteiro, depois disso, vai poder interagir com a página, clicar em um link, clicar em um botão, preencher um formulário, e assim por diante, essa é a camada que a mágica já foi feita.

Motor do Browser:
-----------------

Ele é um meio (componente do próprio browser) de comunicação entre o que o usuário imputa ou interage na UI e o motor de renderização (próximo tópico) é vital ter um motor bem otimizado, para que as páginas web carreguem mais rápido.

Mecanismo de renderização:
--------------------------

Este componente é responsável por renderizar uma página da web, ele interpreta documentos HTML (CSS e JavaScript) e XML, e o layout final que é gerado sendo exibido para o usuário na UI. Cada navegador tem seu próprio mecanismo de renderização exclusivo.

Rede:
-----

É responsável por gerenciar chamadas de rede usando protocolos padrão como HTTP ou FTP (não tão comum hoje em dia). Ele também cuida de [questões de segurança](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/CSP) associadas à comunicação na Internet.

Interpretador JavaScript:
-------------------------

Ele analisa o JavaScript dentro do website. Depois de interpretar o js, ele retorna para o mecanismo de renderização para UI.

Back-end da IU
--------------

Essa é a camada que eu menos entendo, pelo que pude notar ela é o componente do browser que usa métodos do sistema operacional do usuário e é responsável por desenhar as janelas de cada SO, por isso que em cada plataforma temos janelas diferentes, mesmo usando o mesmo web browser.

Persistência de Dados
---------------------

Um navegador da web precisa armazenar vários tipos de dados localmente, [cookies](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Cookies), [local storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage), [session storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage). Os navegadores também devem ser compatíveis com mecanismos de armazenamento de dados como, [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API), [FileSystem](https://developer.mozilla.org/en-US/docs/Web/API/FileSystem), etc.

Essas são todas as camadas de um web browser, acho bem legal entender um pouco sobre cada camada, porém hoje vou falar um pouco mais sobre o mecanismo de renderização, pois eu acho de extrema importância e é nele que a verdadeira mágica acontece !!

Para entendermos como funciona o mecanismo de renderização vamos o usar o mesmo website de exemplo: `[https://www.mayconalves.com](https://www.mayconalves.com)` após digitar essa URL e apertarmos enter, acontecem os seguintes processos:

\-> A página HTML solicitada é analisada em blocos, incluindo os arquivos CSS externos e elementos de estilo, pelo mecanismo de renderização, formando assim a [árvore do DOM](https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model).

Press enter or click to view image in full size

![](https://miro.medium.com/v2/resize:fit:700/1*pgAl2YzhPq0hHXgD3mt4Fg.jpeg)

*   Ao mesmo tempo o web browser também cria uma árvore de renderização, enquanto a árvore do DOM recebe todos os elementos do HTML, a árvore de renderização usa só os elementos necessários para montar o `layout` da página, ou seja, elementos com `display: none` e elementos de `head` (meta, link, etc…) não aparecem na árvore de renderização.
*   No processo de `layout` cada elemento dentro da árvore de renderização cada nó recebe as coordenadas exatas para cada "coisa" ficar no lugar correto.
*   Por último quando `layout` estiver pronto o motor de renderização invoca o método `paint()` para "pintar" na tela usando a camada de back-end da UI.

Bem é isso, espero que tenham gostado, lembrem que qualquer informação que deixei passar, ou se quiserem adicionar qualquer coisa me mandem mensagem. Se esse artigo foi útil ficarei feliz. Abraços quentinhos para vocês!!

Fontes:

*   [https://web.dev/howbrowserswork/](https://web.dev/howbrowserswork/)
*   [https://developer.mozilla.org/en-US/docs/Web/Performance/How\_browsers\_work](https://developer.mozilla.org/en-US/docs/Web/Performance/How_browsers_work)
*   [https://www.youtube.com/watch?v=WjDrMKZWCt0](https://www.youtube.com/watch?v=WjDrMKZWCt0)
*   [https://developer.mozilla.org/pt-BR/docs/Web/API/CSS\_Object\_Model](https://developer.mozilla.org/pt-BR/docs/Web/API/CSS_Object_Model)
*   [https://javascript.info/dom-nodes](https://javascript.info/dom-nodes)
*   [http://samsarajs.org/docs/render-tree.html](http://samsarajs.org/docs/render-tree.html)
