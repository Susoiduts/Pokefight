import React from "react";
import { useState, useEffect } from "react";
import Randompokemon from "./PokemonCard";
import fetchPokePicture from "./pokeApi";

// import {useEffectOnce} from "react-use" 

const Pokeinfo = ({selectedIndex, setActiveButton, setHealthPoints, setSelectedIndex, setSelectedPokemon, selectedPokemon}) => {
    
  // fetch aus MongoDB-Datenbank
  const [pokedex, setPokedex] = useState({}); //für Carousel and Search later


 
  
  useEffect(() => {
    const fetchData = async () => {
      setActiveButton(false);
      //generate random number
      //for loop; zufallszahl wird generiert + ein pokedexobjekt in useState array

      //fetch mongoDB DataSet
      const response = await fetch(
        "https://pokefight-ox3e.onrender.com/pokemon"
      );
      const data = await response.json();
      
      //create an Array with containing 3 Pokemon with corresponding picture links
      let uniqueNumbers = [];
      let pokeArray=[];
      for (let i = 0; i < 3; i++) {
        let randomNumber = Math.floor(Math.random() * 800);
        while (uniqueNumbers.includes(randomNumber)) {
          randomNumber = Math.floor(Math.random() * 800);
        } 
      uniqueNumbers.push(randomNumber);
      const pictureUrl = await fetchPokePicture(data[randomNumber].name.english.toLowerCase());
      const pokeObject = {attributes: data[randomNumber], picture: pictureUrl }
      pokeArray.push(pokeObject)
      }
      setSelectedPokemon(pokeArray)
      
      //save Pokedex locally
      setPokedex(data.map((names) => names.name.english.toLowerCase()));

      //setHealtPoints for enemy
      setHealthPoints([(pokeArray[2].attributes.base.HP),100])
    
    }
    fetchData();
  }, []);
  
  return (
    
    <div> 
      {selectedPokemon[0] ? (
      <>
      <Randompokemon
        key={1}
        namePoke={selectedPokemon[0].attributes.name.english}
        individualPokemonAttack={selectedPokemon[0].attributes.base.attack}
        healthPoke={selectedPokemon[0].attributes.base.HP}
        pokePicture={selectedPokemon[0].picture}
        onClick={() => {
          setSelectedIndex(1);
          setActiveButton(true);
          setHealthPoints([(100, selectedPokemon[0].attributes.base.HP)])}}
          selected={selectedIndex === 1}
       />
          
          <Randompokemon
        key={2}
        namePoke={selectedPokemon[1].attributes.name.english}
        individualPokemonAttack={selectedPokemon[1].attributes.base.attack}
        healthPoke={selectedPokemon[1].attributes.base.HP}
        pokePicture={selectedPokemon[1].picture}
        onClick={() => {
          setSelectedIndex(2);
          setActiveButton(true);
          setHealthPoints([(100, selectedPokemon[1].attributes.base.HP)])}}
        selected={selectedIndex === 2}
        />
      </>
        )
           : "loading"}
    </div>
  );
};

export default Pokeinfo;