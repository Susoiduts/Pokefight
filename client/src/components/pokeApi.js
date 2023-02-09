import axios from "axios"
const fetchPokePicture = async (name, name2, name3) => {


  // console.log(name)
  // console.log(name2)
  // console.log(name3)
const apiUrl1 = `https://pokeapi.co/api/v2/pokemon/${name}`;
const apiUrl2 =  `https://pokeapi.co/api/v2/pokemon/${name2}`;
const apiUrl3 =  `https://pokeapi.co/api/v2/pokemon/${name3}`;
   
  // let pokePicture = [];
  
  const pokePicture = []

  await Promise.all([
    axios.get(apiUrl1),
    axios.get(apiUrl2),
    axios.get(apiUrl3)
  ])
  .then(responses => {
      const [response1, response2, response3] = responses;
      const picture1 = response1.data.sprites.front_default;
      const picture2 = response2.data.sprites.front_default;
      const picture3 = response3.data.sprites.front_default;
      // const combinedData = { picture1, picture2, picture3 };
      pokePicture.push(picture1, picture2, picture3);
      console.log(pokePicture);
    })
    .catch(error => {
      console.error('There was a problem with one of the fetch operations:', error);
    });
    
    // console.log(pokePicture);
  
    return pokePicture
  ;
};



export default fetchPokePicture;
