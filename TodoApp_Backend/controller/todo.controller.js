import { ReadTodosFromFile } from "../services/fileRead.js"
import { WriteToDosFromFile } from "../services/fileWrite.js";
import { createId } from "../utils/createID.js";


// route to fetch all todos or filter based on query
export const getAllTodos = async (req, res, next) => {

    const { sort, status, priority } = req.query;
    console.log(status)
    
    // read todoslist form file 
    // let {success, allTodosData} = await ReadTodosFromFile();
    const { success, allTodosData } = await ReadTodosFromFile();
    let filterTodos = allTodosData

    //filter based on status
    if (status) {
        filterTodos = filterTodos.filter((todos) => todos.status === status);
    }  


    //filter based on status
    if (priority) {
        filterTodos = filterTodos.filter((todos) => todos.priority === priority);
    }

    //sort todo list
    if (sort == "asec") {
        filterTodos.sort((a, b) => a.index - b.index);
    } else if (sort === "desc") {
         filterTodos.sort((a, b) => b.index - a.index);
    }


    // if all todos fetch successfully 
    if (success === true && allTodosData.length > 0) {
        res.status(200).json({ message: "All Todos", AllTodosData: filterTodos });

    // if not fetch or no todos are there
    } else {
        res.status(400).json({ message: "No Todos Found" });
    }
}





// route to add new todo to list
export const addATodo = async (req, res, next) => {
    //get new todo data
    const todoData = req.body

    //list all data
    const TodoList = await ReadTodosFromFile();
    
    // if and only if i get all todos successfully
  
        
        // add index and id to new data
        todoData.index = TodoList.allTodosData.length + 1
        todoData.id = createId();

        // add new todo to todoslist
        TodoList.allTodosData.push(todoData)

        // write new data fully to file
        const todoAdd = await WriteToDosFromFile(TodoList.allTodosData);


         if (todoAdd.success === true) {
         res.status(200).json({ message: "Todo Addedd Successfully"});
        } else {
        res.status(400).json({message:"Todo Not Added, please try again"})
        }
}




// route to remove a todo from todos list
export const removeATodo = async (req, res, next) => {
    
    // getting the index of todo 
    const TodoIndex  = req.params.index;
    if (TodoIndex) {
        const {allTodosData} = await ReadTodosFromFile();
        let tempTodoListData = allTodosData;
        // console.log(tempTodoListData);
        

        // filter other data which is not to be remove
        tempTodoListData = tempTodoListData.filter((todo) => todo.index !== parseInt(TodoIndex));

        // writtin new data to the file 
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



// route to update a todo from todos list
export const updateATodo = async (req,res,next) => {
    const Todoindex = req.params.index

    // console.log(Todoindex);

    const upateTodoData = req.body;
    // console.log(upateTodoData);

    if (Todoindex) {

        const { allTodosData } = await ReadTodosFromFile();

        // find the index of todo which has to be upate
        const todoToUpdateIndex = allTodosData.findIndex((todo) => todo.index === parseInt(Todoindex));

        // console.log(todoToUpdateIndex)

        //merging exisitng todos with new todo data
        allTodosData[todoToUpdateIndex] = { ...allTodosData[todoToUpdateIndex], ...upateTodoData }
        
        // console.log(allTodosData);

        const todoUpdatedResponse = await WriteToDosFromFile(allTodosData);
        const updatedTodo = allTodosData[todoToUpdateIndex];
        // console.log(updatedTodo);
        // console.log(todoUpdatedResponse.success);
        
        if (todoUpdatedResponse.success === true) {
         res.status(200).json({ message: "Todo updated Successfully",updatedTodo });
        } else {
        res.status(400).json({message:"Todo Not Remove, please try again"})
        }
    } else {
        res.status(400).json({ message: "Please choose a Todo to update"});
    }

}
