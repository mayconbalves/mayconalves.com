---
title: Como usar nvm no windows.
description: Aprenda a configurar o nvm para usar no windows.
date: 2022-02-09
tags: [javascript, html, css]
---

> Antes de fazer alguma coisa , pense , quando achar que já pode faze-la , pense novamente . **Pitágoras**.

Atualmente estou trabalhando com Windows (me surpreendeu positivamente, mas na minha opinião, ainda precisa caminhar muito para chegar no linux ou macOs para desenvolvimento de software) pelo fato de poder atuar em projetos com possíveis diferentes versões de node, no lugar de instalar a última versão estável do node + npm, preferi essa alternativa, pois no meu ambiente de estudo e pessoal, já trabalho com o nvm (node version manage). Então vou mostrar como instalar, é bem simples e prático, mas pouca gente acaba não conhecendo essa alternativa. Vamos lá.

Primeira coisa é preciso baixar a versão atual da nvm, você consegue através desse [link](https://github.com/coreybutler/nvm-windows/releases). Recomendo que baixe nvm.setup.zip depois de baixar, basta extrair o arquivo em algum lugar desejado, depois basta executar o setup, não tem nenhum mistério, basta clicar em next em todos os steps, pois é bem simples mesmo, terminado o processo de instalação, abra o terminal e rode o comando: nvm --version se tudo ocorreu tudo bem o resultado será esse:

![terminal com nvm version](/images/nvm-version.webp)

Agora que já temos o nvm instalado na nossa máquina, basta escolhermos a versão do node que queremos instalar com o comando: `nvm install latest` para instalarmos a última versão do node ou `nvm install node-version-number`.

Temos a nossa disposição o comando: `nvm list` que irá listar todas as versões de node que temos instalado na nossa máquina, teremos algo assim:

![terminal com nvm list](/images/nvm-list.webp)

Notem que tenho duas versões na minha máquina, a versão que estou usando é marcada com um \* (asterisco). Quando preciso mudar de versão é bem simples, basta eu olhar as versões que tenho na máquina e rodar o comando: `nvm use 14.16.1` (dei um exemplo de versão da imagem acima) sempre colocamos o número da versão para mudarmos para qual precisamos.

Bem é isso, espero que tenham gostado, lembrem que qualquer informação que deixei passar, ou se quiserem adicionar qualquer coisa me mandem mensagem. Se esse artigo foi útil ficarei feliz. Abraços quentinhos para vocês!!
