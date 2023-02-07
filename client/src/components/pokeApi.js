const fetchPokePicture = async (name) => {
  let pokePicture;
  await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((response) => response.json())
    .then((allpokemon) => {
    pokePicture = allpokemon.sprites.front_default;
    
    
    });
    // console.log(pokePicture)

    return pokePicture
  ;
};



export default fetchPokePicture;
