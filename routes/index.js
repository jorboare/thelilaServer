var express = require("express");
var router = express.Router();
const service = require("../services/Services");
const { foodFormatter, drinkFormatter } = require("../utils/res-formatter");

/* GET home page. */
router.get("/", async function (req, res, next) {
  res.json({ message: "Server Working" });
});

router.get("/food", async function (req, res, next) {
  const food = await service.getFood();
  const formattedFood = await foodFormatter(food);
  res.json({ food: formattedFood });
});

router.get("/drinks", async function (req, res, next) {
  const drink = await service.getDrinks();
  const formattedDrink = await drinkFormatter(drink);
  res.json({ drinks: formattedDrink });
});

module.exports = router;
