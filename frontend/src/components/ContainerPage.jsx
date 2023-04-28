import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
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
    <div style={{ height: "100vh" }}>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Pokefight</Navbar.Brand>
          <StartButton
            activeButton={activeButton}
            setToggle={setToggle}
            toggle={toggle}
          ></StartButton>
        </Container>
      </Navbar>
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
    </div>
  );
}

export default LandingPage;
