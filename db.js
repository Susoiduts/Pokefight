const { MongoClient } = require("mongodb");
require('dotenv').config();

const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;
const uri = `mongodb+srv://${username}:${password}@ccluster0.7xwmcsp.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri);
const database = client.db("pokefight");
const scoreboard = database.collection("fightHistory");

async function fetchData() {
  try {
    // Query for a movie that has the title 'Back to the Future'
    const cursor = scoreboard.find({});
    const allValues = await cursor.toArray();
    return allValues;
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

async function insertResult(a,b,c,d,e) {
  const doc = {
    pokemon1: a,
    pokemon2: b,
    starter: c,
    winner: d,
    time: e,
  };
  const result = await scoreboard.insertOne(doc);
  console.log(`A document was inserted with the _id: ${result.insertedId}`);
  return result;
}

module.exports = {
  fetchData,
  insertResult,
};


//Schema
// {
//   "title": "fight",
//   "required": [
//     "pokemon1",
//     "pokemon2",
//     "starter",
//     "winner",
//     "time"
//   ],
//   "properties": {
//     "pokemon1": {
//       "bsonType": "string"
//     },
//     "pokemon2": {
//       "bsonType": "string"
//     },
//     "starter": {
//       "bsonType": "string"
//     },
//     "winner": {
//       "bsonType": "string"
//     },
//     "time": {
//       "bsonType": "string"
//     }
//   }
// }