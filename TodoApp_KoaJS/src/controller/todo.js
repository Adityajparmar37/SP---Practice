import { handleAsync } from "../middleware/handleAsync.js";
import {
  createTodoHandler,
  deleteTodoHandler,
  getAllTodosHandler,
  updateTodoHandler,
  getTodoHandler,
} from "../helper/todo.js";
import { sendResponse } from "../utils/sendResponse.js";

// @route   GET /api/v1/todos/
// @desc    get all todos
export const getAllTodos = handleAsync(async (ctx) => {
  const queryFilters = ctx.state.shared || {};
  const result = await getAllTodosHandler(queryFilters);

  if (!result.success) {
    sendResponse(ctx, 400, { message: result.message });
    return;
  }
  sendResponse(ctx, 200, { message: "All Todos", data: result.todos });
});



// @route   GET /api/v1/todos/:todoId
// @desc    delete todo
export const getTodo = handleAsync(async (ctx) => {
  const todoId = ctx.state.params.todoId;
  console.log(todoId);
  const result = await getTodoHandler(todoId);

  if (!result.success) {
    sendResponse(ctx, 400, { message: result.message });
    return;
  }
  sendResponse(ctx, 200, { data: result.todo });
});



// @route   POST /api/v1/todos/
// @desc    create todo
export const createTodo = handleAsync(async (ctx) => {
  const todoData = ctx.state.shared;
  const result = await createTodoHandler(todoData);

  if (!result.success) {
    sendResponse(ctx, 400, { message: result.message });
    return;
  }

  sendResponse(ctx, 200, { message: result.message });
});



// @route   DELETE /api/v1/todos/:todoId
// @desc    delete todo
export const deleteTodo = handleAsync(async (ctx) => {
  const todoId = ctx.state.params.todoId;
  const result = await deleteTodoHandler(todoId);

  if (!result.success) {
    sendResponse(ctx, 400, { message: result.message });
    return;
  }

  sendResponse(ctx, 200, { message: result.message });
});



// @route   PATCH /api/v1/todos/:todoId
// @desc    update todo
export const updateTodo = handleAsync(async (ctx, next) => {
  const todoId = ctx.state.params.todoId;
  const updatedTodoData = ctx.state.shared;
  const result = await updateTodoHandler(todoId, updatedTodoData);

  if (!result.success) {
    sendResponse(ctx, 400, { message: result.message });
    return;
  }
  sendResponse(ctx, 200, { message: result.message, data: result.updateTodo });
});
