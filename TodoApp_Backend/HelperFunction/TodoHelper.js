import { ReadTodosFromFile } from "../services/fileRead.js";
import { WriteToDosFromFile } from "../services/fileWrite.js";
import { sortData } from "../filters/sortData.js";
import { filterData } from "../filters/filterData.js";
import { removeData } from "../filters/removeData.js";
import { createId } from "../utils/createId.js";
import { getDataIndex } from "../filters/getdataIndex.js";
import {
  priorityMapping,
  reversePriorityMapping,
  reverseStatusMapping,
  statusMapping,
} from "../utils/constant.js";

export const getAllTodosLogic = async ({ sort, status, priority }) => {
  const { success, allTodosData } = await ReadTodosFromFile();

  if (!success || allTodosData.length === 0)
    return { success: false, message: "No Todos Found" };

  let filterTodos = allTodosData;
  if (status) filterTodos = filterData(filterTodos, status, "status");
  if (priority) filterTodos = filterData(filterTodos, priority, "priority");
  if (sort) sortData(filterTodos, sort, "index");

  filterTodos = filterTodos.map((todo) => ({
    ...todo,
    priority: reversePriorityMapping.get(todo.priority),
    status: reverseStatusMapping.get(todo.status),
  }));
  return { success: true, filterTodos };
};

export const addTodoLogic = async (newTodoData) => {
  const { success, allTodosData } = await ReadTodosFromFile();
  if (!success) return res.status(400).json({ message: "No Todos Found" });

  Object.assign(newTodoData, {
    index: allTodosData.length + 1,
    id: createId(),
    status: statusMapping.get(newTodoData.status),
    priority: priorityMapping.get(newTodoData.priority),
  });

  allTodosData.push(newTodoData);

  Object.assign(newTodoData, {
    index: allTodosData.length + 1,
    id: createId(),
    status: reverseStatusMapping.get(newTodoData.status),
    priority: reversePriorityMapping.get(newTodoData.priority),
  });

  const response = await WriteToDosFromFile(allTodosData);

  return response.success
    ? { success: true, message: "Todo Addedd Successfully", newTodoData }
    : { success: false, message: "Todo Not Added, please try again" };
};

export const removeTodoLogic = async (index) => {
  const { success, allTodosData } = await ReadTodosFromFile();
  if (!success) return { success: false, message: "No Todos Found" };

  const todoIndex = getDataIndex(allTodosData, parseInt(index), "index");
  if (todoIndex === -1) return { success: false, message: "Todo Not Found" };

  let tempTodoListData = removeData(allTodosData, parseInt(index), "index");
  const response = await WriteToDosFromFile(tempTodoListData);

  return response.success
    ? { success: true, message: "Todo Removed Successfully" }
    : { success: false, message: "Todo Not Removed, please try again" };
};

export const updateTodoLogic = async (index, upateTodoData) => {
  const { success, allTodosData } = await ReadTodosFromFile();
  if (!success) return { success: false, message: "No Todos Found" };

  const todoUpdateIndex = getDataIndex(allTodosData, parseInt(index), "index");
  if (todoUpdateIndex === -1)
    return { success: false, message: "Todo Not Found" };

  if (upateTodoData.priority) {
    upateTodoData.priority = priorityMapping.get(upateTodoData.priority);
  }
  if (upateTodoData.status) {
    upateTodoData.status = statusMapping.get(upateTodoData.status);
  }
  allTodosData[todoUpdateIndex] = {
    ...allTodosData[todoUpdateIndex],
    ...upateTodoData,
  };

  const updateTodo = Object.assign(allTodosData[todoUpdateIndex], {
    priority: reversePriorityMapping.get(
      allTodosData[todoUpdateIndex].priority
    ),
    status: reverseStatusMapping.get(allTodosData[todoUpdateIndex].status),
  });

  const response = await WriteToDosFromFile(allTodosData);
  return response.success
    ? {
        success: true,
        message: "Todo Update Successfully",
        updateTodo,
      }
    : { success: false, message: "Todo Not Updated, please try again" };
};
