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
    <div onClick={onClick} style={{ borderStyle: selected ? "solid" : "none" }}>
      <div className="card">
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
