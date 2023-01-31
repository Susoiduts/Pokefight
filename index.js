const express = require("express");
const app = express();
const routes = require("./routes/standard");
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());
app.use("/", routes);

app.listen(port, () => {
    console.log("server is running");
  });
  