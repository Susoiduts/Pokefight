const express = require("express");
const router = express.Router();
const { getPokemonList, getPokemon, getPokemonAttribute } = require("../controllers/pokemon");

router.route("/pokemon").get(getPokemonList);

router.route("/pokemon/:id").get(getPokemon);

router.route("/pokemon/:id/:info").get(getPokemonAttribute);
module.exports = router;
