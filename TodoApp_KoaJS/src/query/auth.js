import { client } from "../../config/connectDb.js";

const dbClient = client.db(process.env.DATABASE).collection("users");

export const insertUser = async (data) => await dbClient.insertOne(data);

export const findUser = async (data) => await dbClient.findOne({ email: data });
