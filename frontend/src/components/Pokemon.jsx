import React from "react";
import not_found from "../assets/images/not_found.png";

function Pokemon({name, HP, attack, picture}) {

console.log(name)
    console.log(picture)
    console.log(HP)



    return (
        <div>
          <div className="pokemon-card">
            <div className="pokemon-header">
            <h1>{name}</h1>
            <h1>Pokename</h1>
            {/* Pokeimage */}
            
            <img src={picture}></img>

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
        <div className="hp-bar">
            <div
              className="fill"
            //   style={{ width: `${HP}`} }
              style={{ width: `${HP}%`} }
            //   style={{ width: {100}} }
            >
              <p>HP: {HP}</p>
            {/* HP = {HP} */}
            </div>
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
            <img src="" alt="" />
        </div>
    )
}

export default Pokemon