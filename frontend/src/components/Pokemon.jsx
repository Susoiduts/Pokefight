import React from "react";
import { useState } from "react";

function Pokemon({ name, HP, attack, picture }) {
  const [fullHp, setFullHp] = useState(HP);
  return (
    <div>
      <div className="pokemon-card">
        <div className="pokemon-header">
          <div className="arenaPokeCardHeaderMobile">

          <h1>{name}</h1>

          {/* Pokeimage */}
          <div className="arenaPokeImg">

          <img src={picture} alt=""/>
          </div>
          </div>

          {/* Pokeball */}
          <div className="pokeball">
            <div className="border-circle">
              <div className="inner-circle">
                <div className="pokeball-button">
                  <button id="btn-poke"></button>
                </div>
              </div>
            </div>
            <div className="bright1"></div>
            <div className="bright2"></div>
          </div>

          {/* Hp-Bar */}
          <div className="hp-bar" style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                left: "50%",
                transform: "translate(-50%)",
              }}
            >
              HP: {HP}
            </div>
            <div
              className="fill"
              style={{ width: `${(HP / fullHp) * 100}%` }}
            ></div>
          </div>

          {/* Pokedetails */}
          <div className="pokemon-details">
            <div className="left">
              <p>Attack: {attack}</p>
              {/* <p>S-Attack: {pokemon.stats[3].base_stat}</p> */}
              {/* <p>Speed: {pokemon.stats[5].base_stat}</p> */}
            </div>
            <div className="right">
              {/* <p>Defense: {pokemon.stats[2].base_stat}</p> */}
              {/* <p>S-Defense: {pokemon.stats[4].base_stat}</p> */}
              {/* <p>XP: {pokemon.base_experience}</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pokemon;
