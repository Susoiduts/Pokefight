import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import React, { useState, useEffect } from "react";
import Pokeinfo from "./PokemonCarousel";

import Arenapage from "./ArenaPage";

import StartButton from "./ArenaButton";

function LandingPage() {
  const [activeButton, setActiveButton] = useState(false);

  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Pokefight</Navbar.Brand>
          <StartButton
            activeButton={activeButton}
            setToggle={setToggle}
            toggle={toggle}
          ></StartButton>
          {/* <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse> */}
        </Container>
      </Navbar>
      {!toggle && <Pokeinfo setActiveButton={setActiveButton}></Pokeinfo>}
      {toggle && <Arenapage />}
      {/* <h1>Toggle cards = {JSON.stringify(toggle) }</h1> */}
    </div>
  );
}

export default LandingPage;
