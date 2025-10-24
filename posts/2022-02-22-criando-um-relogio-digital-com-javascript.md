---
title: Criando um relógio digital com javascript.
description: Uma forma divertidade para exercitar um pouco de javascript.
date: 2022-02-22
image: /images/criando-um-relogio-digital-com-javascript.webp
tags: [javascript, html, css]
background: "#D6BA32"
---

> A alegria que se tem em pensar e aprender faz-nos pensar e aprender ainda mais. **Aristóteles**.

![relógio](/images/criando-um-relogio-digital-com-javascript.webp)

Estou escrevendo esse artigo pouco tempo depois que eu e minha esposa recebemos o diagnóstico de COVID-19, felizmente estamos bem. Daí hoje resolvi escrever um artigo de como criar um relógio digital com javascript. Fiz isso pois queria relembrar algumas coisas e também acredito que esse seja um dos muitos projetos que podem ajudar quem está começando na carreira como frontend.

Para esse exemplo vamos criar três arquivos em uma mesma pasta:

```bash
index.html
styles.css
script.js
```

Primeiro vamos começar com a parte do html que é bem simples.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Digital Clock</title>
    <link href="./styles.css" type="text/css" rel="stylesheet">
  </head>
  <body>
    <div class="container">
      <div class="clock"></div>
    </div>

    <script src="./script.js"></script>
  </body>
</html>
```



Criei uma estrutura básica, é legal notar algumas linhas.

Na linha 8: chamo o arquivo css que vamos usar para estilizar nosso relógio, eu achei bem legal, mas você pode criar seus próprio estilo para ficar com sua cara.

Na linha 11: criei um `container` que nada mais é do que o fundo para nosso relógio.

Na linha 12: é o relógio em si.

Na linha 15 chamo o `script.js` que é onde vamos fazer nossas funções e fazer nosso relógio funcionar.

Tem as metas tags que não vou mencionar nesse artigo, mas sim em um futuro artigo, talvez até no próximo 😃.

Agora vamos ao css:

```css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  min-height: 100vh;
  width: 100%;
}

.container {
  background-image: radial-gradient(circle, #0077ff 0%, #00ffaa 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.clock {
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);
  border: 1px solid #000;
  border-radius: 3%;
  color: #fff;
  display: flex;
  font-size: 60px;
  justify-content: center;
  height: 100px;
  width: 250px;
}

```


Como eu disse nesse caso, você pode estilizar da melhor forma que quiser, uma coisa que acho legal comentar é sobre a linha 13 que deixo o background em `radial-gradient` que é um efeito bem legal.

Se quiser copiar essa folha de estilo e depois ir fazendo suas modificações acho bem interessante.

Por último vamos ao nosso script que é bem simples também.

```javascript
const getHours = () => {
  const clock = document.getElementsByClassName('clock')[0]
  const date = new Date()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()
  const hour = hours < 10 ? `0${hours}` : hours
  const minute = minutes < 10 ? `0${minutes}` : minutes
  const second = seconds < 10 ? `0${seconds}` : seconds
  clock.innerHTML = `${hour}:${minute}:${second}`
}

setInterval(() => {
  getHours()
}, 1000)

```


Criei uma função chamada `getHours` que faz todo o trabalho necessário, mas você também pode separar em várias funções menores e deixar o código melhor ainda.

Na linha 2: eu pego a div do relógio para jogar nosso javascript lá dentro, reparem que usei o `getElementByClassName` passado a classe `clock` que é usado também para estilizar nosso relógio, além disso passo um array [0] pois quero pegar o primeiro elemento dessa classe, eu poderia colocar um id e usar o `getElementById` como eu disse, explorem esse código e façam suas mudanças.

Na linha 3: eu crio uma instância da data e daí posso usar vários métodos que existem dentro de objeto de date.

Nas linhas 4, 5, 6: é bem simples, pegamos, as horas, minutos e segundos, respectivamente.

Nas linhas 7, 8 e 9: faço a mesma comparação, se as horas, minutos e segundos, forem menores que 10, concateno o 0, se não, deixo o valor que a variável recebe.

Na linha 10: já tinha pegado a `div` com a classe `clock` e jogo as horas, minutos e segundos dentro dela.

Na linha 13: por último chamo a função `setInterval` sendo atualizada de 1 em 1 segundo, simples não é mesmo ? 😄.

Bem é isso, espero que tenham gostado, lembrem que qualquer informação que deixei passar, ou se quiserem adicionar qualquer coisa me mandem mensagem. Se esse artigo foi útil ficarei feliz. Abraços quentinhos para vocês!!
