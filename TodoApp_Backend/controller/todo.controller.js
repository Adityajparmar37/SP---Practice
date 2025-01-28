import { ReadTodosFromFile } from "../services/fileRead.js"
import { WriteToDosFromFile } from "../services/fileWrite.js";
import { createId } from "../utils/createID.js";



export const getAllTodos = async (req, res, next) => {

    const { sort, status, priority } = req.query;

    const { success, allTodosData } = await ReadTodosFromFile();
    let filterTodos = allTodosData

    if (status) {
        filterTodos = filterTodos.filter((todos) => todos.status === status);
    }  

    if (priority) {
        filterTodos = filterTodos.filter((todos) => todos.priority === priority);
    }

    if (sort == "ASEC") {
        filterTodos.sort((a, b) => a.index - b.index);
    } else if (sort === "DESC") {
         filterTodos.sort((a, b) => b.index - a.index);
    }

    if (success === true && allTodosData.length > 0) {
        res.status(200).json({ message: "All Todos", AllTodosData: filterTodos });

    } else {
        res.status(400).json({ message: "No Todos Found" });
    }
}




// route to add new todo to list
export const addTodo = async (req, res, next) => {
    const todoData = req.body

    const TodoList = await ReadTodosFromFile();
        todoData.index = TodoList.allTodosData.length + 1
        todoData.id = createId();

        // add new todo to todoslist
        TodoList.allTodosData.push(todoData)

        const todoAdd = await WriteToDosFromFile(TodoList.allTodosData);

         if (todoAdd.success === true) {
         res.status(200).json({ message: "Todo Addedd Successfully"});
        } else {
        res.status(400).json({message:"Todo Not Added, please try again"})
        }
}



export const removeTodo = async (req, res, next) => {
     
    const TodoIndex  = req.params.index;
    if (TodoIndex) {
        const {allTodosData} = await ReadTodosFromFile();
        let tempTodoListData = allTodosData;

        // filter other data which is not to be remove
        tempTodoListData = tempTodoListData.filter((todo) => todo.index !== parseInt(TodoIndex));

        const todoListAfterRemove = await WriteToDosFromFile(tempTodoListData);


        if (todoListAfterRemove.success === true) {
         res.status(200).json({ message: "Todo Remove Successfully"});
        } else {
        res.status(400).json({message:"Todo Not Remove, please try again"})
        }
    } else {
        res.status(400).json({ message: "Please choose a Todo to delete"});
    }
}




export const updateTodo = async (req,res,next) => {
    const Todoindex = req.params.index

    const upateTodoData = req.body
    if (Todoindex) {

        const { allTodosData } = await ReadTodosFromFile();

        const todoToUpdateIndex = allTodosData.findIndex((todo) => todo.index === parseInt(Todoindex));

        //merging exisitng todos with new todo data
        allTodosData[todoToUpdateIndex] = { ...allTodosData[todoToUpdateIndex], ...upateTodoData }
        

        const todoUpdatedResponse = await WriteToDosFromFile(allTodosData);
        const updatedTodo = allTodosData[todoToUpdateIndex];
        
        if (todoUpdatedResponse.success === true) {
         res.status(200).json({ message: "Todo updated Successfully",updatedTodo });
        } else {
        res.status(400).json({message:"Todo Not Remove, please try again"})
        }
    } else {
        res.status(400).json({ message: "Please choose a Todo to update"});
    }

}
