import React from "react";
import { useState, useEffect } from "react";
import Randompokemon from "./PokemonCard";
import fetchPokePicture from "./pokeApi";
import axios from "axios"

const Pokeinfo = () => {
  // fetch aus MongoDB-Datenbank
  const [pokedex, setPokedex] = useState({});
  const [pokemonAttack, setPokemonAttack] = useState();
  // mit Pokedex verbinden
  const [pokeAttack, setPokeAttack] = useState(78);
  const [pokePicture, setPokePicture] = useState();
  const [namePoke, setNamePoke] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://pokefight-ox3e.onrender.com/pokemon");
      const data = await response.json();

        //save Pokedex locally
        setPokedex(data.map((names) => names.name.english.toLowerCase()));
        //generate random number
        const zufall = Math.floor(Math.random() * 800);
        
        //save attack and name of randomly selected pokemon locally
        setPokemonAttack(data[zufall].base.Attack);
        setNamePoke(data[zufall].name.english);
        //fetch picture of randomely selected pokemon and save locally
        const pictureUrl= await fetchPokePicture(data[zufall].name.english.toLowerCase())
        setPokePicture(pictureUrl);
      };
    
    fetchData();
  
    }, []);

  


  return (
    <div>
      {/* Lädt zwei Pokemon Cards  */}
      {/* {pokePicture ? (
        <Randompokemon
          namePoke={namePoke}
          individualPokemonAttack={individualPokemonAttack}
          pokeAttack={pokeAttack}
          pokePicture={pokePicture}
        />
      ) : (
        <Randompokemon
          namePoke={namePoke}
          individualPokemonAttack={individualPokemonAttack}
          pokeAttack={pokeAttack}
        />
      )} */}

      <Randompokemon
        namePoke={namePoke}
        individualPokemonAttack={pokemonAttack}
        pokeAttack={pokeAttack}
        pokePicture={pokePicture}
      />
      <Randompokemon
        namePoke={namePoke}
        pokeAttack={pokeAttack}
        individualPokemonAttack={pokemonAttack}
        pokePicture={pokePicture}
      />
    </div>
  );
};

export default Pokeinfo;
