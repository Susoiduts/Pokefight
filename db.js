const { MongoClient } = require("mongodb");

const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;
const uri = `mongodb+srv://${username}:${password}@ccluster0.7xwmcsp.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri);

async function fetchData() {
    try {
      const database = client.db('pokefight');
      const movies = database.collection('fightHistory');
      // Query for a movie that has the title 'Back to the Future'
      const query = { title: 'Back to the Future' };
      const movie = await movies.findOne(query);
      console.log(movie);
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  fetchData().catch(console.dir);

  module.exports = fetchData;