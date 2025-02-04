import { client } from "../../config/connectDb.js";
const dbClient = client
  .db(process.env.DATABASE)
  .collection(process.env.TODO_COLLECTION);

export const findTodos = async (filter, sortOrder = 1) => {
  const result = await dbClient
    .find(filter)
    .sort({ priority: sortOrder })
    .toArray();
  return result;
};

export const insertTodo = async (data) => {
  const result = await dbClient.insertOne(data);
  return result;
};

export const removeTodoById = async (todoId) => {
  const result = await dbClient.deleteOne({ _id: todoId });
  return result;
};

export const updateTodoById = async (todoId, updateTodoData) => {
  const result = await dbClient.updateOne(
    { _id: todoId },
    { $set: updateTodoData }
  );
  return result;
};

export const findTodoById = async (filter) => {
  const result = await dbClient.findOne(filter);
  return result;
};
