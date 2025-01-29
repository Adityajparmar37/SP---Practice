import { handleAsync } from "../middleware/handleAsync.js";
import {
  addTodoLogic,
  getAllTodosLogic,
  removeTodoLogic,
  updateTodoLogic,
} from "../helperFunction/TodoHelper.js";

export const getAllTodos = handleAsync(async (req, res, next) => {
  const filters = req.query;
  const result = await getAllTodosLogic(filters);
  if (!result.success) return res.status(400).json({ message: result.message });
  res
    .status(200)
    .json({ message: "All Todos", AllTodosData: result.filterTodos });
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
  const TodoIndex = req.params.index;
  const result = await removeTodoLogic(TodoIndex);
  if (!result.success) return res.status(400).json({ message: result.message });
  res.status(200).json({ message: result.message });
});

export const updateTodo = handleAsync(async (req, res) => {
  const TodoIndex = req.params.index;
  const upateTodoData = req.body;
  const result = await updateTodoLogic(TodoIndex, upateTodoData);
  if (!result.success) return res.status(400).json({ message: result.message });
  res
    .status(200)
    .json({ message: result.message, updatedTodo: result.updateTodo });
});
