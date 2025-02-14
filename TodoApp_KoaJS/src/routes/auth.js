import Router from "koa-router";
import { loginUser, registerUser } from "../controller/auth.js";
import { validator } from "../middleware/validator.js";
import {
  validatePassword,
  validateEmail,
  isUserExist,
  validateUserName,
  validateLoginPassword,
  validateLoginCredential,
} from "../validator/auth.js";

const route = new Router({ prefix: "/auth" });

route.post(
  "/register",
  validator([validateUserName, validateEmail, validatePassword, isUserExist]),
  registerUser
);

route.post(
  "/login",
  validator([validateEmail, validateLoginPassword, validateLoginCredential]),
  loginUser
);

export default route;
