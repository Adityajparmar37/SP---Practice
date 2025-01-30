import { ReadTodosFromFile } from "../../services/fileRead.js";
import { WriteToDosFromFile } from "../../services/fileWrite.js";
import { removeData } from ".././utils/removeData.js";
import { getDataIndex } from ".././utils/getdataIndex.js";
import { createId } from ".././utils/createId.js";
import {
  priorityMapping,
  reversePriorityMapping,
  reverseStatusMapping,
  statusMapping,
} from ".././utils/constant.js";
import { addTodoToDb, findTodosDb } from "../query/todo.js";

export const getAllTodosLogic = async (filter) => {
  let { status, priority, sort } = filter;
  if (priority) {
    priority = priorityMapping.get(priority);
  }
  if (status) {
    status = statusMapping.get(status);
  }

  Object.assign(filter, {
    priority,
    status,
  });

  let allTodosData = await findTodosDb(filter);
  if (allTodosData.length === 0)
    return { success: false, message: "No Todos Found" };
  allTodosData = allTodosData.map((todo) => ({
    ...todo,
    priority: reversePriorityMapping.get(todo.priority),
    status: reverseStatusMapping.get(todo.status),
  }));
  console.log(allTodosData);
  return { success: true, AllTodo: allTodosData };
};

export const addTodoLogic = async (newTodoData) => {
  const addTodo = newTodoData;
  Object.assign(newTodoData, {
    id: createId(),
    status: statusMapping.get(newTodoData.status),
    priority: priorityMapping.get(newTodoData.priority),
  });

  const { success, allTodosData } = await addTodoToDb();
  if (!success) return res.status(400).json({ message: "No Todos Found" });

  allTodosData.push(newTodoData);
  const response = await WriteToDosFromFile(allTodosData);
  return response.success
    ? {
        success: true,
        message: "Todo Addedd Successfully",
        addTodo,
      }
    : { success: false, message: "Todo Not Added, please try again" };
};

export const removeTodoLogic = async (index) => {
  const { success, allTodosData } = await ReadTodosFromFile();
  if (!success) return { success: false, message: "No Todos Found" };

  const todoIndex = getDataIndex(allTodosData, parseInt(index), "index");
  if (todoIndex === -1)
    return { success: false, message: "Todo does not exist" };

  let todoListAfterRemove = removeData(allTodosData, parseInt(index), "index");

  const response = await WriteToDosFromFile(todoListAfterRemove);
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
