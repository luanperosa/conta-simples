## Conta Facil

![WhatsApp Image 2019-11-13 at 21 56 46](https://user-images.githubusercontent.com/50602816/69119433-58790900-0a75-11ea-8744-7850766845f1.jpeg)

Desafio: criar uma interface parecida com a da imagem acima, e nos cards abaixo listar as informações descricaoAbreviada, valorBRL e cartaoMascarado. Utilizar uma API para se conectar e receber essas informaçes. 

O desafio foi completado utilizando uma API fake, mas o teste pode ser realizado perfeitamente utilizando a URL da Conta Facil que foi passada no Workshop. Para realizar o teste tanto com a API da Conta Facil ou com a fake API é necessario seguir os seguintes passos: 

1º passo: Clonar esse repositorio na sua maquina, no terminal executar o comando `npm i`.

2º passo: Adicionar um arquivo `.env` na raiz do projeto. Incluir duas variaveis de ambiente nesse arquivo, o `REACT_APP_API_URI` e o `REACT_APP_TOKEN`. Coforme o nome de cada variavel sugere deve adicionar o endereço da API da Conta Facil na variavel REACT_APP_API_URI e na variavel REACT_APP_TOKEN informar uma token gerada pela Conta Facil conforme foi gerado no momento do Workshop.

3º passo: No terminal executar o comando `npm start` e testar o projeto!
