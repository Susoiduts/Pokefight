import axios from "axios"
const fetchPokePicture = async (name) => {

const apiUrl = `https://pokeapi.co/api/v2/pokemon/${name}`;

  
  let pokePicture;

   await axios.get(apiUrl)
    .then(responses => {
      pokePicture = responses.data.sprites.other.dream_world.front_default;
    })
    .catch(error => {
      console.error('There was a problem with one of the fetch operations:', error);
    });
  
    return pokePicture
  ;
};



export default fetchPokePicture;
