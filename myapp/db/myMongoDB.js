const { MongoClient } = require("mongodb");
const dataFile = require("../routes/index.js");

function MyDB() {
  const myDB = {};

  const uri = process.env.MONGO_URL || "mongodb://localhost:27017";

  myDB.getPosts = async () => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    await client.connect();
    //database
    const db = client.db("db");
    //collection
    const dog_info = db.collection("dog_info");

    const query = {};
    return dog_info
      .find(query)
      .toArray()
      .finally(() => client.close());
  };

  myDB.initialize = async () => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    await client.connect();
    //database
    const db = client.db("db");
    //collection
    const dog_info = db.collection("dog_info");
    let ids = dataFile.ids;
    let scraperFunction = dataFile.scraperFunction;
    for (let i = 0; i < ids.length; i++) {
      let element = await scraperFunction(ids[i], i);
      console.log(element);
      await dog_info.insertOne({ name: element });
    }
  };

  return myDB;
}

module.exports = MyDB();
