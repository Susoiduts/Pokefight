import React from "react";
import { useState, useEffect } from "react";
import Randompokemon from "./PokemonCard";
import fetchPokemon from "./fetchPokemon";

// import {useEffectOnce} from "react-use"

const Pokeinfo = ({
  selectedIndex,
  setActiveButton,
  setSelectedIndex,
  setSelectedPokemon,
  selectedPokemon,
}) => {
  // fetch aus MongoDB-Datenbank
  const [pokedex, setPokedex] = useState({}); //für Carousel and Search later

  useEffect(() => {
    const fetchData = async () => {
      setActiveButton(false);

      //create an array containing three unique indices Pokemon
      let uniqueNumbers = [];
      let pokeArray = [];

      for (let i = 0; i < 3; i++) {
        //generate unique index number of a pokemon
        let randomNumber = Math.floor(Math.random() * 800);
        while (uniqueNumbers.includes(randomNumber)) {
          randomNumber = Math.floor(Math.random() * 800);
        }
        uniqueNumbers.push(randomNumber);
        //fetch data of Pokemon
        let pokemonData = await fetchPokemon(randomNumber);
        console.log(pokemonData);
        //compile object containing the pokemon data + picture URL
        const pokeObject = {
          name: pokemonData.name,
          hp: Math.floor(Math.random() * (100 - 50 + 1)) + 50,
          attack: Math.floor(Math.random() * (45 - 25 + 1)) + 25,
          picture: pokemonData.sprites.other.home.front_default,
        };
        //push created pokeObject to poke array
        pokeArray.push(pokeObject);
      }
      setSelectedPokemon(pokeArray);
    };
    fetchData();
  }, []);

  return (
    <div id="PokemonSelection">
      <div
        style={{
          textAlign: "center",
          fontSize: "max(3.5vw, 1.5em)",
          color: "white",
          backgroundColor: "grey",
          margin: "20px 0px",
        }}
      >
        Choose your Pokemon
      </div>
      {selectedPokemon[0] ? (
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Randompokemon
            key={0}
            namePoke={selectedPokemon[0].name}
            individualPokemonAttack={selectedPokemon[0].attack}
            healthPoke={selectedPokemon[0].hp}
            pokePicture={selectedPokemon[0].picture}
            onClick={() => {
              setSelectedIndex(0);
              setActiveButton(true);
            }}
            selected={selectedIndex === 0}
          />

          <Randompokemon
            key={1}
            namePoke={selectedPokemon[1].name}
            individualPokemonAttack={selectedPokemon[1].attack}
            healthPoke={selectedPokemon[1].hp}
            pokePicture={selectedPokemon[1].picture}
            onClick={() => {
              setSelectedIndex(1);
              setActiveButton(true);
            }}
            selected={selectedIndex === 1}
          />
        </div>
      ) : (
        "loading"
      )}
    </div>
  );
};

export default Pokeinfo;
