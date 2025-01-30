import { client } from "../../config/connectDb.js";

export const findTodosDb = async (filter) => {
  const result = await client
    .db("todoDb")
    .collection("todos")
    .find(filter)
    .toArray();
  return result;
};

export const addTodoToDb = async (data) => {
  const result = await client.db("todoDb").collection("todos").insertOne(data);
  console.log(result);
  return result;
};
