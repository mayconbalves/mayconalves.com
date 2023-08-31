---
templateKey: 'blog-post'
title: 'Just in: small batch of Jamaican Blue Mountain in store next week'
date: 2017-01-04T15:04:10.000Z
featuredpost: true
description: >-
  We’re proud to announce that we’ll be offering a small batch of Jamaica Blue
  Mountain coffee beans in our store next week.
tags:
  - jamaica
  - green beans
  - flavor
  - tasting
---

> O dinheiro não representa tal valor como os homens colocaram em cima dele. Todo o meu dinheiro foi investido nas experiências com as quais eu fiz descobertas novas permitindo a humanidade de ter uma vida um pouco mais fácil. Nikola Tesla

![set](https://miro.medium.com/max/1400/1*V3vMdJ9-ZLGpjB-Snw_d1Q.jpeg)

É bem comum em aplicações da vida real ou até mesmo projetos pessoais, trabalharmos com arrays e objetos. Normalmente o frontend trabalha consumimos [APIs](https://www.redhat.com/pt-br/topics/api/what-are-application-programming-interfaces) e muitas vezes as respostas que recebemos são arrays de objetos.

Por exemplo podemos consumir a API do github para obtermos o seguinte resultado:

```javascript
const data = fetch(`https://api.github.com/users/mayconbalves/repos?per_page=50`).then(res => res.json()).then(resp => resp)
console.log(data) // Array(43)
```

Obs: você pode colar esse código no console do seu navegador, note que ele devolve um array com 43 objetos.

Imagine que recebemos do backend uma lista de nome e sobrenome:

```javascript
const persons = [
  { id: 1, name: "maycon", lastName: "alves" },
  { id: 2, name: "michael", lastName: "jackson" },
  { id: 3, name: "michael", lastName: "jordan" },
  { id: 1, name: "maycon", lastName: "alves" }
]
```

Podemos sim ter nomes repetidos porém, o primeiro e o último id são iguais, por tanto são a mesma entidade, e temos a regra de não mostrar em tela objetos iguais. Para remover objetos iguais iremos usar o objeto Set()

O objeto set permite que armazenemos valores únicas primitivos ( string, number, boolean, undefined, null e symbol ) a referência de objetos. Leia um pouco mais sobre [Set()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Set)

Já escrevi um artigo sobre como remover propriedades iguais de dentro de um array de forma bem simples usando o Set clique aqui para ler.

Para remover esses objetos duplicados existem algumas maneiras, porém usando o set é bem simples:

```javascript
export default function App() {
  const setPerson = new Set();
  const persons = [
    { id: "1", name: "maycon", lastName: "alves" },
    { id: "2", name: "michael", lastName: "jackson" },
    { id: "3", name: "michael", lastName: "jordan" },
    { id: "1", name: "maycon", lastName: "alves" }
  ];

  const filterPerson = persons.filter((person) => {
    const duplicatedPerson = setPerson.has(person.id);
    setPerson.add(person.id);
    return !duplicatedPerson;
  });

  return (
    <div className="App">
      <h1>No repeat values</h1>
      <ul>
        {filterPerson.map((person) => {
          return (
            <li key={person.id} value={person.name}>
              <p>{person.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
```

Espero que curtam, lembrem qualquer dúvida, critica ou feedback basta me chamar para uma conversa ou deixar aqui nos comentários. Abraços quentinhos para vocês !!
