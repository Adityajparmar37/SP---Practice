import { ReadTodosFromFile } from "../services/fileRead.js"
import { WriteToDosFromFile } from "../services/fileWrite.js"
import { sortData } from "../filters/sortData.js";
import { filterData } from "../filters/filterData.js";
import { removeData } from "../filters/removeData.js";
import { createId } from "../utils/createID.js";
import { getDataIndex } from "../filters/getdataIndex.js";


export const getAllTodosLogic = async (filters) => {
    const { sort, status, priority } = filters;
    const { success, allTodosData } = await ReadTodosFromFile();
    
    if (!success || allTodosData.length === 0) return { success: false, message: "No Todos Found" };
    
    let filterTodos = allTodosData;
    if (status) filterTodos = filterData(filterTodos, status, "status");
    if (priority) filterTodos = filterData(filterTodos, priority, "priority");
    if (sort) sortData(filterTodos, sort, "index");

    return { success: true, filterTodos };
}


export const addTodoLogic = async (newTodoData) => {
  const { success, allTodosData} = await ReadTodosFromFile();
    if (!success) return res.status(400).json({ message: "No Todos Found" }); 

    newTodoData.index = allTodosData.length + 1
    newTodoData.id = createId();
    allTodosData.push(newTodoData)
    const response = await WriteToDosFromFile(allTodosData);

    return response.success 
        ? { success: true, message: "Todo Addedd Successfully", newTodoData }
        : { success: false, message: "Todo Not Added, please try again" }
}

export const removeTodoLogic = async (TodoIndex) => {
    const { success, allTodosData } = await ReadTodosFromFile();
    if (!success) return { success: false, message: "No Todos Found" };

    const todoIndex = getDataIndex(allTodosData, parseInt(TodoIndex), "index")
    if (todoIndex === -1) return { success: false, message: "Todo Not Found" }
    
    let tempTodoListData = removeData(allTodosData, parseInt(TodoIndex), "index");
    const response = await WriteToDosFromFile(tempTodoListData);

    return response.success 
        ? { success: true, message: "Todo Removed Successfully" }
        : { success: false, message: "Todo Not Removed, please try again" };
}


export const updateTodoLogic = async (TodoIndex, upateTodoData) => {
    const { success, allTodosData } = await ReadTodosFromFile();
    if (!success) return { success: false, message: "No Todos Found" };

    const todoUpdateIndex = getDataIndex(allTodosData, parseInt(TodoIndex), "index")
    console.log(todoUpdateIndex)
    if (todoUpdateIndex === -1) return { success: false, message: "Todo Not Found" };

    allTodosData[todoUpdateIndex] = { ...allTodosData[todoUpdateIndex], ...upateTodoData };
    const response = await WriteToDosFromFile(allTodosData);

    return response.success
     ? {success: true, message: "Todo Update Successfully" , updateTodo:  allTodosData[todoUpdateIndex]} : { success: false, message: "Todo Not Updated, please try again" };
}