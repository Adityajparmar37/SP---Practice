import { handleAsync } from "../middleware/handleAsync.js";
import { addTodoLogic, getAllTodosLogic, removeTodoLogic, updateTodoLogic } from "../helperFunction/TodoHelper.js";



export const getAllTodos = handleAsync (async (req, res, next) => {
    const { sort, status, priority } = req.query;
    const filters = { sort, status, priority };

    const result = await getAllTodosLogic(filters);

    if (!result.success) return res.status(400).json({ message: result.message });
    res.status(200).json({ message: "All Todos", AllTodosData: result.filterTodos });
})



export const addTodo = handleAsync(async (req, res, next) => {
    const todoData = req.body

    const result = await addTodoLogic(todoData)

    if (!result.success) return res.status(400).json({ message: result.message });
    res.status(200).json({ message: result.message, todoData: result.newTodoData });
    
})



export const removeTodo = handleAsync(async (req, res, next) => {
    const TodoIndex = req.params.index;
    if(!TodoIndex) return res.status(400).json({ message: "Please choose a Todo to delete"});
   
    const result = await removeTodoLogic(TodoIndex);

    if (!result.success) return res.status(400).json({ message: result.message });
    res.status(200).json({ message: result.message });
})



export const updateTodo = handleAsync(async (req, res) => {
    const TodoIndex = req.params.index;
    const upateTodoData = req.body;

    if (!TodoIndex) return res.status(400).json({ message: "Please choose a Todo to update" });

    const result = await updateTodoLogic(TodoIndex, upateTodoData);

    if (!result.success) return res.status(400).json({ message: result.message });
    res.status(200).json({ message: result.message, updatedTodo: result.updateTodo });
})