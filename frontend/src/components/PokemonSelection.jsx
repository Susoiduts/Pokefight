import React from "react";
import { useState, useEffect } from "react";
import Randompokemon from "./PokemonCard";
import fetchPokePicture from "./pokeApi";

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
      //fetch a list with the data of all Pokemon and save in data
      const response = await fetch(
        "https://pokefight-ox3e.onrender.com/pokemon"
      );
      const data = await response.json();

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
        //fetch picture URL of Pokemon
        const pictureUrl = await fetchPokePicture(
          data[randomNumber].name.english.toLowerCase()
        );
        //compile object containing the pokemon data + picture URL
        const pokeObject = {
          attributes: data[randomNumber],
          picture: pictureUrl,
        };
        //push created pokeObject to poke array
        pokeArray.push(pokeObject);
      }
      setSelectedPokemon(pokeArray);

      //save Pokedex locally
      setPokedex(data.map((names) => names.name.english.toLowerCase()));
    };
    fetchData();
  }, []);

  return (
    <div
      id="PokemonSelection"
      style={{
        height: "95%",
        padding: "0% 20% 10%",
      }}
    >
      <div
        style={{
          textAlign: "center",
          fontSize: "3em",
          color: "white",
          backgroundColor: "grey",
          margin: "20px",
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
            namePoke={selectedPokemon[0].attributes.name.english}
            individualPokemonAttack={selectedPokemon[0].attributes.base.attack}
            healthPoke={selectedPokemon[0].attributes.base.HP}
            pokePicture={selectedPokemon[0].picture}
            onClick={() => {
              setSelectedIndex(0);
              setActiveButton(true);
            }}
            selected={selectedIndex === 0}
          />

          <Randompokemon
            key={1}
            namePoke={selectedPokemon[1].attributes.name.english}
            individualPokemonAttack={selectedPokemon[1].attributes.base.attack}
            healthPoke={selectedPokemon[1].attributes.base.HP}
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
