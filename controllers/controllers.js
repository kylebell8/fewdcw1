const recipeDAO = require("../models/recipeDB");
const recipe = new recipeDAO({ filename: "recipe.db", autoload: true });


exports.recipes = function (req, res) {
  recipe.init();
  res.redirect("/");
};

exports.listMenu = function (req, res) {
  menu.getAllEntries()
    .then((list) => {
      res.json(list);
      console.log(list);
    })
    .catch((err) => {
      console.log("promise rejected", err);
    });
};
exports.recipelist = function (req, res) {
  recipe.getAllEntries()
    .then((list) => {
      res.json(list);
      console.log(list);
    })
    .catch((err) => {
      console.log("promise rejected", err);
    });
};