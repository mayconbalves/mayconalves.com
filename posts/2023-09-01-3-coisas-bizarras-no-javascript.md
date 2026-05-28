---
title: "3 coisas bizarras no JavaScript"
description: "O JavaScript é maluco esse artigo vai mostrar isso"
date: 2023-09-01
tags: []
---

> Nós sabemos que todos são iguais em todos os lugares, há o bem e o mal em todo mundo — Paul McCartney

![](https://miro.medium.com/v2/resize:fit:700/1*7b1TA59hYDgT7RAlKlrRNg.png)

Para mim o js sem dúvidas uma das melhores linguagens de programação da atualidade. Podemos fazer coisas bem legais com ela tanto no frontend (onde ela ganhou bastante notoriedade) quanto no backend, podemos usa-la em frameworks e também podemos criar funções para arquivos terraform consumirem, ou seja, é uma linguagem bem versátil.

Mas nesse artigo vou mostrar cinco coisas bizarras que podemos fazer e "talvez" você não saiba ainda, então chega de enrolar e bora.

## 1 — Magic number

Uma das coisas mais estranhas do nosso querido JavaScript, ou como de fato ele é conhecido como o \`número que cresce magicamente\` basta você digitar fazer isso:

```javascript
// digite o nove, dezesseis vezes  
const magicNumber = 9999999999999999  
console.log(magicNumber) // 10000000000000000
```

<br><br><br>
## 2 — Verdadeiro é igual a falso

Podemos fazer várias coisas legais com JS, porém podemos ficar com uma pulga atrás da orelha.

Usamos `!!` para converter valores para boolean

```javascript
console.log(!!false) // false  
console.log(!!true) // true
```
<br>

Beleza, fazendo com strings

```javascript
console.log(!!"false") // true  
console.log(!!"true") // true
```

Então isso é igual ?!

```javascript
console.log(!!"false" == !!"true") // true
```

<br><br><br>
Comparando tipos

```javascript
console.log(!!"false" === !!"true") // true
```
<br><br><br>
Vamos de novo

```javascript
console.log(!!false == !!true) // false
```

<br><br><br>
Porém

```javascript
console.log(!!"false" == !!true) // true  
console.log(!!"false" === !!true) // true
```

<br><br><br>
## 3 — Quem é maior e quem é menor ?

```javascript
console.log(3 > 2) // true  
console.log(2 > 1) // true  
  
console.log(1 < 2) // true  
console.log(2 < 3) // true  
  
console.log(3 > 2 > 1) // false wtf ???  
console.log(1 < 2 < 3) // true
```

Esses são apenas três casos, mas o JavaScript tem bastante ocorrência de coisas bizarras, essas aqui eu tirei do incrível site [wtfjs](https://wtfjs.com/) recomendo que também deem uma olhada em mais coisas por lá.

Bem é isso, espero que tenham gostado, lembrem que qualquer informação que deixei passar, ou se quiserem adicionar qualquer coisa me mandem mensagem. Se esse artigo foi útil ficarei feliz. Abraços quentinhos para vocês!!
