---
title: "React: Criando um componente que transforma Json para Csv"
description: "Monstros são reais e fantasmas são reais também. Vivem dentro de nós e, às vezes, vencem. [Stephen King](https://www.pensador.com/autor/stephen_king/)"
date: 2024-08-19
tags: [front-end-development, react, csv, javascript, json-to-csv]
---

Monstros são reais e fantasmas são reais também. Vivem dentro de nós e, às vezes, vencem. [Stephen King](https://www.pensador.com/autor/stephen_king/).

![](https://cdn-images-1.medium.com/max/1024/1*YSA3_a5e8g_H4OZ3fHKnow.png)

Recentemente tive que implementar uma feature onde era necessário transformar dados que vinham de uma API (json) para csv, eu vi uma boa lib para fazer isso, [react-csv](https://www.npmjs.com/package/react-csv), é uma lib que resolveu o problema, porém quando fui dar uma olhada no github dessa lib, vi que o último commit foi há mais de 2 anos, isso me preocupou um pouco, além disso, tem mais de 100 issues abertas.

Tendo isso em mente resolvi dar uma estudada na lib e percebi que poderia implementar na mão e de forma optimizada, além de que se acontecer algum bug eu mesmo posso resolver o problema em algumas horas.

Dito isso, bora para a implementação que é bem tranquila de ser feita:

import React from "react";  
  
const ExportCSV = ({ data, fileName, children, headers }) => {  
  const downloadCSV = () => {  
    const csvString = \[  
      headers,  
      ...data.map((item) =>  
        headers.map((header) => {  
          const value = item\[header\];  
          return typeof value === "string" && value.includes(",")  
            ? \`"${value}"\`  
            : value;  
        })  
      ),  
    \]  
      .map((row) => row.join(","))  
      .join("\\n");  
    const blob = new Blob(\[csvString\], { type: "text/csv" });  
    const url = URL.createObjectURL(blob);  
    const link = document.createElement("a");  
  
    link.href = url;  
    link.download = fileName || "download.csv";  
    document.body.appendChild(link);  
    link.click();  
    document.body.removeChild(link);  
    URL.revokeObjectURL(url);  
  };  
  
  return (  
    <button onClick={downloadCSV}>  
      {children}  
    </button>  
  );  
};  
  
export default ExportCSV;

Vamos para algumas explicações dentro da função downloadCSV recebemos os headers da tabela, também usamos o data que recebe o json a ser convertido e distribuído por cada coluna.

Tive que adicionar esse trecho de código, pois estava gerando um bug quando recebia um valor número que incluia uma vírgula, por exemplo, R$ 10.544,53.

return typeof value === "string" && value.includes(",")  
  ? \`"${value}"\`  
  : value;

Esse bug acontecia, pois eu precisava usar o método join para remover as vírgulas e por em cada casa dentro do arquivo csv. Também usei a API nativa [Blob](https://developer.mozilla.org/pt-BR/docs/Web/API/Blob) para transformar o meu json para csv.

No fim retorno um componente react que recebe quatro propriedades, data: dados da API, headers: cabeçalho do csv, filename: nome do arquivo que tu vai querer usar, children: podendo colocar um componente aqui ou uma simples string.

Para usar esse componente é bem simples:

 <CsvButton data={data} fileName="file-name.csv" headers={headers}>  
   <>Export data</>  
 </CsvButton>

Bem é isso, espero que tenham gostado e se ajudar deixe compartilhe esse post com mais alguém, e se tem algo para melhorar qualquer feedback é muito bem-vindo, obrigado.

![](https://medium.com/_/stat?event=post.clientViewed&referrerSource=full_rss&postId=e2e480abc855)
