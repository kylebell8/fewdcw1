const express = require("express");
const router = express.Router();
const controller = require("../controllers/controllers");

router.get("/", controller.listRecipe);
router.get("/food", controller.listMenu);
router.get("/order", controller.listOrders);
router.post('/addOrder', controller.addOrder);
router.get("/new", controller.newList);
router.get("/recipe",controller.listRecipe);


router.use(function (req, res) {
    res.status(404);
    res.type('text/plain');
    res.send('404 Not found.');
});

router.use(function (err, req, res, next) {
    res.status(500);
    res.type('text/plain');
    res.send('Internal Server Error.');
});

module.exports = router;