import { handleAsync } from "../middleware/handleAsync.js";
import {
  createNewTodo,
  fetchTodosData,
  deleteTodo,
  updateTodoData,
} from "../helper/todo.js";

export const getTodos = handleAsync(async (req, res, next) => {
  const filters = req.query;
  const result = await fetchTodosData(filters);
  if (!result.success) return res.status(400).json({ message: result.message });
  res.status(200).json({ message: "All Todos", AllTodo: result.AllTodo });
});

export const addnewTodo = handleAsync(async (req, res, next) => {
  const newTodoData = req.body;
  const result = await createNewTodo(newTodoData);
  if (!result.success) return res.status(400).json({ message: result.message });
  res
    .status(200)
    .json({ message: result.message, todoData: result.newTodoData });
});

export const removeTodo = handleAsync(async (req, res, next) => {
  const todoId = req.params.todoId;
  const result = await deleteTodo(todoId);
  if (!result.success) return res.status(400).json({ message: result.message });
  res.status(200).json({ message: result.message });
});

export const updateTodo = handleAsync(async (req, res) => {
  const todoId = req.params.todoId;
  const upateTodoData = req.body;
  const result = await updateTodoData(todoId, upateTodoData);
  if (!result.success) return res.status(400).json({ message: result.message });
  res
    .status(200)
    .json({ message: result.message, updatedTodo: result.updateTodo });
});
