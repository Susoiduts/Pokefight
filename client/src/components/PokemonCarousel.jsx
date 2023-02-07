import React from "react";
import { useState, useEffect } from "react";
import Randompokemon from "./PokemonCard";
import fetchPokePicture from "./pokeApi";

const Pokeinfo = ({setActiveButton}) => {
  // fetch aus MongoDB-Datenbank
  const [pokedex, setPokedex] = useState({}); //fpr Carousel and Search later
  const [pokemonAttack, setPokemonAttack] = useState();
  const [pokePicture, setPokePicture] = useState();
  const [namePoke, setNamePoke] = useState();
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setActiveButton(false);
      const response = await fetch(
        "https://pokefight-ox3e.onrender.com/pokemon"
      );
      const data = await response.json();
      
      //save Pokedex locally
      setPokedex(data.map((names) => names.name.english.toLowerCase()));
      //generate random number
      const zufall = Math.floor(Math.random() * 800);

      //save attack and name of randomly selected pokemon locally
      setPokemonAttack(data[zufall].base.Attack);
      setNamePoke(data[zufall].name.english);
      //fetch picture of randomely selected pokemon and save locally
      const pictureUrl = await fetchPokePicture(
        data[zufall].name.english.toLowerCase()
      );
      setPokePicture(pictureUrl);
    };

    fetchData();
  }, []);

  return (
    <div>
      <Randompokemon
        key={1}
        namePoke={namePoke}
        individualPokemonAttack={pokemonAttack}
        pokePicture={pokePicture}
        onClick={() => {
          setSelectedIndex(1)
          setActiveButton(true)}}
        selected={selectedIndex === 1}
      />
      <Randompokemon
        key={2}
        namePoke={namePoke}
        individualPokemonAttack={pokemonAttack}
        pokePicture={pokePicture}
        onClick={() => {
          setSelectedIndex(2)
          setActiveButton(true)}}
        selected={selectedIndex === 2}
      />
    </div>
  );
};

export default Pokeinfo;
