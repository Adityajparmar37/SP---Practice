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
  "/allTodos",
  validator([
    statusValidator,
    priorityValidator,
    descriptionValidator,
  ]),
  getTodos
);

route.post(
  "/addTodo",
  validator([statusValidator, priorityValidator, descriptionValidator]),
  addnewTodo
);

route.delete(
  "/removeTodo/:todoId",
  validator([todoIdValidator]),
  removeTodo
);

route.put(
  "/updateTodo/:todoId",
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
