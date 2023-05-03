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
  const [hpPokemonPlayer, setHpPokemonPlayer] = useState(
    pokemonPlayer.attributes.base.HP
  );
  //assign the data of the NPC pokemon + hp of the pokemon
  const pokemonNPC = arrayWithPokemonSelection[2];
  const [hpPokemonNPC, setHpPokemonNPC] = useState(
    pokemonNPC.attributes.base.HP
  );

  useEffect(() => {
    if (hpPokemonNPC === 0) {
      setShow(true);
      // setTimeout(() => {
      //   alert("You won!");
      // }, 100);
    }
  }, [hpPokemonNPC]);

  function handleClick() {
    setHpPokemonNPC((prev) => {
      const newHp = eval(
        hpPokemonNPC - Math.ceil(pokemonPlayer.attributes.base.Attack / 4)
      );
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
        name={pokemonPlayer.attributes.name.english}
        HP={hpPokemonPlayer}
        attack={pokemonPlayer.attributes.base.Attack}
        picture={pokemonPlayer.picture}
      />
      <div className="poke-fight">
        <button onClick={handleClick} id="btn-fight">
          ATTACK
        </button>
      </div>
      <Pokemon
        name={pokemonNPC.attributes.name.english}
        HP={hpPokemonNPC}
        attack={pokemonNPC.attributes.base.Attack}
        picture={pokemonNPC.picture}
      />
    </div>
  );
}

export default ArenaPage;
