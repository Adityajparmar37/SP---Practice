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
  priorityValidator,
  statusValidator,
  todoIdValidator,
} from "../validator/todo.js";

const route = Router();

route.get(
  "/allTodos",
  validatorMiddleware([
    statusValidator,
    priorityValidator,
    descriptionValidator,
  ]),
  getAllTodos
);

route.post(
  "/addTodo",
  validatorMiddleware([
    statusValidator,
    priorityValidator,
    descriptionValidator,
  ]),
  addTodo
);

route.delete(
  "/removeTodo/:todoId",
  validatorMiddleware([todoIdValidator]),
  removeTodo
);

route.put(
  "/updateTodo/:todoId",
  validatorMiddleware([
    todoIdValidator,
    statusValidator,
    priorityValidator,
    descriptionValidator,
  ]),
  updateTodo
);

export default route;
