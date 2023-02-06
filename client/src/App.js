import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./components/LandingPage";
import "./components/style.css";

function App() {
  return (
    <div>
      <LandingPage></LandingPage>
    </div>
  );
}

export default App;

// const [data, setData] = useState([]);

// useEffect(() => {
//   fetch("https://pokefight-ox3e.onrender.com/pokemon")
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       setData(data);
//     });
// }, []);
