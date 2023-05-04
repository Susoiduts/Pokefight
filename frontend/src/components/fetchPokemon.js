// function fetchPokemon(pokemonId) {
//   return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
//     .then((response) => response.json())
//     .then((data) => data);
// }

// async function fetchPokemon(pokemonId) {
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
//     const data = await response.json();
//     return data;
//   }

// export default fetchPokemon;

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
