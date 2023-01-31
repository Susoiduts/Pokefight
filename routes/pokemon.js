const express = require("express");
const router = express.Router();
const { getPokemonList, getPokemon, getPokemonAttribute } = require("../controllers/pokemon");

//say Hello
router.route("/pokemon").get(getPokemonList);

//say Hello
router.route("/pokemon/:id").get(getPokemon);

//say Hello
router.route("/pokemon/:id/:info").get(getPokemonAttribute);
module.exports = router;
