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
export const getTodoHandler = async (todoId) => {
  const todo = await findTodoById({ _id: todoId });
  if (todo.length === 0) {
    return { success: false, message: "No Todos Found" };
  }

  Object.assign(todo, {
    priority: reversePriorityMapping.get(todo.priority),
    status: reverseStatusMapping.get(todo.status),
  });
  return { success: true, todo };
};

// Create a new todo
export const createTodoHandler = async (todoData) => {
  const newTodo = { ...todoData };
  Object.assign(newTodo, {
    _id: generateId(),
    status: statusMapping.get(todoData.status),
    priority: priorityMapping.get(todoData.priority),
  });

  const response = await insertTodo(newTodo);
  return response.acknowledged
    ? {
        success: true,
        message: "Todo Added Successfully",
      }
    : { success: false, message: "Failed to Add Todo, please try again" };
};

// Remove a todo
export const deleteTodoHandler = async (todoId) => {
  const todoExists = await findTodos({ _id: todoId });
  if (todoExists.length === 0) {
    return { success: false, message: "Todo not found" };
  }

  const response = await removeTodoById(todoId);
  return response.acknowledged
    ? { success: true, message: "Todo Removed Successfully" }
    : { success: false, message: "Failed to Remove Todo, please try again" };
};

// Update a todo
export const updateTodoHandler = async (todoId, updatedTodoData) => {
  const filter = { _id: todoId };
  const todoExists = await findTodos(filter);
  if (todoExists.length === 0) {
    return { success: false, message: "Todo not found" };
  }

  if (updatedTodoData.priority) {
    updatedTodoData.priority = priorityMapping.get(updatedTodoData.priority);
  }

  if (updatedTodoData.status) {
    updatedTodoData.status = statusMapping.get(updatedTodoData.status);
  }

  const response = await updateTodoById(todoId, updatedTodoData);
  return response.modifiedCount > 0
    ? {
        success: true,
        message: "Todo updated successfully",
      }
    : { success: false, message: "No changes made to the Todo" };
};
