import { Router } from "express";
import {
  addTodo,
  getAllTodos,
  removeTodo,
  updateTodo,
} from "../controller/todo.js";
import { validatorMiddleware } from "../middleware/validatorMiddleware.js";
import {
  descriptionValidator,
  indexValidator,
  priorityValidator,
  statusValidator,
  todoValidator,
  updateTodoValidator,
} from "../validator/todo.js";

const route = Router();

route.get(
  "/allTodos",
  validatorMiddleware([
    statusValidator,
    descriptionValidator,
    priorityValidator,
  ]),
  getAllTodos
);

route.post("/addTodo", validatorMiddleware([todoValidator]), addTodo);

route.delete(
  "/removeTodo/:index",
  validatorMiddleware([indexValidator]),
  removeTodo
);

route.put(
  "/updateTodo/:index",
  validatorMiddleware([indexValidator, updateTodoValidator]),
  updateTodo
);

export default route;
