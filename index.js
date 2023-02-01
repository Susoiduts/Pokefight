const express = require("express");
const app = express();
const routesPokemon = require("./routes/pokemon");
const routesGame = require("./routes/game");
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());
app.use("/", routesPokemon, routesGame);

app.listen(port, () => {
  console.log("server is running");
});
