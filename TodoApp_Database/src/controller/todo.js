import { handleAsync } from "../middleware/handleAsync.js";
import {
  addTodoLogic,
  getAllTodosLogic,
  removeTodoLogic,
  updateTodoLogic,
} from "../helper/todo.js"

export const getAllTodos = handleAsync(async (req, res, next) => {
  const filters = req.query;
  const result = await getAllTodosLogic(filters);
  if (!result.success) return res.status(400).json({ message: result.message });
  res.status(200).json({ message: "All Todos", AllTodo: result.AllTodo });
});

export const addTodo = handleAsync(async (req, res, next) => {
  const newTodoData = req.body;
  const result = await addTodoLogic(newTodoData);
  if (!result.success) return res.status(400).json({ message: result.message });
  res
    .status(200)
    .json({ message: result.message, todoData: result.newTodoData });
});

export const removeTodo = handleAsync(async (req, res, next) => {
  const todoId = req.params.todoId;
  const result = await removeTodoLogic(todoId);
  if (!result.success) return res.status(400).json({ message: result.message });
  res.status(200).json({ message: result.message });
});

export const updateTodo = handleAsync(async (req, res) => {
  const todoId = req.params.todoId;
  const upateTodoData = req.body;
  const result = await updateTodoLogic(todoId, upateTodoData);
  if (!result.success) return res.status(400).json({ message: result.message });
  res
    .status(200)
    .json({ message: result.message, updatedTodo: result.updateTodo });
});
