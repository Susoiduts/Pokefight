import React from 'react'
import { useState, useEffect } from "react";
import Randompokemon from './randompokemons/Randompokemon';
import TestPoke from './randompokemons/TestPoke';
import RandomFetch from './randompokemons/RandomFetchPokeapi';
// import Zufallgen from './randompokemons/Zufallgen';

const Pokeinfo = ({ zufallgen }) => {

  
  // fetch aus MongoDB-Datenbank
  const [data, setData] = useState({});
  const [individualPokemon, setIndividualPokemon] = useState()
  const [individualPokemonAttack, setIndividualPokemonAttack ] = useState() 
  const zufall = zufallgen
  
  
  useEffect(  () => {
    fetch("https://pokefight-ox3e.onrender.com/pokemon")
    .then((response) => response.json())
    .then((data) => {
      console.log(data); 
      setData(data.map((names) => names.name.english.toLowerCase() ));
      setIndividualPokemon(data[zufall].name.english.toLowerCase())
      setIndividualPokemonAttack(data[zufall].base.Attack)
    })
    
  }
  , [zufall]);
  console.log(`individualPokemon ${individualPokemon}`)
  
  // Bestimmt einen zufälligen Pokemon
  const namePoke = data[zufall]
  const pokePicture = RandomFetch(individualPokemon)[0]
  const pokeAttack = RandomFetch(individualPokemon)[1]

  
   return (

    <div>
    {/* Lädt zwei Pokemon Cards  */}
    <Randompokemon namePoke={namePoke} individualPokemonAttack={individualPokemonAttack} pokeAttack={pokeAttack} pokePicture={pokePicture} zufall={zufall}/>
    <Randompokemon namePoke={namePoke} pokeAttack={pokeAttack} pokePicture={pokePicture} zufall={zufall}/>
    </div>

    
  )
}

export default Pokeinfo