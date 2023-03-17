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

  controller.listIngredients = (req, response) => {
    execute('SELECT * FROM ingredientes', response)
  }

  controller.listIngredient = (req, response) => {
    execute(`SELECT * FROM ingredientes WHERE id='${req.query.id}'`, response)
  }

  controller.addIngredient = (req, response) => {
    execute(`INSERT INTO ingredientes (nome, adicional, valor)
      VALUES ('${req.body.nome}', ${req.body.adicional}, ${req.body.valor})`, response)
  }

  controller.deleteIngredient = (req, response) => {
    execute(`DELETE FROM ingredientes WHERE id='${req.query.id}'`, response)
  }

  controller.updateIngredient = (req, response) => {
    execute(`UPDATE ingredientes SET (nome, adicional, valor) =
      ('${req.body.nome}', ${req.body.adicional}, ${req.body.valor})
      WHERE id='${req.body.id}'`, response)
  }

  return controller;
}