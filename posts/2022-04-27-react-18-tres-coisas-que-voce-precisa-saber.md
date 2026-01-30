---
title: React 18 - Três coisas que você precisa saber
description: Alguns métodos que vão ajudar no seu dia a dia
date: 2022-04-27
tags: [react, js]
---

> Sempre parece impossível, até que seja feito. *Nelson Mandela*.

![React 18](/images/react-18.webp)

Para quem está na área de tecnologia sabe que se você ficar parado mais de seis meses, já fica ultrapassado.

Trabalho com React fazem alguns anos e vi essa lib evoluir de uma maneira fantástico assim como o meu querido JavaScript 😍

No final de março saiu a versão 18 do React já está disponível e já pode ser testada 😃 já fiz alguns testes nada de profundo ainda, mas pretendo nas próximas semanas, pois estarei de férias e dev que é dev não descanse nem quando está de férias, brincadeira, ou não haha.

Vou falar de algumas coisas que achei interessante trazer nesse artigo, mas se você quer ver todas as novas features recomendo que leia a documentação completa, basta [clicar aqui](https://react.dev/blog/2022/03/29/react-v18).

## useId()

Ele gera um `id` que pode facilitar muito na hora de enviar algum valor para o seu backend, a grande vantagem é que você não vai precisar de nenhuma lib externa para enviar os seus `id's`

```javascript
import { useId } from 'react'
const id = useId()
return (
  <div>
    <input id={id} type="text" name="name" />
  </div>
)
```

Ele só gera um `id` por componente então para ter vários `id's` diferentes precisamos concatenar um sufixo:

```javascript
import { useId } from 'react'
const id = useId()
return (
  <div>
    <input id={id + '-firstName'} type="text" name="firstName" />
    <input id={id + '-lastName'} type="text" name="lastName" />
  </div>
)
```

O `useId` é uma string que inicia com `:` porém ele não é suportado por seletores  `css` nem API's como `querySelectorAll` ele também não deve ser usado como `keys` em listas.

## React Suspense

Ele pode trabalhar junto com o lazy loading, falando a grosso modo, podemos ter um componente B, sendo filho do componente A e de fato só renderizar o componente B quando ele estiver totalmente carregado, meio confuso, não ? Bora para um exemplo prático, vamos criar um `app.js`

```javascript
import './App.css'
import { Suspense, lazy } from 'react'


function App() {
  const Pokemons = lazy(() => {
    return import('./pokemons')
})

  return (
    <div className="App">
      <h1>Todos Pokemons</h1>
      <Suspense fallback={<h1>Carregando...</h1>}>
        <Pokemons />
      </Suspense>
    </div>
  )
}

export default App
```

Agora vamos criar o nosso `pokemon.js`

```javascript
import { useEffect, useState } from "react"

const Pokemons = () => {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('https://pokeapi.co/api/v2/pokemon?offset=500&limit=500')
      try {
        const allPokemons = await data.json()
        setPokemons(allPokemons.results)
      } catch(e) {
        console.error(e)
      }
    }

    return fetchData
  }, [])

  return (
    <>
      <ul>
        {pokemons.map(pokemon => {
          return (
            <li key={pokemon.name}><p>{pokemon.name}</p></li>
          )
        })}
      </ul>
    </>
  )
}

export default Pokemons
```

Nosso componente `Pokemon` só será mostrado na tela quando de fato estiver completo, antes precisávamos criar um state para poder manipular o `loading` da página dessa forma:

```javascript

import { useEffect, useState } from "react"

const Pokemons = () => {
  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('https://pokeapi.co/api/v2/pokemon?offset=500&limit=500')
      try {
        const allPokemons = await data.json()
        setLoading(true)
        setPokemons(allPokemons.results)
      } catch(e) {
        console.error(e)
      }
    }

    return fetchData
  }, [])

  return (
    <>
    {loading ? ( <h1>Carregando...</h1> ) : (
      <ul>
        {pokemons.map(pokemon => <li key={pokemon.name}><p>{pokemon.name}</p></li>) }
      </ul>
     )
    </>
  )
}

export default Pokemons
```

Bem mais simples usando o Suspense certo!

## StartTransition

Esse é mais um `hook` novo que acho que merece destaque, esse cara ajuda a manter a UI “responsiva” e fazer as atualizações necessárias sem bloqueios ao mesmo tempo.

Esse `hook` ajuda a mostrar para o react que aquela determinada ação deve ser executada com urgência, como um click de um botão por exemplo como mostra na documentação:

```javascript
function App() {
  const [isPending, startTransition] = useTransition()
  const [count, setCount] = useState(0)

  function handleClick() {
    startTransition(() => {
      setCount(c => c + 1)
    })
  }

  return (
    <div>
      {isPending && <Spinner />}
      <button onClick={handleClick}>{count}</button>
    </div>
  )
}
```

Bom essas foram as mudanças que eu consegui entender de uma maneira legal, mas vou continuar lendo a documentação para tentar usar todas as novas APIs dessa versão 18 do React, além de entender sobre mais algumas mudanças que ocorreram, se você tem um projeto de React um pouco mais antigo sugiro que faça o upgrade para a versão 18 e teste também.

Bem é isso, espero que tenham gostado, lembrem que qualquer informação que deixei passar, ou se quiserem adicionar qualquer coisa me mandem mensagem. Se esse artigo foi útil ficarei feliz. Abraços quentinhos para vocês!!
