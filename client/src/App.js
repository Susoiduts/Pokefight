import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./components/Main"
import "./components/style.css"
import Pokeinfo from "./components/Pokeinfo";
import { useState, useEffect } from "react";

function App() {

  
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("https://pokefight-ox3e.onrender.com/pokemon")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);

  return (
    <div>
      <Main >
      </Main>
      
      
    </div>
  );
}

export default App;
