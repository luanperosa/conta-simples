## Conta Simples

![conta-facil](https://user-images.githubusercontent.com/50602816/69119573-d4735100-0a75-11ea-83d4-7158b45b64b4.gif)

Desafio: criar uma interface parecida com a da imagem acima, nos cards abaixo listar as informações <strong>descricaoAbreviada, valorBRL e cartaoMascarado.</strong> Utilizar uma API para se conectar e receber essas informações. 

O desafio foi completado utilizando uma API fake, mas o teste pode ser realizado perfeitamente utilizando a URL da Conta Facil que foi passada no Workshop. Para realizar o teste tanto com a API da Conta Facil é necessario seguir os seguintes passos: 

<h1>Testando o projeto</h1>

1º passo: Clonar esse repositorio na sua maquina, no terminal executar o comando `npm i`.

2º passo: Adicionar um arquivo `.env` na raiz do projeto. Incluir duas variaveis de ambiente nesse arquivo, o `REACT_APP_API_URI` e o `REACT_APP_TOKEN`. Coforme o nome de cada variavel sugere deve adicionar o endereço da API da Conta Facil na variavel REACT_APP_API_URI e na variavel REACT_APP_TOKEN informar uma token gerada pela Conta Facil conforme foi gerado no momento do Workshop.

3º passo: No terminal executar o comando `npm start` e testar o projeto!

<h2>Testando com a fake API</h2>

No terminal acesse a pasta src e execute o comanto `json-server --watch db-fakeAPI.json --port 8000`, nas variaveis de ambiente deve adicionar `REACT_APP_API_URI = http://localhost:8000/content`. Agora é só executar o comando `npm start` na pasta raiz do projeto!
