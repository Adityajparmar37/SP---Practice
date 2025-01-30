import { createId } from ".././utils/createId.js";
import {
  priorityMapping,
  reversePriorityMapping,
  reverseStatusMapping,
  sortMapping,
  statusMapping,
} from ".././utils/constant.js";
import {
  addTodo,
  findTodo,
  removeTodo,
  updateTodo,
} from "../query/todo.js";

//Get all todo
export const fetchTodosData = async (filter) => {
  let { sort, ...otherFilter } = filter;
  otherFilter.priority
    ? (otherFilter.priority = priorityMapping.get(otherFilter.priority))
    : (otherFilter.priority);
  otherFilter.status
    ? (otherFilter.status = statusMapping.get(otherFilter.status))
    : (otherFilter.status);
  const sortOrder = sort ? sortMapping.get(sort) : 1;

  let allTodosData = await findTodo(otherFilter, sortOrder);
  if (allTodosData.length === 0)
    return { success: false, message: "No Todos Found" };

  allTodosData = allTodosData.map((todo) => ({
    ...todo,
    priority: reversePriorityMapping.get(todo.priority),
    status: reverseStatusMapping.get(todo.status),
  }));
  return { success: true, AllTodo: allTodosData };
};

//add todo
export const createNewTodo = async (newTodoData) => {
  const newTodo = newTodoData;
  Object.assign(newTodoData, {
    _id: createId(),
    status: statusMapping.get(newTodoData.status),
    priority: priorityMapping.get(newTodoData.priority),
  });

  const response = await addTodo(newTodoData);
  return response.acknowledged
    ? {
        success: true,
        message: "Todo Addedd Successfully",
        newTodo,
      }
    : { success: false, message: "Todo Not Added, please try again" };
};

//remove todo
export const deleteTodo = async (todoId) => {
  let isTodoIdExist = await findTodo({ _id: todoId });
  if (isTodoIdExist.length === 0)
    return { success: false, message: "Todo does not exist" };

  const response = await removeTodo(todoId);
  return response.acknowledged
    ? { success: true, message: "Todo Removed Successfully" }
    : { success: false, message: "Todo Not Removed, please try again" };
};

//update todo
export const updateTodoData = async (todoId, updateTodoData) => {
  const filter = { _id: todoId };
  let isTodoIdExist = await findTodo(filter);
  if (isTodoIdExist.length === 0)
    return { success: false, message: "Todo does not exist" };

  updateTodoData.priority
    ? (updateTodoData.priority = priorityMapping.get(updateTodoData.priority))
    : updateTodoData.priority;

  updateTodoData.status
    ? (updateTodoData.status = statusMapping.get(updateTodoData.status))
    : updateTodoData.priority;

  const response = await updateTodo(todoId, updateTodoData);
  return response.modifiedCount > 0
    ? {
        success: true,
        message: "Todo updated successfully",
      }
    : { success: false, message: "Todo is same" };
};
