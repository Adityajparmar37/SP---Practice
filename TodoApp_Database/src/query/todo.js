import { client } from "../../config/connectDb.js";

export const findTodoDb = async (filter, sortOrder = 1) => {
  // console.log(filter);
  const result = await client
    .db("todoDb")
    .collection("todos")
    .find(filter)
    .sort({ priority: sortOrder })
    .toArray();
  return result;
};

export const addTodoDb = async (data) => {
  const result = await client.db("todoDb").collection("todos").insertMany(data);
  return result;
};

export const removeTodoDb = async (todoId) => {
  const result = await client
    .db("todoDb")
    .collection("todos")
    .deleteOne({ _id: todoId });
  return result;
};

export const updateTodoDb = async (todoId, updateTodoData) => {
  const result = await client
    .db("todoDb")
    .collection("todos")
    .updateOne({ _id: todoId }, { $set: updateTodoData });
  return result;
};
