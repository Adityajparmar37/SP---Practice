import { Router } from "express";
import { addTodo, getAllTodos, removeTodo, updateTodo } from "../controller/todo.js";
import {validatorMiddleware } from "../middleware/validator.js";
import {todoValidator, updateTodoValidator} from "../validator/todo.js"


const route = Router();


route.get("/allTodos", getAllTodos); 
route.post("/addTodo", validatorMiddleware(todoValidator), addTodo);
route.delete("/removeTodo/:index", removeTodo);
route.put("/updateTodo/:index",validatorMiddleware(updateTodoValidator),updateTodo);


export default route;