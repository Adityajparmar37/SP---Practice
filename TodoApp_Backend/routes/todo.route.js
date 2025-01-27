import { Router } from "express";
import { addATodo, getAllTodos, removeATodo, updateATodo } from "../controller/todo.controller.js";
import { handleAsync } from "../Handler/handleAsync.js";
import { validatorMid } from "../middleware/validator.middleware.js";
import {todoValidator, updateTodoValidator} from "../validator/todo.validator.js"

//router instance to let know about routing
const route = Router();


//all todo routes with its controller
route.get("/allTodos", handleAsync(getAllTodos)); 
route.post("/addTodo", validatorMid(todoValidator), handleAsync(addATodo));
route.delete("/removeTodo/:index", handleAsync(removeATodo));
route.put("/updateTodo/:index",validatorMid(updateTodoValidator),handleAsync(updateATodo));


export default route;