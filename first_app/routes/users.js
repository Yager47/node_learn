var express = require("express");
var router = express.Router();

// GET books
router.get('/', function (req, res) {
  res.render('users', { title: "Users" });
});

module.exports = router;