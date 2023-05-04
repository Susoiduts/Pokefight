import React, { useState } from "react";
import Pokeinfo from "./PokemonSelection";
import Arenapage from "./Arena";
import StartButton from "./ArenaButton";
import WinAlert from "./WinAlert";

function LandingPage() {
  const [activeButton, setActiveButton] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState();
  const [selectedPokemon, setSelectedPokemon] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [show, setShow] = useState(false);

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
          setShow={setShow}
        />
      )}
      <StartButton
        activeButton={activeButton}
        setToggle={setToggle}
        toggle={toggle}
        
      />
      <WinAlert show={show} setShow={setShow} setToggle={setToggle} setSelectedPokemon={setSelectedPokemon}/>
    </div>
    
  );
}

export default LandingPage;
