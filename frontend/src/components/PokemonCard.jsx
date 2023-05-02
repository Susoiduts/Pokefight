import React from "react";

const Randompokemon = ({
  namePoke,
  individualPokemonAttack,
  healthPoke,
  pokePicture,
  selected,
  onClick,

}) => {
  return (
    <div onClick={onClick} >
      <div className="card" style={{ border: selected ? "5px solid" : "5px solid transparent" }}>
        <h1>{namePoke}</h1>
        <h2>{`Attack: ${individualPokemonAttack}`}</h2>
        <h2>{`Health: ${healthPoke}`}</h2>
        <img src={pokePicture} alt="" />
        <div className="abilities">
          <div className="group"></div>
        </div>
        <div className="base-stat"></div>
      </div>
    </div>
  );
};

export default Randompokemon;
