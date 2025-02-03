import { client } from "../../config/connectDb.js";

export const findTodos = async (filter, sortOrder = 1) => {
  const result = await client
    .db(process.env.DATABASE)
    .collection(process.env.TODO_COLLECTION)
    .find(filter)
    .sort({ priority: sortOrder })
    .toArray();
  return result;
};

export const insertTodo = async (data) => {
  const result = await client.db("todoDb").collection("todos").insertOne(data);
  return result;
};

export const removeTodoById = async (todoId) => {
  const result = await client
    .db(process.env.DATABASE)
    .collection(process.env.TODO_COLLECTION)
    .deleteOne({ _id: todoId });
  return result;
};

export const updateTodoById = async (todoId, updateTodoData) => {
  const result = await client
    .db(process.env.DATABASE)
    .collection(process.env.TODO_COLLECTION)
    .updateOne({ _id: todoId }, { $set: updateTodoData });
  return result;
};

export const findTodoById = async (filter) => {
  const result = await client
    .db(process.env.DATABASE)
    .collection(process.env.TODO_COLLECTION)
    .findOne(filter);
  return result;
};
