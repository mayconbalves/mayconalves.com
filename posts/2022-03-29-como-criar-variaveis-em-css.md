---
title: Como criar variaveis em CSS.
description: Uma dica para vocês optimizarem o seu css.
date: 2022-03-29
image: /images/como-criar-variaveis-em-css.webp
tags: [css]
background: "#D6BA32"
---

> Chorar sobre as desgraças passadas é a maneira mais segura de atrair outras. **William Shakespeare**.

![redux persist](/images/como-criar-variaveis-em-css.webp)

Em meus posts eu falo bastante sobre, javascript, git e alguns tipos de setup mas é bem difícil eu falar sobre css, por dois motivos, 1) eu estudo pouco 😢 2) não conheço profundamente, mas…. Isso está mudando essa semana (sim desde segunda-feira) voltei estudar, pois css é fantástico e merece mais atenção, por isso resolvi escrever sobre variáveis em css, e no próximo post de css pretendo falar sobre mais coisas bem legais.

Eu não conhecia essa feature talvez por usar bastante hoje em dia css-in-js então uso muitas coisas que ele oferece de mais moderno e esqueço que o css puro oferece coisas bem legais, então chega de papo e bora dar uma olhada em como funciona essa parada.

## Função var()

Pode ser usada para customizar uma propriedade e essa propriedade ser reutilizada. A função var() recebe dois parâmetros o primeiro é a propriedade que queremos personalizar, por exeplo: `var(--p-color)` já o segundo parâmetro é opcional e serve como um valor default caso a primeira propriedade esteja escrita errada ou não existir, por exemplo: `var(--p-color, red)` se a variável `--p-color` não existir a propriedade vai assumir a cor vermelha, simples e bem útil não é mesmo 😃.

## Valores

temos a propriedade customizada que é acompanhada por `--` e o nome da propriedade, então vamos fazer um deparada com uma propriedade comum de css.

```css
body {
  background-color: red;
}
usando a variável fica assim:
:root {
  --bg-color: red;
}
```

Feito isso podemos usar esse valor usando a função, dessa forma:

````css
body {
  background-color: var(--bg-color);
}

Observem que usei o pseudo seletor `:root` isso significa que você terá uma variável global, leia um pouco mais sobre esse pseudo seletor clicando aqui.

Agora é o momento que saímos um pouco da teoria (chata demais 🌝) e vamos ver alguns exemplos:

Criei o seguinte código html:

```html
<div class="container">
  <h1>com variavel</h1>

  <h2>sem variavel</h2>

  <h3 class="style">Com estilo</h3>
  <h3>Sem estilo</h3>
</div>
````

E o seguinte css:

```css
:root {
  --font-color: red;
}
.style {
  --color-style: green;
}
h3 {
  --color: blue;
}
h1 {
  color: var(--font-color);
}
/* aqui vamos passar o nome da var errada*/
h2 {
  color: var(--font-colorr, pink);
}
/* esse caso não pega o estilo por que declarei só a classe .style */
h3 .style {
  color: var(--color-style);
}
/* aqui funciona, depois remova essa essa linha */
.style {
  color: var(--color-style);
}
```

Quando eu declaro a seguinte variável:

```css
h3 {
  --color: blue;
}
```

Isso significa que vou poder chamar essa variável somente em tags `<h3>` e quando eu crio uma variável para essa classe:

```css
.style {
  --color-style: green;
}
```

é o mesmo cenário, então qualquer elemento que têm a classe .style posso usar essa variável para deixar o elemento com a cor verde.

Um caso curioso é esse aqui:

```css
h3 .style {
  color: var(--color-style);
}
```

Esse caso o `<h3>` não pega o estilo, mesmo tendo variáveis para h3 e style pois não e a mesma coisa, aqui é uma regra de css, espero que você entenda 😃.

Bem é isso, espero que tenham gostado, lembrem que qualquer informação que deixei passar, ou se quiserem adicionar qualquer coisa me mandem mensagem. Se esse artigo foi útil ficarei feliz. Abraços quentinhos para vocês!!
