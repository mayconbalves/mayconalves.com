---
title: "Javascript - removendo valores duplicados de um array."
description: "Vamos usar uma forma simples de remover objetos duplicados."
date: 2020-03-20
tags: [javascript, es2015, set]
---

> Para os crentes, Deus está no princípio das coisas. Para os cientistas, no final de toda reflexão. **Max Planck**.

Resolvi escrever esse mini-artigo, pois recentimente precisei remover valores duplicados dentro de um array, que viam da store (redux) para que eu precisa que fossem únicos. Bom vamos lá.

Imaginem que você recebe um array simples de ids mas que de alguma maneira eles possam vir repetidos, porém na hora de usar esses mesmos ids eles não podem estar repetidos. Pois eu precisa iterrar sobre eles e se fossem repetidos poderia dar algo errado 😢.

Então apliquei uma solução bem simples, usei duas APIs nativas do javascript `spread operator` e o `objeto Set`. fazendo algo do tipo:

```javascript
const { ids } = this.props; // ids = [1, 2, 3, 2, 3, 4, 5, 6]
const newValues = [...new Set(ids)]; // [1, 2, 3, 4, 5, 6]
```

Simples assim !! Disse para vocês que era um mini-artigo. MAS…. Lembre-se que nesse caso removi os ids na minha classe, ou seja, na store (redux)os valores continuam duplicados.

Bem é isso, espero que tenham gostado, lembrem que qualquer informação que deixei passar, ou se quiserem adicionar qualquer coisa me mandem mensagem. Se esse artigo foi útil ficarei feliz. Abraços quentinhos para vocês !!
