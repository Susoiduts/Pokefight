import React from "react";
import { useState, useEffect } from "react";
import Randompokemon from "./PokemonCard";
import fetchPokePicture from "./pokeApi";
// import {useEffectOnce} from "react-use" 

const Pokeinfo = ({setActiveButton}) => {
  
  
  // fetch aus MongoDB-Datenbank
  const [pokedex, setPokedex] = useState({}); //fpr Carousel and Search later
  
  //Stattdessen einen neuen useState "selctedPokemon" als Array mit Objekten [{pokeobject: pokeobject, imgUrl: ""}, {{pokeobject, imgUrl}} ]
  const [pokePicture, setPokePicture] = useState([]);
  const [pokePicture2, setPokePicture2] = useState({});
  const [pokePicture3, setPokePicture3] = useState({});
  const [namePoke, setNamePoke] = useState();
  const [namePoke2, setNamePoke2] = useState();
  const [namePoke3, setNamePoke3] = useState();
  const [pokemonAttack, setPokemonAttack] = useState();
  const [pokemonAttack2, setPokemonAttack2] = useState();
  const [pokemonAttack3, setPokemonAttack3] = useState();
  const [pokemonHealth, setPokemonHealth] = useState();
  const [pokemonHealth2, setPokemonHealth2] = useState();
  const [pokemonHealth3, setPokemonHealth3] = useState();
  const [selectedIndex, setSelectedIndex] = useState(0);
  

  useEffect(() => {
    const fetchData = async () => {
      setActiveButton(false);
      //generate random number
      const zufall = Math.floor(Math.random() * 800);
      const zufall2 = Math.floor(Math.random() * 800);
      const zufall3 = Math.floor(Math.random() * 800);
      
      //fetch mongoDB DataSet
      const response = await fetch(
        "https://pokefight-ox3e.onrender.com/pokemon"
      );
      const data = await response.json();
      
      //save Pokedex locally
      setPokedex(data.map((names) => names.name.english.toLowerCase()));
      
      //save attack and name of randomly selected pokemon locally
      setNamePoke(data[zufall].name.english.toLowerCase());
      setNamePoke2(data[zufall2].name.english.toLowerCase());
      setNamePoke3(data[zufall3].name.english.toLowerCase());
      setPokemonAttack(data[zufall].base.Attack);
      setPokemonAttack2(data[zufall2].base.Attack);
      setPokemonAttack3(data[zufall3].base.Attack);
      setPokemonHealth(data[zufall].base.HP)  
      setPokemonHealth2(data[zufall2].base.HP)  
      setPokemonHealth3(data[zufall3].base.HP)  
       
      const pictureUrl = await fetchPokePicture(
        
        data[zufall].name.english.toLowerCase(),
        data[zufall2].name.english.toLowerCase(),
        data[zufall3].name.english.toLowerCase(),
        );

        setPokePicture(pictureUrl[0]);
        setPokePicture2(pictureUrl[1]);
        setPokePicture3(pictureUrl[2]);
        console.log(pictureUrl)
 
      
    };

    fetchData();
  }, []);


  return (
    <div> 
      <Randompokemon
        key={1}
        namePoke={namePoke}
        individualPokemonAttack={pokemonAttack}
        healthPoke={pokemonHealth}
        pokePicture={pokePicture}
        onClick={() => {
          setSelectedIndex(1)
          setActiveButton(true)}}
          selected={selectedIndex === 1}
          />
      <Randompokemon
        key={2}
        namePoke={namePoke2}
        individualPokemonAttack={pokemonAttack2}
        healthPoke={pokemonHealth2}
        pokePicture={pokePicture2}
        onClick={() => {
          setSelectedIndex(2)
          setActiveButton(true)}}
        selected={selectedIndex === 2}
      />
    </div>
  );
};

export default Pokeinfo;
