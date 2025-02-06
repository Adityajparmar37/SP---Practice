import Router from "koa-router";
import { loginUser, registerUser } from "../controller/auth.js";
import { validator } from "../middleware/validator.js";
import {
  validatePassword,
  validateEmail,
  validateUserExist,
  validateUserName,
} from "../validator/auth.js";

const route = new Router({ prefix: "/auth" });

route.post(
  "/register",
  validator([
    validateUserName,
    validateEmail,
    validatePassword,
    validateUserExist,
  ]),
  registerUser
);

route.post("/login", validator([validateEmail, validatePassword]), loginUser);

export default route;
