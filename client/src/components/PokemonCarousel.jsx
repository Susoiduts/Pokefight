import React from "react";
import { useState, useEffect } from "react";
import Randompokemon from "./PokemonCard";
import fetchPokePicture from "./pokeApi";

const Pokeinfo = () => {
  // fetch aus MongoDB-Datenbank
  const [data, setData] = useState({});
  const [individualPokemon, setIndividualPokemon] = useState();
  const [individualPokemonAttack, setIndividualPokemonAttack] = useState();
  // mit Pokedex verbinden
  const [pokeAttack, setPokeAttack] = useState(78);
  const [pokePicture, setPokePicture] = useState();
  const [namePoke, setNamePoke] = useState();

  useEffect(() => {
    fetch("https://pokefight-ox3e.onrender.com/pokemon")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const zufall = Math.floor(Math.random() * 800);
        setData(data.map((names) => names.name.english.toLowerCase()));
        setIndividualPokemon(data[zufall].name.english.toLowerCase());
        setIndividualPokemonAttack(data[zufall].base.Attack);
        setNamePoke(data[zufall].name.english);
        setPokePicture(async () => {
          const test = await fetchPokePicture(individualPokemon);
          console.log(test);
          return test;
        });
      });
  }, []);

  return (
    <div>
      {/* Lädt zwei Pokemon Cards  */}
      {pokePicture ? (
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
      )}

      <Randompokemon
        namePoke={namePoke}
        individualPokemonAttack={individualPokemonAttack}
        pokeAttack={pokeAttack}
        pokePicture={pokePicture}
      />
      <Randompokemon
        namePoke={namePoke}
        pokeAttack={pokeAttack}
        individualPokemonAttack={individualPokemonAttack}
        pokePicture={pokePicture}
      />
    </div>
  );
};

export default Pokeinfo;
