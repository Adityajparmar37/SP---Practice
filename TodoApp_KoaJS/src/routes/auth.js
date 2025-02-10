import Router from "koa-router";
import { loginUser, registerUser } from "../controller/auth.js";
import { validator } from "../middleware/validator.js";
import {
  validatePassword,
  validateEmail,
  isUserExist,
  validateUserName,
  validateLoginPassword,
} from "../validator/auth.js";

const route = new Router({ prefix: "/auth" });

route.post(
  "/register",
  validator([validateUserName, validateEmail, validatePassword, isUserExist]),
  registerUser
);

route.post(
  "/login",
  validator([validateEmail, validateLoginPassword]),
  loginUser
);

export default route;
