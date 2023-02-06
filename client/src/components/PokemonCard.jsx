import React from "react";

const Randompokemon = ({
  namePoke,
  individualPokemonAttack,
  pokeAttack,
  pokePicture,
  
}) => {
  // const zufall = Zufallgen()

  return (
    <div>
      <div className="card">
        {/* <h1>Pokemon 1</h1>  */}

        {/* <h2>{upperCase}</h2> */}
        {/* <h1>{namePoke[0].toUpperCase() + namePoke.substring(1)}</h1> */}
        <h1>{namePoke}</h1>
        <h2>{`Attack: ${individualPokemonAttack}`}</h2>
        {/* <h2>{pokeAttack}</h2> */}
        <img src={pokePicture} alt="" />
        <div className="abilities">
          <div className="group">
            
          </div>
        </div>
        <div className="base-stat"></div>
      </div>
    </div>
  );
};

export default Randompokemon;
