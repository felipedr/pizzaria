module.exports = app => {
  const productsController = app.controllers.products;

  app.route('/api/listar_produtos').get(productsController.listProducts);
  app.route('/api/listar_produto').get(productsController.listProduct);
  app.route('/api/adicionar_produto').post(productsController.addProduct);
  app.route('/api/deletar_produto').delete(productsController.deleteProduct);
  app.route('/api/update_produto').patch(productsController.updateProduct);
  }