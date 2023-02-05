import React from 'react'
import { useState, useEffect } from "react";

const RandomFetch = (name) => {
  
  console.log(name)
  const [pokePicture, setPokePicture] = useState() 
  const [pokeAttack, setPokeAttack] = useState() 

  useEffect(() => {
  
    function fetchKantoPokemon(){
      // fetch(`https://pokeapi.co/api/v2/pokemon/${namePoke}`)
      fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)

      .then(response => response.json())
      .then(allpokemon => {
        const test=allpokemon
        // console.log(`fetch pokeapi ${allpokemon.sprites.front_default}`)
        // console.log(test)
        setPokePicture(allpokemon.sprites.front_default)
        setPokeAttack(allpokemon.sprites.front_default)
      })

      
    }

    
    fetchKantoPokemon()
  },[name]
  )
  
    return [pokeAttack, pokePicture]
    
  
}

export default RandomFetch
 