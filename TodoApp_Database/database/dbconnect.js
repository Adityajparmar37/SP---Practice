import { MongoClient } from "mongodb";

const mongoUrl = process.env.MONGO_URL;

const dbClient = new MongoClient(mongoUrl);

let dbInstance = null;
const db = "TodoApp";

const connectDB = async () => {
  try {
    if (!dbInstance) {
      await dbClient.connect();
      dbInstance = dbClient.db(db);
      console.log(
        "connected to db --> ",
        "mongodb://" +
          dbClient.options.hosts[0].toString() +
          "/" +
          dbClient.options.dbName
      );
    }
  } catch (error) {
    dbInstance = null;
    dbClient.close();
    console.log("Error Connection db ", error);
  }
};

const getDbInstance = () => {
  if (!dbInstance) throw new Error("DB is not connected yet");

  return dbInstance;
};

export { connectDB, getDbInstance };
