import { client } from "../../config/connectDb.js";

const dbClient = client.db(process.env.DATABASE).collection("todos");

export const findTodos = async (filter, sortOrder = 1, page = 1, limit = 10) =>
  await dbClient
    .find(filter)
    .sort({ priority: sortOrder })
    .skip((page - 1) * limit)
    .limit(limit)
    .toArray();

export const insertTodo = async (data) => await dbClient.insertOne(data);

export const removeTodoById = async (todoId) =>
  await dbClient.deleteOne({ _id: todoId });

export const updateTodoById = async (todoId, updateTodoData) =>
  await dbClient.updateOne({ _id: todoId }, { $set: updateTodoData });

export const findTodoById = async (filter) => {
  return await dbClient.findOne(filter);
};
