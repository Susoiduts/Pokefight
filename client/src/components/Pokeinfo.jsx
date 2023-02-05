import React from 'react'
import { useState, useEffect } from "react";
import Randompokemon from './randompokemons/Randompokemon';

const Pokeinfo = ({zufallgen}) => {
  
  const [data, setData] = useState({});
  const [individualPokemon, setIndividualPokemon] = useState()
  const zufall = zufallgen
  
  
  useEffect(  () => {
    fetch("https://pokefight-ox3e.onrender.com/pokemon")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data.map((names) => names.name.english.toLowerCase() ));
        // test4.push(data.map((names) => names.name.english.toLowerCase() ));
        setIndividualPokemon(data)
      })
      
    }
    , [zufall]);
   console.log(individualPokemon)
   const datalenght = data.length
   console.log({zufall})
   const namePoke = data[zufall]
  
  const [pokePicture, setPokePicture] = useState() 
  const [pokeAttack, setPokeAttack] = useState() 

  useEffect(() => {
  
    function fetchKantoPokemon(){
      fetch(`https://pokeapi.co/api/v2/pokemon/${namePoke}`)

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

//  const upperCase = (namePoke[0].toUpperCase()+ namePoke.substring(1))
 console.log(pokePicture)
  return (
    <>
    <div className='card'>
      <h1>Pokemon 1</h1> 
    
    
    {/* <h2>{upperCase}</h2> */}
    {/* <h1>{namePoke[0].toUpperCase() + namePoke.substring(1)}</h1> */}
    <h1>{namePoke}</h1>
    <h2>{pokeAttack}</h2>
    <img src={pokePicture} alt="" />
    <div className="abilities">
        <div className="group">
            <h2>{zufall}</h2>
        </div> 
    </div>
    <div className="base-stat">

    </div>
    <Randompokemon namePoke={namePoke} pokeAttack={pokeAttack} pokePicture={pokePicture} zufall={zufall}/>
    </div>

    </>
  )
}

export default Pokeinfo