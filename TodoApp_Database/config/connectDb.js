import { MongoClient } from "mongodb";
const mongoUrl = process.env.MONGO_URL;
const dbClient = new MongoClient(mongoUrl);

let dbInstance = null;
const connectDb = async () => {
  try {
    if (!dbInstance) {
      dbInstance = await dbClient.connect();
      console.log("connected to db");
      return dbInstance;
    }
    return dbInstance;
  } catch (error) {
    dbInstance = null;
    dbInstance.close();
    console.log("Error Connection db ", error);
  }
};

const getDbInstance = async () => {
  if (!dbInstance) {
    dbInstance = await connectDb();
  }
  return dbInstance;
};

export { connectDb, getDbInstance };
