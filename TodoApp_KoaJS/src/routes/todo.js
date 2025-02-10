import Router from "koa-router";
import {
  createTodo,
  getAllTodos,
  deleteTodo,
  updateTodo,
  getTodo,
} from "../controller/todo.js";
import { auth } from "../middleware/auth.js";
import { validator } from "../middleware/validator.js";
import {
  validateDescription,
  validatePriority,
  validateSortOrder,
  validateStatus,
  validateTodoId,
  validatePage,
  validateUpdateTodoData,
} from "../validator/todo.js";

const route = new Router({ prefix: "/todos" });

route.get(
  "/",
  auth,
  validator([
    validatePage,
    validateStatus,
    validatePriority,
    validateDescription,
    validateSortOrder,
  ]),
  getAllTodos
);

route.get(
  "/:todoId",
  auth,
  validator([validateTodoId]),
  getTodo
);

route.post(
  "/",
  auth,
  validator([
    validateStatus,
    validatePriority,
    validateDescription,
  ]),
  createTodo
);

route.delete(
  "/:todoId",
  validator([validateTodoId]),
  deleteTodo
);

route.patch(
  "/:todoId",
  auth,
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
