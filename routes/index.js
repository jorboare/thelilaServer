var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.json({ message: "Server working" });
});

router.get("/test", function (req, res, next) {
  res.json({ message: "Testing cors" });
});

module.exports = router;
