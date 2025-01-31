import { client } from "../../config/connectDb.js";

export const findTodos = async (filter, sortOrder = 1) => {
  const result = await client
    .db("todoDb")
    .collection("todos")
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
    .db("todoDb")
    .collection("todos")
    .deleteOne({ _id: todoId });
  return result;
};

export const updateTodoById = async (todoId, updateTodoData) => {
  const result = await client
    .db("todoDb")
    .collection("todos")
    .updateOne({ _id: todoId }, { $set: updateTodoData });
  return result;
};

export const findTodoById = async (filter, sortOrder = 1) => {
  const result = await client
    .db("todoDb")
    .collection("todos")
    .find(filter)
    .sort({ priority: sortOrder })
    .toArray();
  return result;
};

