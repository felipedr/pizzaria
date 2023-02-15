module.exports = () => {
  const ingredients = require('../data/ingredients.json');
  const controller = {};

  controller.listIngredients = (req, res) => res.status(200).json(ingredients);

  return controller;
}