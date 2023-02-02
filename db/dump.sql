create database pizzaria;
use pizzaria;

create table usuarios(
	id INTEGER PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(100) NOT NULL,
	email VARCHAR(100) NOT NULL,
	senha VARCHAR(100) NOT NULL,
	telefone VARCHAR(20) NOT NULL,
	tipo INTEGER NOT NULL,
);

create table enderecos(
	id INTEGER PRIMARY KEY AUTO_INCREMENT,
	rua VARCHAR(100) NOT NULL,
	numero VARCHAR(10) NOT NULL,
	complemento VARCHAR(50),
	bairro VARCHAR(100) NOT NULL,
	cidade VARCHAR(100) NOT NULL,
	cep CHAR(9) NOT NULL,
	apelido VARCHAR(100),
	usuario_id INTEGER NOT NULL,
	CONSTRAINT fk_endereco_usuario FOREIGN KEY (usuario_id) REFERENCES usuarios (id)
);

create table ingredientes(
	id INTEGER PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50) NOT NULL,
	adicional BOOLEAN NOT NULL,
	valor DECIMAL NOT NULL
);

create table sabores(
	id INTEGER PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50) NOT NULL,
	ingrediente_id INTEGER NOT NULL,
	CONSTRAINT fk_sabores_ingredientes FOREIGN KEY (IdIngredientesSabores) REFERENCES ingredientes (IdIngredientes)
);

create table produto(
	IdProduto INTEGER PRIMARY KEY AUTO_INCREMENT,
	Nome VARCHAR(30) NOT NULL,
	Preco DECIMAL NOT NULL,
	Categoria VARCHAR(30) NOT NULL,
	Tamanho VARCHAR(15) NOT NULL,
	IdSaboresProduto INTEGER NOT NULL,
	CONSTRAINT fk_produto_sabores FOREIGN KEY (IdSaboresProduto) REFERENCES sabores (IdSabores)
);

create table pedido(
	IdPedido INTEGER PRIMARY KEY AUTO_INCREMENT,
	ValorTotal DECIMAL NOT NULL,
	Observacao VARCHAR(50) NULL,
	StatusPedido Varchar(50) NOT NULL,
	FormaDePagamento VARCHAR(30) NOT NULL,
	IdUsuarioPedido INTEGER NOT NULL,
	IdEnderecoPedido INTEGER NOT NULL,
	IdProdutoPedido INTEGER NOT NULL,
	IdSaboresPedido INTEGER NOT NULL,
	IdIngredientesPedido INTEGER NOT NULL,
	CONSTRAINT fk_pedido_usuario FOREIGN KEY (IdUsuarioPedido) REFERENCES usuario (IdUsuario),
	CONSTRAINT fk_pedido_endereco FOREIGN KEY (IdEnderecoPedido) REFERENCES endereco (IdEndereco),
	CONSTRAINT fk_pedido_produto FOREIGN KEY (IdProdutoPedido) REFERENCES produto (IdProduto),
	CONSTRAINT fk_pedido_sabores FOREIGN KEY (IdSaboresPedido) REFERENCES sabores (IdSabores),
	CONSTRAINT fk_pedido_ingredientes FOREIGN KEY (IdIngredientesPedido) REFERENCES ingredientes (IdIngredientes)
);

create table pedidoproduto(
	IdPedidoProduto INTEGER PRIMARY KEY AUTO_INCREMENT,
	ValorUnitario DECIMAL NOT NULL,
	Quantidade VARCHAR(2) NOT NULL,
	IdPedidoProdutoProduto INTEGER NOT NULL,
	IdPedidoProdutoPedido INTEGER NOT NULL,
	CONSTRAINT fk_pedidoproduto_produto FOREIGN KEY (IdPedidoProdutoProduto) REFERENCES produto (IdProduto),
	CONSTRAINT fk_pedidoproduto_pedido FOREIGN KEY (IdPedidoProdutoPedido) REFERENCES pedido (IdPedido)
);
