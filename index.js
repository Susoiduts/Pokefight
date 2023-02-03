const express = require("express");
const app = express();
const routesPokemon = require("./routes/pokemon");
const routesGame = require("./routes/game");
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());
//middlewares für Input
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.send("My API");
});

app.use("/", routesPokemon, routesGame);

app.listen(port, () => {
  console.log("server is running");
});
