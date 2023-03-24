# Pizzaria

## Dependencias
- [PostgreSQL 14](https://www.postgresql.org/download/)
- [NodeJS v16.17.0](https://www.alura.com.br/artigos/como-instalar-node-js-windows-linux-macos)

## Inicialização do sistema
- Para criar o BD, rode o arquivo `/db/schema.sql` no seu banco de dados.
- Coloque os dados do seu banco de dados no arquivo `api/db/client.js`
- No terminal, vá até a pasta do projeto e execute:

```
npm install
```

e finalmente, para inicializar o sistema, execute:

```
npm start
```

## Como criar o CRUD de produto

- Dentro da pasta `/routes` crie um novo arquivo para as rotas de produto
- Dentro da pasta `/controllers` crie um novo arquivo para o controller de produto
- Dentro do novo arquivo na pasta `/routes`, crie as 4 rotas (listagem, criar, update e delete) e
direcione cada uma das rotas para metodos do novo controller de produto criado no passo 2
- Dentro do novo controller de produto, crie os 4 metodos chamados pelas novas rotas.

Nota: Tanto o novo arquivo de rotas quanto o novo controller devem ficar parecidos com o que já
fizemos para os ingredientes, mudando apenas os nomes e o controller na rota e os nomes e as queries
no controller
Nota2: Para testar o que está sendo feito, usar o [Postman](https://www.postman.com/downloads/) ou o
[Insomnia](https://insomnia.rest/download)

## BD

![DesenhoBancoPizzariaV1 (1)](https://user-images.githubusercontent.com/9625734/227390565-749768db-ebca-4038-a373-c3d62fd2ecc5.png)

