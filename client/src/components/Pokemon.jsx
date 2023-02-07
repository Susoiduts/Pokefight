import React from "react";
import not_found from "../assets/images/not_found.png";

function Pokemon() {


    return (
        <div>
          <div className="pokemon-card">
            <div className="pokemon-header">
            {/* <h1>{pokemon.name.toUpperCase()}</h1> */}
            <h1>Pokename</h1>
            {/* Pokeimage */}
            
            <img></img>

            {/* Pokeball */}
            <div class="pokeball">
            <div class="border-circle">
              <div class="inner-circle">
                <div class="pokeball-button">
                  {/* <button id="btn-poke" onClick={handleRandomPokemon}></button> */}
                </div>
              </div>
            </div>
            <div class="bright1"></div>
            <div class="bright2"></div>
          </div>

        {/* Hp-Bar */}
        <div className="hp-bar">
            <div
              className="fill"
            //   style={{ width: `${pokemon.stats[0].base_stat}` }}
            >
              {/* <p>HP: {pokemon.stats[0].base_stat}</p> */}
            </div>
        </div>

        {/* Pokedetails */}
        <div className="pokemon-details">
            <div className="left">
              {/* <p>Attack: {pokemon.stats[1].base_stat}</p> */}
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
            <img src="" alt="" />
        </div>
    )
}

export default Pokemon