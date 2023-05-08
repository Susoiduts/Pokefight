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
    <div
      onClick={onClick}
      className="card"
      style={{ border: selected ? "5px solid" : "5px solid transparent" }}
    >
      <h1 className="cardtext">{namePoke}</h1>
      <h2 className="cardtext">{`Health: ${healthPoke}`}</h2>
      <h2 className="cardtext">{`Attack: ${individualPokemonAttack}`}</h2>
      <img src={pokePicture} alt="" />
    </div>
  );
};

export default Randompokemon;
