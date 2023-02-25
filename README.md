# Pizzaria

## Dependencias
- [PostgreSQL 14](https://www.postgresql.org/download/)
- [NodeJS v16.17.0](https://www.alura.com.br/artigos/como-instalar-node-js-windows-linux-macos)

## Inicialização do sistema
- Para criar o BD, rode o arquivo `/db/schema.sql` no seu banco de dados.
- No terminal, vá até a pasta do projeto e execute:

```
npm install
```

e finalmente, para inicializar o sistema, execute:

```
npm start
```

## Como criar o CRUD de produto

1 - Dentro da pasta `/routes` crie um novo arquivo para as rotas de produto
2 - Dentro da pasta `/controllers` crie um novo arquivo para o controller de produto
3 - Dentro do novo arquivo na pasta `/routes`, crie as 4 rotas (listagem, criar, update e delete) e
direcione cada uma das rotas para metodos do novo controller de produto criado no passo 2
4 - Dentro do novo controller de produto, crie os 4 metodos chamados pelas novas rotas.

Nota: Tanto o novo arquivo de rotas quanto o novo controller devem ficar parecidos com o que já
fizemos para os ingredientes, mudando apenas os nomes e o controller na rota e os nomes e as queries
no controller
Nota2: Para testar o que está sendo feito, usar o [Postman](https://www.postman.com/downloads/) ou o
[Insomnia](https://insomnia.rest/download)

## BD

<img width="949" alt="Screen Shot 2023-02-07 at 20 56 40" src="https://user-images.githubusercontent.com/9625734/217394083-70003327-c796-4c89-b880-c4aaec0caacd.png">
