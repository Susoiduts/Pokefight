const express = require("express");
const router = express.Router();
const { sayHello } = require("../controllers/standard");

//say Hello
router.route("/").get(sayHello);

module.exports = router;
