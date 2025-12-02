---
title: Como trabalhar com duas ssh-key com git
description: Como trabalhar com duas ssh-key no seu computador
date: 2021-10-25
tags: [ssh, git, github]
---

> Quando seu coração está pleno de gratidão, qualquer porta aparentemente fechada pode ser uma abertura para uma bênção maior. **Osho**.

Recentemente tive que adicionar uma segunda ssh key para trabalhar com o git na minha máquina, foi um pouco chatinho de configurar, mas acabei achando um [git gist](https://gist.github.com/jexchan/2351996) que me ajudou e basta você clicar no link para dar uma olhada. Mesmo olhando esse gist ainda tive algumas coisas para fazer na minha máquina para dar certo. Então bora lá !!

Primeiro passo é criarmos nossas duas ssh-key, abra o terminal e digite

```bash
$ ssh-keygen -t rsa -C "seu_email@mail.com"
$ ssh-keygen -t rsa -C "seu_email_de_trabalho@mail.com"
```

Ele ira perguntar onde quer criar a chave, e se pretende dar um overwrite ( diga não para essa opção )

No meu caso ambas as chaves foram criadas na minha área de trabalho então tive que move-las para a pasta onde fica a chave do git que é na pasta .ssh basta digitar no terminal para move-las

```bash
$ mv ~/nome_da_chave/.ssh
```

Depois basta adicionar as duas chaves:

```bash
$ ssh-add ~/.ssh/id_rsa_chave_pessoal
$ ssh-add ~/.ssh/id_rsa_chave_trabalho
```

Verifique se as chaves estão salvas:

```bash
$ ssh-add -l
```

E por último precisamos mudar um arquivo de config se não tiver um crie o arquivo que fica dentro da pasta .ssh

```bash
e vamos por a seguinte configuração neles

#chave do trabalho
Host github.com
	HostName github.com-work
	User git
	IdentityFile ~/.ssh/id_rsa_chave_do_trabalho

#chave-pessoal
Host github.com
	HostName github.com
	User git
	IdentityFile ~/.ssh/id_rsa_chave_pessoal
```

Agora só falta mais uma coisa para você testar para saber se deu certo, percebam que na chave do trabalho eu coloquei essa linha aqui:

```bash
HostName github.com-work
```

Então quando você for baixar um repositório no github usando essa chave você vai precisar fazer uma pequena alteração no host de download, por exemplo:

```bash
git@github.com:repositorio/repositorio.git (chave normal)
git@github.com-work:repositorio/repositorio.git (chave com host de work)
```

Se tudo correu certo, você conseguirá usar as duas chaves em um único computador. É isso aí meu povo, espero que tenham gostado, qualquer dúvida, feedback ou sugestão é só mandar por aqui, que ficarei feliz.

Bem é isso, espero que tenham gostado, lembrem que qualquer informação que deixei passar, ou se quiserem adicionar qualquer coisa me mandem mensagem. Se esse artigo foi útil ficarei feliz. Abraços quentinhos para vocês!!
