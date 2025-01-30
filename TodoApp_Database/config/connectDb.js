import { MongoClient } from "mongodb";
const mongoUrl = process.env.MONGO_URL;
const client = new MongoClient(mongoUrl);

const connectDb = async () => {
  try {
    await client.connect();
    console.log("connected to db");
  } catch (error) {
    console.log("Error Connection db ", error);
     throw new Error("Database connection failed");
  }
};

export { connectDb, client };
