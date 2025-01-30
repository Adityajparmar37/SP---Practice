import { MongoClient } from "mongodb";
const mongoUrl = process.env.MONGO_URL;
const client = new MongoClient(mongoUrl);

const connectDb = async () => {
  try {
    await client.connect();
    console.log("connected to db");
  } catch (error) {
    console.log("Error Connection db ", error);

    //doubt can i do this
    process.exit(0);
  }
};

export { connectDb, client };
