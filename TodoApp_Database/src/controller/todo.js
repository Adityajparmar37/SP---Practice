import { handleAsync } from "../middleware/handleAsync.js";
import {
  createTodoHandler,
  deleteTodoHandler,
  getAllTodosHandler,
  updateTodoHandler,
  getTodoHandler,
} from "../helper/todo.js";



// @route   GET /api/v1/todos/
// @desc    get all todos
export const getAllTodos = handleAsync(async (req, res, next) => {
  const queryFilters = req.query;
  const result = await getAllTodosHandler(queryFilters);

  if (!result.success) {
    return res.status(400).json({ message: result.message });
  }

  res.status(200).json({ message: "All Todos", todos: result.todos });
});


// @route   DELETE /api/v1/todos/:todoId
// @desc    delete todo
export const getTodo = handleAsync(async (req, res, next) => {
  const todoId = req.params.todoId;
  const result = await getTodoHandler(todoId);

  if (!result.success) {
    return res.status(400).json({ message: result.message });
  }

  res.status(200).json({ message: result.message, todo:result.todo });
});



// @route   POST /api/v1/todos/
// @desc    create todo
export const createTodo = handleAsync(async (req, res, next) => {
  const todoData = req.body;
  const result = await createTodoHandler(todoData);

  if (!result.success) {
    return res.status(400).json({ message: result.message });
  }

  res.status(200).json({ message: result.message });
});



// @route   DELETE /api/v1/todos/:todoId
// @desc    delete todo
export const deleteTodo = handleAsync(async (req, res, next) => {
  const todoId = req.params.todoId;
  const result = await deleteTodoHandler(todoId);

  if (!result.success) {
    return res.status(400).json({ message: result.message });
  }

  res.status(200).json({ message: result.message });
});



// @route   PATCH /api/v1/todos/:todoId
// @desc    update todo
export const updateTodo = handleAsync(async (req, res) => {
  const todoId = req.params.todoId;
  const updatedTodoData = req.body;
  const result = await updateTodoHandler(todoId, updatedTodoData);

  if (!result.success) {
    return res.status(400).json({ message: result.message });
  }

  res
    .status(200)
    .json({ message: result.message, updatedTodo: result.updateTodo });
});
