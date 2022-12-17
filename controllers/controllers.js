const menuDAO = require("../models/menuModel");
const menu = new menuDAO({ filename: "menu.db", autoload: true });
const orderDAO = require("../models/ordersModel");
const order = new orderDAO({ filename: "orders.db", autoload: true });
const recipeDAO = require("../models/recipeModel");
const recipe = new recipeDAO({ filename: "recipe.db", autoload: true });


exports.newList = function (req, res) {
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
exports.listRecipe = function (req, res) {
  recipe.getAllEntries()
    .then((list) => {
      res.json(list);
      console.log(list);
    })
    .catch((err) => {
      console.log("promise rejected", err);
    });
};
exports.listOrders = function (req, res) {
  order.getAllEntries()
    .then((list) => {
      res.json(list);
      console.log(list);
    })
    .catch((err) => {
      console.log("promise rejected", err);
    });
};
exports.addOrder = function (req, res) {
  console.log("req body to add to database : ", req.body);
  order.addEntry(req.body).catch((err) => {
    console.log("promise rejected", err);
  });
  res.redirect("/");
};