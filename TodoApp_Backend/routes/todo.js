import { Router } from "express";
import {
  addTodo,
  getAllTodos,
  removeTodo,
  updateTodo,
} from "../controller/todo.js";
import { validatorMiddleware } from "../middleware/validatorMiddleware.js";
import {
  addTodoValidator,
  indexValidator,
  todoFieldValidator,
} from "../validator/todo.js";

const route = Router();

route.get("/allTodos", validatorMiddleware([todoFieldValidator]), getAllTodos);

route.post("/addTodo", validatorMiddleware([addTodoValidator]), addTodo);

route.delete(
  "/removeTodo/:index",
  validatorMiddleware([indexValidator]),
  removeTodo
);

route.put(
  "/updateTodo/:index",
  validatorMiddleware([indexValidator, todoFieldValidator]),
  updateTodo
);

export default route;
