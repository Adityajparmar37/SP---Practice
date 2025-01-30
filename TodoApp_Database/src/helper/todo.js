import { createId } from ".././utils/createId.js";
import {
  priorityMapping,
  reversePriorityMapping,
  reverseStatusMapping,
  sortMapping,
  statusMapping,
} from ".././utils/constant.js";
import {
  addTodoDb,
  findTodoDb,
  removeTodoDb,
  updateTodoDb,
} from "../query/todo.js";

//Get all todo
export const getAllTodosLogic = async (filter) => {
  let { sort, ...otherFilter } = filter;
  otherFilter.priority
    ? (otherFilter.priority = priorityMapping.get(otherFilter.priority))
    : (otherFilter.priority = null);
  otherFilter.status
    ? (otherFilter.status = statusMapping.get(otherFilter.status))
    : (otherFilter.status = null);

  const sortOrder = sort ? sortMapping.get(sort) : 1;

  let allTodosData = await findTodoDb(otherFilter, sortOrder);

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
export const addTodoLogic = async (newTodoData) => {
  const addTodo = newTodoData;
  Object.assign(newTodoData, {
    _id: createId(),
    status: statusMapping.get(newTodoData.status),
    priority: priorityMapping.get(newTodoData.priority),
  });

  const dbResponse = await addTodoDb(newTodoData);
  return dbResponse.acknowledged
    ? {
        success: true,
        message: "Todo Addedd Successfully",
        addTodo,
      }
    : { success: false, message: "Todo Not Added, please try again" };
};

//remove todo
export const removeTodoLogic = async (todoId) => {
  let isTodoIdExist = await findTodoDb({ _id: todoId });
  if (isTodoIdExist.length === 0)
    return { success: false, message: "Todo does not exist" };

  const dbResponse = await removeTodoDb(todoId);
  return dbResponse.acknowledged
    ? { success: true, message: "Todo Removed Successfully" }
    : { success: false, message: "Todo Not Removed, please try again" };
};

//remove todo
export const updateTodoLogic = async (todoId, updateTodoData) => {
  const filter = { _id: todoId };
  let isTodoIdExist = await findTodoDb(filter);
  if (isTodoIdExist.length === 0)
    return { success: false, message: "Todo does not exist" };

  if (updateTodoData.priority) {
    updateTodoData.priority = priorityMapping.get(updateTodoData.priority);
  }

  if (updateTodoData.status) {
    updateTodoData.status = statusMapping.get(updateTodoData.status);
  }
  const dbResponse = await updateTodoDb(todoId, updateTodoData);
  console.log(dbResponse);
  return dbResponse.upsertedCount > 0
    ? {
        success: true,
        message: "Todo updated successfully",
      }
    : { success: false, message: "Todo is same" };
};
