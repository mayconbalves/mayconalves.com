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

>Quando você tem muitas pessoas e está tentando satisfazer a contribuição de todos, você geralmente acaba com algo Tão incrivelmente genérico que não tem ponto de vista. **Rob Zombie.**

![background-image](https://miro.medium.com/max/1050/1*yzN0cglEc5c0DbjTsHh72Q.png)

Se você não conhece nada sobre hooks do react, eles foram introduzidos a partir da versão 16.8 esse é o link da [documentação.](https://pt-br.reactjs.org/docs/hooks-intro.html)

Hoje vou falar um pouco do useEffect que é um pouco mais comum em aplicações react. Ele recebe uma função como primeiro parâmetro e também pode receber um array de variáveis para controlar esse hook.

Primeiro ponto dele é que se você está acostumado a trabalhar com class e usa os diversos ciclos de vida do react [leia a doc](https://pt-br.reactjs.org/docs/state-and-lifecycle.html). Ele vem para substituir `componentDidMount`, `componentWillUnmount` e `componentDidUpdate.`

Agora vou compartilhar alguns exemplos simples, para entendermos como esse hook funciona. Vamos lá. Vou usar a API do github para listar alguns repositórios, no primeiro caso, quero que o useEffect seja chamado apenas uma vez, quando o componente é montado em tela.

```javascript
import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [repos, setRepos] = useState([])

  useEffect(() => {
    const fetchRepos = async () => {
      const repos = await fetch('https://api.github.com/users/mayconbalves/repos?per_page=50')
      const data = await repos.json()
      setRepos(data)
    }

    fetchRepos()
  })

  return (
    <div className="App">
      <h1>Repos github</h1>
      <ul>
        {repos.map(repo => {
          return (
            <li key={repo.id}>
              <p>{repo.name}</p>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default App
```

Agora se quisermos que a função seja chamada de novo, podemos “mandar” ela ficar observando uma variável repository na linha 11 assim que ela mudar o useEffect será executado mais uma vez. Percebam que no exemplo abaixo diferente do exemplo acima, eu passo um user através do que o usuário digitar no input, e assim que ele apertar o botão eu chamo o handleSubmit da linha 19 chamando a função fetchRepos mais uma vez.


```javascript
import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [repos, setRepos] = useState([])
  const [values, setValues] = useState({ repository: '' })

  useEffect(() => {
    fetchRepos()
  }, [values.repository])

  const fetchRepos = async (user = 'mayconbalves') => {
    const repos = await fetch(`https://api.github.com/users/${user}/repos?per_page=50`)
    const data = await repos.json()
    setRepos(data)
  }

  const handleSubmit = () => {
    fetchRepos(values.repository)
  }

  const inputChange = (e) => {
    const { name, value } = e.target

    setValues({
      ...values,
      [name]: value
    })
  }

  return (
    <div className="App">
      <h1>Repos github</h1>
      <input
        name="repository"
        onChange={inputChange}
        placeholder="digite o nome do seu usuário"
        value={values.repository}
      />

      <button type="button" onClick={handleSubmit}>Buscar</button>
      <ul>
        {repos.map(repo => {
          return (
            <li key={repo.id}>
              <p>{repo.name}</p>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default App
```

E por último, podemos passar como segundo parâmetro um array vazio, que significa que o seu useEffect será executado apenas uma vez.


```javascript
import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {

  const [repos, setRepos] = useState([])

  useEffect(() => {
    const fetchRepos = async (user) => {
      const repos = await fetch(`https://api.github.com/users/${user}/repos?per_page=50`)
      const data = await repos.json()
      setRepos(data)
    }

    fetchRepos('mayconbalves')
  }, [])

  return (
    <div className="App">
      <h1>Repos github</h1>
      <ul>
        {repos.map(repo => {
          return (
            <li key={repo.id}>
              <p>{repo.name}</p>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default App
```

Nota: A diferença desse para o primeiro exemplo é que a função fetchRepos nesse caso espera um parâmetro.

Esse último exemplo é bem interessante e é bem legal vocês fazerem o teste abrindo a aba de network do navegador e ver o resultado, primeiro basta copiar o código acima. Depois altere o useEffect para isso aqui:

![﻿exemplo](https://miro.medium.com/max/1400/1*555PD-HMHW2rkAm4TcZmPQ.png)

Espero que tenham gostado, lembrando que qualquer dúvida, feedback ou sugestões podem mandar, ficarei feliz em responder ou aprender mais 😃. Boa semana e abraços quentinhos para vocês !!!
