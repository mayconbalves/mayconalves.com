---
title: Removendo objetos duplicados de dentro de um array usando Set()
description: Uma forma simples de remover objetos iguais dentro de um array
date: 2021-12-21
tags: [js]
---

> O dinheiro não representa tal valor como os homens colocaram em cima dele. Todo o meu dinheiro foi investido nas experiências com as quais eu fiz descobertas novas permitindo a humanidade de ter uma vida um pouco mais fácil. Nikola Tesla

É bem comum em aplicações da vida real ou até mesmo projetos pessoais, trabalharmos com arrays e objetos. Normalmente o frontend trabalha consumimos [APIs](https://www.redhat.com/pt-br/topics/api/what-are-application-programming-interfaces) e muitas vezes as respostas que recebemos são arrays de objetos.

Por exemplo podemos consumir a API do github para obtermos o seguinte resultado:

```javascript
const data = fetch(
  `https://api.github.com/users/mayconbalves/repos?per_page=50`
)
  .then((res) => res.json())
  .then((resp) => resp);
console.log(data); // Array(43)
```

Obs: você pode colar esse código no console do seu navegador, note que ele devolve um array com 43 objetos.

Imagine que recebemos do backend uma lista de nome e sobrenome:

```javascript
const persons = [
  { id: 1, name: "maycon", lastName: "alves" },
  { id: 2, name: "michael", lastName: "jackson" },
  { id: 3, name: "michael", lastName: "jordan" },
  { id: 1, name: "maycon", lastName: "alves" },
];
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
    { id: "1", name: "maycon", lastName: "alves" },
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

Bem é isso, espero que tenham gostado, lembrem que qualquer informação que deixei passar, ou se quiserem adicionar qualquer coisa me mandem mensagem. Se esse artigo foi útil ficarei feliz. Abraços quentinhos para vocês!!
