module.exports = app => {
  const ingredientsController = app.controllers.ingredients;

  app.route('/api/listar_ingredientes').get(ingredientsController.listIngredients);
  app.route('/api/listar_ingrediente').get(ingredientsController.listIngredient);
  app.route('/api/adicionar_ingrediente').post(ingredientsController.addIngredient);
  app.route('/api/deletar_ingrediente').delete(ingredientsController.deleteIngredient);
  app.route('/api/update_ingrediente').patch(ingredientsController.updateIngredient);
}