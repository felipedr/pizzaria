module.exports = app => {
  const controller = {};

  controller.listIngredients = (req, response) => {
    const client = app.db.client;

    const query = 'SELECT * FROM ingredientes'

    client.query(query).then(res => {
      const rows = res.rows;
      response.status(200).json(rows);
    }).catch(err => {
      response.status(500).json({});
    })
  }

  controller.addIngredient = (req, response) => {
    const client = app.db.client;

    const query = `INSERT INTO ingredientes (nome, adicional, valor)
      VALUES ('${req.body.nome}', ${req.body.adicional}, ${req.body.valor})`

    client.query(query).then(res => {
      response.status(200).json({});
    }).catch(err => {
      response.status(500).json({});
    })
  }

  controller.deleteIngredient = (req, response) => {
    const client = app.db.client;

    const query = `DELETE FROM ingredientes WHERE id='${req.query.id}'`

    client.query(query).then(res => {
      response.status(200).json({});
    }).catch(err => {
      response.status(500).json({});
    })
  }

  controller.updateIngredient = (req, response) => {
    const client = app.db.client;

    const query = `UPDATE ingredientes SET (nome, adicional, valor) =
      ('${req.body.nome}', ${req.body.adicional}, ${req.body.valor})
      WHERE id='${req.body.id}'`

    client.query(query).then(res => {
      response.status(200).json({});
    }).catch(err => {
      response.status(500).json({});
    })
  }

  return controller;
}