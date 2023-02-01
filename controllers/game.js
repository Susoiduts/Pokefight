const { fetchData, insertResult } = require("../db");
require("dotenv").config();

const saveResult = (req, res) => {
  //insertResult -> wie werden Daten übergeben? params der Adresse vs boday?
};

const getScorelist = async (req, res) => {
  res.status(200).send(await fetchData());
};

module.exports = {
  saveResult,
  getScorelist,
};
