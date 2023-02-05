import React from 'react'
import { useState, useEffect } from "react";

const ConnectPokeapi = ({ namePoke} ) => {
    const [pokePicture, setPokePicture] = useState() 
    const [pokeAttack, setPokeAttack] = useState() 

    useEffect(() => {
  
        function fetchKantoPokemon(){
          fetch(`https://pokeapi.co/api/v2/pokemon/gengar`)
    
          .then(response => response.json())
          .then(allpokemon => {
            const test=allpokemon
            console.log(`fetch pokeapi ${allpokemon.sprites.front_default}`)
            console.log(test)
            setPokePicture(allpokemon.sprites.front_default)
            setPokeAttack(allpokemon.sprites.front_default)
          })
    
          
        }
    
        
        fetchKantoPokemon()
      },[namePoke]
      )
  
    return (
    pokePicture,
    pokeAttack
    )
  
  
    

}

export default ConnectPokeapi