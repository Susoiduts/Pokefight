import React, { useEffect } from "react";
import Pokemon from "./Pokemon";
import "./arena.css";
import { useState } from "react";

function ArenaPage({
  selectedIndex: indexOfSelectedPokemon,
  selectedPokemon: arrayWithPokemonSelection,
  setShow,
}) {
  //assign the data of the pokemon selected by the player + hp of the pokemon
  const pokemonPlayer = arrayWithPokemonSelection[indexOfSelectedPokemon];
  const [hpPokemonPlayer, setHpPokemonPlayer] = useState(pokemonPlayer.hp);
  //assign the data of the NPC pokemon + hp of the pokemon
  const pokemonNPC = arrayWithPokemonSelection[2];
  const [hpPokemonNPC, setHpPokemonNPC] = useState(pokemonNPC.hp);

  useEffect(() => {
    if (hpPokemonNPC === 0) {
      setShow(true);
    }
  }, [hpPokemonNPC]);

  function handleClick() {
    setHpPokemonNPC((prev) => {
      const newHp = eval(hpPokemonNPC - Math.ceil(pokemonPlayer.attack));
      if (newHp > 0) {
        return newHp;
      } else {
        return 0;
      }
    });
  }

  return (
    <div className="wrapper">
      <Pokemon
        name={pokemonPlayer.name}
        HP={hpPokemonPlayer}
        attack={pokemonPlayer.attack}
        picture={pokemonPlayer.picture}
      />
      <div className="poke-fight">
        <button onClick={handleClick} id="btn-fight">
          ATTACK
        </button>
      </div>
      <Pokemon
        name={pokemonNPC.name}
        HP={hpPokemonNPC}
        attack={pokemonNPC.attack}
        picture={pokemonNPC.picture}
      />
    </div>
  );
}

export default ArenaPage;
