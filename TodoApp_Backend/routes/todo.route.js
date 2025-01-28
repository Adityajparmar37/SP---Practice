import { Router } from "express";
import { addTodo, getAllTodos, removeTodo, updateTodo } from "../controller/todo.controller.js";
import { handleAsync } from "../Handler/handleAsync.js";
import {validatorMiddleware } from "../middleware/validator.middleware.js";
import {todoValidator, updateTodoValidator} from "../validator/todo.validator.js"


const route = Router();


route.get("/allTodos", handleAsync(getAllTodos)); 
route.post("/addTodo", validatorMiddleware(todoValidator), handleAsync(addTodo));
route.delete("/removeTodo/:index", handleAsync(removeTodo));
route.put("/updateTodo/:index",validatorMiddleware(updateTodoValidator),handleAsync(updateTodo));


export default route;