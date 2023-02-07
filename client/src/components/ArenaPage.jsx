import React from 'react'
import Pokemon from "./Pokemon";
import VS from "../assets/images/vs.png";
import './arena.css';


const ArenaPage = () => {
const pokemon1 = [{url:""}, {pokeobject: ""}]; //Picture and Pokemon Objet from Pokedex
const pokemon2 = pokemon1;
    
  return (
    <div className="wrapper">
      <Pokemon />
      <div className="poke-fight">
        {/* <img id="vs" src={VS} alt="vs" /> */}
        <button id="btn-fight">FIGHT</button>
      </div>
      <Pokemon />
    </div>
  )
}

export default ArenaPage