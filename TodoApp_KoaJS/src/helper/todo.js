import { generateId } from "../utils/createId.js";
import {
  priorityMapping,
  reversePriorityMapping,
  reverseStatusMapping,
  sortMapping,
  statusMapping,
} from "../utils/constant.js";
import {
  insertTodo,
  findTodos,
  removeTodoById,
  updateTodoById,
  findTodoById,
} from "../query/todo.js";

// Fetch all todos
export const getAllTodosHandler = async (filters) => {
  let { sort, ...otherFilters } = filters;
  if (otherFilters.priority) {
    otherFilters.priority = priorityMapping.get(otherFilters.priority);
  }
  if (otherFilters.status) {
    otherFilters.status = statusMapping.get(otherFilters.status);
  }
  const sortOrder = sort ? sortMapping.get(sort) : 1;

  let todos = await findTodos(otherFilters, sortOrder);
  if (todos.length === 0) {
    return { success: false, message: "No Todos Found" };
  }

  todos = todos.map((todo) => ({
    ...todo,
    priority: reversePriorityMapping.get(todo.priority),
    status: reverseStatusMapping.get(todo.status),
  }));
  return { success: true, todos };
};

// get  todo
export const getTodoHandler = async (todoId, userId) => {
  const todo = await findTodoById({ _id: todoId, userId });
  if (todo === null) {
    return { success: false, message: "No Todos Found" };
  }

  Object.assign(todo, {
    priority: reversePriorityMapping.get(todo.priority),
    status: reverseStatusMapping.get(todo.status),
  });
  return { success: true, todo };
};

// Create  new todo
export const createTodoHandler = async (todoData, userId) => {
  const timeStamp = new Date().toISOString();

  const newTodo = {
    ...todoData,
    _id: generateId(),
    userId,
    status: statusMapping.get(todoData.status),
    priority: priorityMapping.get(todoData.priority),
    createdAt: timeStamp,
    updatedAt: timeStamp,
  };

  // Object.assign()
  const response = await insertTodo(newTodo);
  return response.acknowledged
    ? {
        success: true,
        message: "Todo Added Successfully",
      }
    : { success: false, message: "Failed to Add Todo, please try again" };
};

// Remove a todo
export const deleteTodoHandler = async (todoId, userId) => {
  const todoExists = await findTodoById({ _id: todoId, userId });
  if (todoExists.length === 0) {
    return { success: false, message: "Todo not found" };
  }

  const response = await removeTodoById(todoId);
  return response.acknowledged
    ? { success: true, message: "Todo Removed Successfully" }
    : { success: false, message: "Failed to Remove Todo, please try again" };
};

// Update a todo
export const updateTodoHandler = async (todoId, updatedTodoData, userId) => {
  const updateTimeStamp = new Date().toISOString();
  const todoExists = await findTodoById({ _id: todoId, userId });
  if (todoExists.length === 0) {
    return { success: false, message: "Todo not found" };
  }

  if (updatedTodoData.priority) {
    updatedTodoData.priority = priorityMapping.get(updatedTodoData.priority);
  }

  if (updatedTodoData.status) {
    updatedTodoData.status = statusMapping.get(updatedTodoData.status);
  }

  updatedTodoData.updatedAt = updateTimeStamp;

  const response = await updateTodoById(todoId, updatedTodoData);
  return response.modifiedCount > 0
    ? {
        success: true,
        message: "Todo updated successfully",
      }
    : { success: false, message: "No changes made to the Todo" };
};
