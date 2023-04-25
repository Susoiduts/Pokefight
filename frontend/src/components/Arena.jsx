import React from 'react'
import Pokemon from "./Pokemon";
import VS from "../assets/images/vs.png";
import './arena.css';


const ArenaPage = ({setHealthPoints, healthPoints, selectedIndex, selectedPokemon}) => {

 let pokeContender1;
if (selectedIndex = 1) {
    pokeContender1 = selectedPokemon[0]
} else {
    pokeContender1 = selectedPokemon[1]
}

console.log(pokeContender1)
const pokeContender2 = selectedPokemon[2]
console.log(pokeContender2)

console.log (healthPoints)
console.log (selectedIndex)
console.log (selectedPokemon)
console.log (pokeContender1.attributes)

const toggler = false


function handleClick() {
    setHealthPoints([eval(healthPoints - pokeContender1.attributes.base.Attack )])
    // if (healthPoints < 0) {
        alertd()
    // }
    console.log(healthPoints)
    // alert("test")
}

function alertd(){
    if (healthPoints > 0){
        return
} else {
    alert("You LOST")
}}

    
  return (
    <div className="wrapper">


      {/* <h2>Index {selectedIndex}</h2> */}
      <Pokemon name={pokeContender1.attributes.name.english} HP={pokeContender1.attributes.base.HP} attack={pokeContender1.attributes.base.Attack} picture={pokeContender1.picture}/>
      <div className="poke-fight">
        {/* <img id="vs" src={VS} alt="vs" /> */}
        <button onClick={handleClick} id="btn-fight">FIGHT</button>
      </div>
      {/* <Pokemon name={pokeContender2.attributes.name.english} HP={pokeContender2.attributes.base.HP} attack={pokeContender2.attributes.base.Attack} picture={pokeContender2.picture}/> */}
      <Pokemon name={pokeContender2.attributes.name.english} HP={healthPoints[0]} attack={pokeContender2.attributes.base.Attack} picture={pokeContender2.picture}/>
      
    </div>
  )
}

export default ArenaPage