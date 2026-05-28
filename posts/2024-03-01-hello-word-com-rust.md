---
title: "Primeiro programa com Rust"
description: "Meu primeiro programa feito com rust"
date: 2024-03-01
tags: []
---

> O mundo é grande e cabe nesta janela sobre o mar. O mar é grande e cabe na cama e no colchão de amar. O amor é grande e cabe no breve espaço de beijar. Carlos Drummond de Andrade.

![](https://miro.medium.com/v2/resize:fit:700/1*6EcKGIJFOXeYxJtZAVeeCw.png)

Estou compartilhando um pouco de conhecimento, pois estava um tempo sem escrever e um pouco desmotivado para tal, mas o Rust me fez voltar a escrever e compartilhar meus conhecimentos com a linguagem, se você não viu meu primeiro post sobre porquê escolhi Rust [leia aqui](https://medium.com/@mayconbalves/meu-caminho-para-aprender-rust-f1b9638a6196).

Bom ainda sou noob na linguagem, mas vou mostrar o que estou aprendendo de pouco em pouco para você poder aprender junto, e se possível me ensinar um pouco também !!

Para instalar o Rust na sua máquina é bem simples, e a forma recomendada pela documentação é através do `rustup` basta rodar o comando se você usa mac, linux, linux subsistema ou se usa o chocolatey no windows:

```shell
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

Também é possível instalar ele via executável se está no Windows nessa [url aqui](https://www.rust-lang.org/pt-BR/tools/install).

Após estar instalado você tem 3 ferramentas disponíveis, o `rustc` , `rustup` e `cargo` todos são instalados no path ~/.cargo/bin mas pode existir diferenças no local de instalação entre os SO. Para saber se o seu Rust está instalado direitinho, basta rodar o rustc — version se mostrar a versão do Rust parabéns já tem ele na máquina.

Além do `rustc` (compilador nativo do Rust) o `cargo` (parecido com npm do node)é uma ferramenta para podermos compilar nossos projetos e afins, a grande diferença entre os dois é que o `rustc` é recomendado apenas para coisas pequenas, talvez alguns algoritmos ou ter uma maior intimidade com a linguagem, para projetos maiores o `cargo` é indicado, pois ele cria projetos novos, gera build, aponta erros no console, você pode criar `crates` (é o sistema de libs, é bem parecido com o npm do node), já gera um `git init`, por isso vou iniciar meus projetos sempre usando o `cargo.`

Pensando nisso, bora iniciar um projeto novo para o nosso hello\_world usando `cargo.`

```shell
cargo new nome\_do\_projeto
```

Simples não ? ele gera uma pequena arquitetura:

![](https://miro.medium.com/v2/resize:fit:499/1*J5rNwBLQJnKiWWb0KX08Ng.png)

Nesse artigo só vou deixar de lado a pasta `target` mas de resto vou comentar sobre todos os arquivos, começando pelo gitignore, como disse ele gera um projeto git para nós, então por padrão ele ignora a pasta `target.`

O arquivo `Cargo.lock` é bem semelhante ao `package.lock` do node ele gera as informações as dependências instalados no projeto, elas não são atualizadas manualmente.

O `Cargo.toml` trata-se de descrever suas dependências em um sentido amplo e foi escrito por você. Também ficam coisas relacionadas ao seu projeto, como nome, versão e afins.

Já dentro da pasta `src` a princípio temos apenas o `main.rs` que é o arquivo principal da nossa aplicação, dentro dele temos só uma função `main` que mostra um hello world no console.

```rust
fn main() {
    println!("Hello, world!");
}
```

Para ver ele funcionando basta entrar na pasta `src` e rodar o comando cargo run. Pronto temos nosso primeiro programa em Rust funcionando. Bem é isso, espero que tenham gostado, sei que ainda é muito raso, mas a ideia é essa mesmo, irmos de step por step, para entendermos os conceitos de forma calma, mas profundamente cada aspecto da linguagem.

Bem é isso, espero que tenham gostado, lembrem que qualquer informação que deixei passar, ou se quiserem adicionar qualquer coisa me mandem mensagem. Se esse artigo foi útil ficarei feliz. Abraços quentinhos para vocês!!
