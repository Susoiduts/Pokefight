import axios from "axios";
const fetchPokemon = async (pokemonId) => {
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;

  let pokedata;

  await axios
    .get(apiUrl)
    .then((responses) => {
      pokedata = responses.data;
    })
    .catch((error) => {
      console.error(
        "There was a problem with one of the fetch operations:",
        error
      );
    });

  return pokedata;
};

export default fetchPokemon;
