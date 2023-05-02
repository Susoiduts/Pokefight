import React, { useState } from "react";
import Pokeinfo from "./PokemonSelection";
import Arenapage from "./Arena";
import StartButton from "./ArenaButton";

function LandingPage() {
  const [activeButton, setActiveButton] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState();
  const [selectedPokemon, setSelectedPokemon] = useState([]);
  const [toggle, setToggle] = useState(false);

  return (
    <div id="PageContainer" style={{ height: "100vh", paddingTop: "5%", position: "relative" }}>
      {!toggle && (
        <Pokeinfo
          setActiveButton={setActiveButton}
          setSelectedIndex={setSelectedIndex}
          selectedPokemon={selectedPokemon}
          setSelectedPokemon={setSelectedPokemon}
          selectedIndex={selectedIndex}
        ></Pokeinfo>
      )}
      {toggle && (
        <Arenapage
          selectedIndex={selectedIndex}
          selectedPokemon={selectedPokemon}
          setSelectedPokemon={setSelectedPokemon}
        />
      )}
      <StartButton
        activeButton={activeButton}
        setToggle={setToggle}
        toggle={toggle}
        
      />
    </div>
  );
}

export default LandingPage;
