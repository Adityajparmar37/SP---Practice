import { Router } from "express";
import {
  addnewTodo,
  getTodos,
  removeTodo,
  updateTodo,
} from "../controller/todo.js";
import { validator } from "../middleware/validator.js";
import {
  descriptionValidator,
  priorityValidator,
  statusValidator,
  todoIdValidator,
  updateTodoData,
} from "../validator/todo.js";

const route = Router();

route.get(
  "/",
  validator([
    statusValidator,
    priorityValidator,
    descriptionValidator,
  ]),
  getTodos
);

route.post(
  "/",
  validator([statusValidator, priorityValidator, descriptionValidator]),
  addnewTodo
);

route.delete(
  "/:todoId",
  validator([todoIdValidator]),
  removeTodo
);

route.put(
  "/:todoId",
  validator([
    updateTodoData,
    todoIdValidator,
    statusValidator,
    priorityValidator,
    descriptionValidator,
  ]),
  updateTodo
);

export default route;
