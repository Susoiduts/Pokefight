const pokedex = require("../pokedex.json");

const getPokemonList = (req, res) => {
  res.status(200).sendFile("./pokedex.json", { root: "./" });
};

const getPokemon = (req, res) => {

  const pokemon= pokedex.find((pokemon) => pokemon.id === parseInt(req.params.id));
  if (!pokemon) {
    res.status(404).send("Pokemon not found");
  }
  res.status(200).send(pokemon);
};

const getPokemonAttribute = (req, res) => {
  const pokemon= pokedex.find((pokemon) => pokemon.id === parseInt(req.params.id));
  if (!pokemon) {
    res.status(404).send("Pokemon not found");
  }
  const attribute = pokemon[req.params.info];
  if (!attribute) {
    res.status(404).send("Attribute not found");
  }
  res.status(200).send(attribute);
};

module.exports = {
  getPokemonList, getPokemon, getPokemonAttribute,
};
