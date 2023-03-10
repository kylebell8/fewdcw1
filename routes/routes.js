const express = require("express");
const router = express.Router();
const controller = require("../controllers/controllers");

router.get("/", controller.recipelist);
router.get("/food", controller.listMenu);
router.get("/recipes", controller.recipes);
router.get("/recipe",controller.recipelist);


router.use(function (req, res) {
    res.status(404);
    res.type('text/plain');
    res.send('404 Error page is not found.');
});

router.use(function (err, req, res, next) {
    res.status(500);
    res.type('text/plain');
    res.send('Internal Server Error.');
});

module.exports = router;