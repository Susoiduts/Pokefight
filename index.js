const express = require("express");
const app = express();
const routesPokemon = require("./routes/pokemon");
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());
app.use("/", routesPokemon);

app.listen(port, () => {
    console.log("server is running");
  });
  