import Router from "koa-router";
import {
  createTodo,
  getAllTodos,
  deleteTodo,
  updateTodo,
  getTodo,
} from "../controller/todo.js";
import { validator } from "../middleware/validator.js";
import {
  validateDescription,
  validatePriority,
  validateSortOrder,
  validateStatus,
  validateTodoId,
  validateUpdateTodoData,
} from "../validator/todo.js";

const route = new Router({ prefix: "/todos" });

route.get(
  "/",
  validator([
    validateStatus,
    validatePriority,
    validateDescription,
    validateSortOrder,
  ]),
  getAllTodos
);

route.get("/:todoId", validator([validateTodoId]), getTodo);

route.post(
  "/",
  validator([validateStatus, validatePriority, validateDescription]),
  createTodo
);

route.delete("/:todoId", validator([validateTodoId]), deleteTodo);

route.patch(
  "/:todoId",
  validator([
    validateUpdateTodoData,
    validateTodoId,
    validateStatus,
    validatePriority,
    validateDescription,
  ]),
  updateTodo
);

export default route;
