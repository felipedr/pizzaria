module.exports = app => {
  const controller = require('../controllers/ingredients')();

  app.route('/api/ingredients').get(controller.listIngredients);
}