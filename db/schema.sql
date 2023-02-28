create database pizzaria;

create table usuarios(
	id SERIAL PRIMARY KEY,
	nome VARCHAR(100) NOT NULL,
	cpf VARCHAR(11) UNIQUE NOT NULL,
	email VARCHAR(100) UNIQUE NOT NULL,
	senha VARCHAR(100) NOT NULL,
	telefone VARCHAR(20) NOT NULL,
	tipo INTEGER NOT NULL
);

create table enderecos(
	id SERIAL PRIMARY KEY,
	rua VARCHAR(100) NOT NULL,
	numero VARCHAR(10) NOT NULL,
	complemento VARCHAR(50),
	bairro VARCHAR(100) NOT NULL,
	cidade VARCHAR(100) NOT NULL,
	cep VARCHAR(8) NOT NULL,
	apelido VARCHAR(100),
	usuario_id INTEGER NOT NULL,
	CONSTRAINT fk_endereco_usuario FOREIGN KEY (usuario_id) REFERENCES usuarios (id)
);

create table ingredientes(
	id SERIAL PRIMARY KEY,
	nome VARCHAR(50) NOT NULL,
	adicional BOOLEAN NOT NULL,
	valor DECIMAL NOT NULL
);

create table produtos_ingredientes(
	id SERIAL PRIMARY KEY,
	produto_id INTEGER NOT NULL,
	ingrediente_id INTEGER NOT NULL
);

create table ingredientes_adicionais(
	id SERIAL PRIMARY KEY,
	pedido_produto_id INTEGER NOT NULL,
	ingrediente_id INTEGER NOT NULL
);

create table produtos(
	id SERIAL PRIMARY KEY,
	nome VARCHAR(50) NOT NULL,
	preco DECIMAL NOT NULL,
	categoria VARCHAR(30) NOT NULL,
	tamanho VARCHAR(15) NOT NULL
);

create table pedidos(
	id SERIAL PRIMARY KEY,
	valor_total DECIMAL NOT NULL,
	observacao VARCHAR(50),
	status_pedido INTEGER NOT NULL,
	forma_de_pagamento INTEGER NOT NULL,
	endereco_id INTEGER NOT NULL,
	pedido_produto_id INTEGER NOT NULL
);

create table pedidos_produtos(
	id SERIAL PRIMARY KEY,
	valor_unitario DECIMAL NOT NULL,
	quantidade VARCHAR(2) NOT NULL,
	produto_1_id INTEGER NOT NULL,
	produto_2_id INTEGER NOT NULL,
	pedido_id INTEGER NOT NULL
);

ALTER TABLE pedidos ADD CONSTRAINT fk_pedido_endereco FOREIGN KEY (endereco_id) REFERENCES enderecos (id);
ALTER TABLE pedidos_produtos ADD CONSTRAINT fk_pedido_produto_1 FOREIGN KEY (produto_1_id) REFERENCES produtos (id);
ALTER TABLE pedidos_produtos ADD CONSTRAINT fk_pedido_produto_2 FOREIGN KEY (produto_2_id) REFERENCES produtos (id);
ALTER TABLE pedidos_produtos ADD CONSTRAINT fk_pedido_pedido_produto FOREIGN KEY (pedido_id) REFERENCES pedidos (id);
ALTER TABLE ingredientes_adicionais ADD CONSTRAINT fk_ingredientes_adicionais_pedido_produto FOREIGN KEY (pedido_produto_id) REFERENCES pedidos_produtos (id);
ALTER TABLE ingredientes_adicionais ADD	CONSTRAINT fk_ingredientes_adicionais_ingrediente FOREIGN KEY (ingrediente_id) REFERENCES ingredientes (id);
ALTER TABLE produtos_ingredientes ADD CONSTRAINT fk_produto_ingrediente_produto FOREIGN KEY (produto_id) REFERENCES produtos (id);
ALTER TABLE produtos_ingredientes ADD CONSTRAINT fk_produto_ingrediente_ingrediente FOREIGN KEY (ingrediente_id) REFERENCES ingredientes (id);
