const { fetchData, insertResult } = require("../db");
require("dotenv").config();

const saveResult = async (req, res) => {
  console.log(req.body);
  const { pokemon1, pokemon2, starter, winner, time } = req.body;
  res
    .status(200)
    .send(await insertResult(pokemon1, pokemon2, starter, winner, time));
};

const getScorelist = async (req, res) => {
  res.status(200).send(await fetchData());
};

module.exports = {
  saveResult,
  getScorelist,
};
