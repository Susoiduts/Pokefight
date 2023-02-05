import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import React, { useState, useEffect } from "react";
import Pokeinfo from "./Pokeinfo";

function Main() {
  const zufall = Math.floor( Math.random() * 800) 
 

  return (
    <div><Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Pokefight</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
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
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Pokeinfo zufallgen={zufall}></Pokeinfo>
    {/* <Pokeinfo></Pokeinfo> */}
    </div>
  );
}

export default Main;
