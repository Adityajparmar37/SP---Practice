import { MongoClient } from "mongodb";
const mongoUrl = process.env.MONGO_URL;
const dbClient = new MongoClient(mongoUrl);

let client = null;
(async () => {
  try {
    if (!client) {
      client = await dbClient.connect();
      console.log("connected to db");
      return client;
    }
  } catch (error) {
    client = null;
    dbClient.close();
    console.log("Error Connection db ", error);
  }
})();

export { client };
