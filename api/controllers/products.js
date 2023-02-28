module.exports = app => {
  const controller = {};

  function execute(query, response){
    const client = app.db.client;

    client.query(query).then(res => {
      const rows = res.rows;
      response.status(200).json(rows);
    }).catch(err => {
      response.status(500).json({});
    })
  }

  controller.listProducts = (req, response) => {
    execute('SELECT * FROM produtos', response)
  }

  controller.addProduct = (req, response) => {
    execute(`INSERT INTO produtos (nome, preco, categoria, tamanho)
      VALUES ('${req.body.nome}', ${req.body.preco}, '${req.body.categoria}', '${req.body.tamanho}')`, response)
  }

  controller.deleteProduct = (req, response) => {
    execute(`DELETE FROM produtos WHERE id='${req.query.id}'`, response)
  }

  controller.updateProduct = (req, response) => {
    execute(`UPDATE produtos SET (nome, preco, categoria, tamanho) =
      ('${req.body.nome}', ${req.body.preco}, '${req.body.categoria}', '${req.body.tamanho}')
      WHERE id='${req.body.id}'`, response)
  }

  return controller;
}