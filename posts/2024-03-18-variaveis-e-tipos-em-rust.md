---
title: "Variáveis e tipos em Rust."
description: "Vamos falar de tipos e variáveis em rust nesse artigo"
date: 2024-03-18
tags: []
---

> A parte que ignoramos é muito maior que tudo quanto sabemos. [Platão](https://www.pensador.com/autor/platao/).

![](https://miro.medium.com/v2/resize:fit:700/1*PUObNO95Pa_1OVdulWV73Q.png)

Mais um post do meu progresso em Rust, se você está aqui para aprender junto comigo aqui estão a [parte 01](https://medium.com/@mayconbalves/meu-caminho-para-aprender-rust-f1b9638a6196) e [parte 02](https://medium.com/@mayconbalves/hello-word-com-rust-77fccb05e18b).

Em Rust existe dois tipos de variáveis e por padrão são imutáveis, isso para manter o seu código mais seguro e de fácil concorrência. Podemos declarar uma variável com as palavras reservadas `let` ou `const⁣.⁣`Se você veio do JavaScript sabe muito bem que podemos reatribuir valores em variáveis do tipo `let` no Rust é bem parecido, porém precisamos falar que essa `let` é do tipo `mut` dai conseguimos reatribuir valores nessa variável. Bora entender isso, na prática.

Podemos criar um mini projeto ou simplesmente criar um arquivo com a extensão rs. Criei um projeto usando o cargo, basta digitar no terminal:

```shell
cargo new variaveis
```

Pronto projeto criado, vamos alterar o arquivo `main.rs` para vermos as variáveis funcionando:

```rust
fn main() {  
    let a = 1;  
  
    println!("O valor de a é {}", a);  
  
    a = 2;  
  
    println!("O valor de a agora é {}", a);  
}
````

Com esse código teremos o seguinte erro no console:

Press enter or click to view image in full size

![](https://miro.medium.com/v2/resize:fit:700/1*D-QaOUydYDcUhmJFmC3QxQ.png)

Por isso tenho curto Rust, olha a mensagem que ele devolve, basicamente ele diz que o já está sendo usado, para fazer o binding de um novo valor podemos usar a palavra reservada `mut` para que isso seja possível, além disse em vermelho no console, temos a mensagem que a variável a é imutável. Então o Rust facilita muito para podermos resolver o problema no nosso código, bora lá:

```rust
fn main() {  
    let mut a = 1;  
  
    println!("O valor de a é {}", a);  
  
    a = 2;  
  
    println!("O valor de a agora é {}", a);  
}
```

Agora nosso programa funcionará e no console recebemos o seguinte:

Press enter or click to view image in full size

![](https://miro.medium.com/v2/resize:fit:700/1*WLhX7fDvMQoUn25StrAWfw.png)

## Diferenças entre const e let

Uma `const` não pode receber a palavra `mut` para ser mutável, de fato não conseguimos mudar o seu valor. Precisamos “tipar” uma const para ela funcionar corretamente, elas podem ser declaradas em qualquer escopo, incluindo escopo global, então se você precisa de uma regra que vai ser usado em todo seu projeto, pode-se usar const para isso, por último não podemos receber valores de uma chamada em uma constante, ou qualquer outro valor que só temos o resultado após a execução do programa. Vamos para um exemplo:

```rust
fn main() {  
    const MAX\_VALUE: u32 = 100\_000;  
}
```

Por convenção Rust usa letra maiúsculas separadas por um sublinhado logo em seguida. Podemos tentar burlar código acima de duas maneiras para saber se realmente podemos tentar modificar uma constante ou deixar ela sem tipo:

```rust
fn main() {  
    const mut MAX\_VALUE: u32 = 100\_000;  
    println!("O valor máximo é {}", MAX\_VALUE);  
}  


// recebemos o erro: const globals cannot be mutable  
 ``` 
ou  
```rust
fn main() {  
    const mut MAX\_VALUE = 100\_000;  
    println!("O valor máximo é {}", MAX\_VALUE);  
}  

// missing type for \`const\` item
```
## Shadowing

Esse é um conceito que ainda estou tentando internalizar, mas basicamente falando em Rust, podemos ter duas ou mais variáveis com o mesmo nome, isso causa o efeito de “sombra”, pois o primeiro valor é “sombreado” pelo segundo valor, bora para um exemplo:

```rust
fn main() {  
    let x = 1;  
    println!("o valor de x = {}", x); // valor de x 1  
    let x = x + 1;  
    println!("o valor de x = {}", x); // valor de x 2  
    let x = x + 2;  
    println!("o valor de x = {}", x); // valor de x 4  
    let x = "shadowing";  
    println!("o valor de x = {}", x); // valor de x shadowing  
}
```

Isso é bem legal, mas existe uma diferença entre reutilizar a variável no nosso caso X do que tornar a variável mutável, pois com variáveis mutáveis, você pode mudar o valor dela, mas não o tipo:

```rust
fn main() {  
    let mut x = 1;  
  
    println!("o valor de x: {}", x);  
  
    x = "shadowing";  
  
    println!("o valor de x: {}", x);  
}
```
Recebemos o erro:

Press enter or click to view image in full size

![](https://miro.medium.com/v2/resize:fit:700/1*4TS3KLgAdDiPW3aWEKlhow.png)

## Tipos de dados em Rust

Rust é uma linguagem estaticamente tipada, o que significa que precisa saber todos os tipos de variáveis em tempo de compilação, o compilador Rust é inteligente para saber qual é o tipo de variável X, pois podemos usar `let` sem dizer se é do tipo `string` ou `number` por exemplo, aqui em Rust também podemos usar a API de `parse` para fazer uma mudança dessa se for o caso.

## Inteiro

É um número sem parte fracionária, podemos usar de duas maneiras, declarando que ele é um `i8` ou `u8` o quê isso quer dizer ? que no primeiro caso temos um inteiro com sinal de 8 bits e o segundo caso um número inteiro sem sinal sem sinal, Rust fornece uma tabela de inteiros que podemos usar:

![](https://miro.medium.com/v2/resize:fit:340/1*ImYdCPaMAFrFqgvdvtu06Q.png)

Podemos usar por exemplo `i8` em números negativos, se precisarmos ter algum cálculo com algum número negativo. Além disso, os tipos `isize` e `usize` dependem do computador em que seu programa está rodando: 64 bits se estiver em uma arquitetura de 64-bit e 32 bits se sua arquitetura for 32-bit. Se você não souber qual tipo usar para uma variável do tipo inteiro a própria documentação indica `i32` esse é tipo mais rápido geralmente.

### Ponto flutuante

São números com fração, no caso ele só possui dois tamanhos `f32` e `f64` 32 e 64 bits respectivamente.

### Tipo boolean

Para verdadeiro ou falso, se quisermos podemos deixar explicito o que aquela variável irá receber um boolean:

```rust
fn main() {  
    let t = true;  
  
    let f: bool = false;  
}
```

## Tipo caractere

Recebe apenas uma letra ou o unicode de um caractere, para usar precisamos declarar com aspas simples.

## Tupla

É um valor complexo, geralmente serve para agrupar mais de um valor dentro de uma variável. Podemos criar uma tupla escrevendo uma lista de valores separados por vírgula dentro de parênteses. Cada posição da tupla tem um tipo e os tipos dos elementos da tupla não necessitam serem iguais.

```rust
fn main() {  
    let tuple: (i32, f64, u8) = (-1, 6.4, 1);  
  
    println!("{:?}", tuple);  
}
```

Para quem está acostumado com JavaScript, podemos fazer a desestruturação de uma tupla e nomear elemento, por elemento:

```rust
fn main() {  
    let tuple: (\-1, 6.4, 1);  
    (a, b, c) = tuple  
  
    println!("o valor de a {}", a);  
}
```

Também podemos acessar via indices:

```rust
fn main() {  
    let x: (i32, f64, u8) = (-1, 6.4, 1);  
  
    let menos\_um = x.0;  
  
    let seis\_ponto\_quatro = x.1;  
  
    let um = x.2;  
}
```

## Matriz

Mais conhecido como vetor:

```rust
fn main() {  
    let a = \[1, 2, 3, 4, 5\];  
}
```

Minha maior fonte de aprendizagem está sendo a doc em pt-br 😍 excelente que a comunidade fez e vem fazendo, então deem uma [olhada na doc](https://rust-br.github.io/rust-book-pt-br/title-page.html).

Bem é isso, espero que tenham gostado, lembrem que qualquer informação que deixei passar, ou se quiserem adicionar qualquer coisa me mandem mensagem. Se esse artigo foi útil ficarei feliz. Abraços quentinhos para vocês!!
