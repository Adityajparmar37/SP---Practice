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
  validateUpdateTodoData,
} from "../validator/todo.js";
import { validateUserNotExist } from "../validator/auth.js";

const route = new Router({ prefix: "/todos" });

route.get(
  "/",
  auth,
  validator([
    validateUserNotExist,
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
  validator([validateUserNotExist, validateTodoId]),
  getTodo
);

route.post(
  "/",
  auth,
  validator([
    validateUserNotExist,
    validateStatus,
    validatePriority,
    validateDescription,
  ]),
  createTodo
);

route.delete(
  "/:todoId",
  validator([validateUserNotExist, validateTodoId]),
  deleteTodo
);

route.patch(
  "/:todoId",
  auth,
  validator([
    validateUserNotExist,
    validateUpdateTodoData,
    validateTodoId,
    validateStatus,
    validatePriority,
    validateDescription,
  ]),
  updateTodo
);

export default route;
