---
title: "HTML: tags bem legais para usarmos"
description: Sempre esquecemos que o HTML tem tags legais
date: 2022-10-08 08:36:05
image: https://files.tecnoblog.net/wp-content/uploads/2014/10/html5.jpg
category: html
background: "#EB7728"
---

>A imaginação é mais importante que o conhecimento. **Albert Einstein.**

![background](https://files.tecnoblog.net/wp-content/uploads/2014/10/html5.jpg)

Nosso tão querido html que por muitas vezes é deixado de lado, pois quando começamos a fazer coisas mais avançadas, usamos mais css e javascript. Mas voltei com um artigo de HTML para mostrar algumas tags bem legais que pouca gente usa.

## Caption

Essa tag é serve para uma espécie de títulos ou legenda para a tabela, ela deve ser declarada logo após a tag `<table>`

```html
<table>
  <caption>Gastos com cartão de crédito</caption>
  <tr>
    <th>Mês</th>
    <th>Valor</th>
  </tr>
  <tr>
    <td>Janeiro</td>
    <td>R$ 300</td>
  </tr>
  <tr>
    <td>Fevereiro</td>
    <td>R$ 50</td>
  </tr>
</table>
```

## Cite

Acredito que pouca gente conheça essa tag, ela serve para darmos ênfase  em algum livro, poema, música, filme e afins.

```html
<p><cite>Under the dome</cite> por Stephen King.</p>
```

## Datalist

Essa é bem legal, ela pré define alguns valores para um elemento `<input />` ele transforma a tag em uma espécie de `<select>`. o atributo id do elemento deve ser igual ao atributo da lista de elementos `<input>` (isso os une).

```html
<label for="browser">Choose your browser from the list:</label>
  <input list="browsers" name="browser" id="browser">
  <datalist id="browsers">
    <option value="Edge">
    <option value="Firefox">
    <option value="Chrome">
    <option value="Opera">
    <option value="Safari">
  </datalist>
  ```

## Details

Essa serve para fazermos accordions mais simples de maneira bem fácil a tag `<summary>` é usada em conjunto, ele serve como título para o nosso accordion para esconder nossas opções.

```html
<details>
  <summary>Epcot Center</summary>
  <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>
</details>
```

## Dialog

Ela cria uma especie de modal, evidentemente que precisamos estilizar um pouco, mas essa tag já entrega algo legal para nós.

```html
<dialog open>This is an open dialog window</dialog>
```

Bem é isso espero que tenham gostado e espero que tenham aprendido algo novo, qualquer dica de tag é muito bem vinda. Abraço quentinhos para vocês !!
