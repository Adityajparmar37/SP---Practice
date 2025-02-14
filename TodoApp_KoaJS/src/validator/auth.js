import { isUsernameValid } from "../shared/userName.js";
import { isEmailValid } from "../shared/email.js";
import { isPasswordValid } from "../shared/password.js";
import { findUser } from "../query/auth.js";
import { comparePassword } from "../utils/password.js";

export const validateUserName = (ctx) => {
  const userName = ctx.request.body.userName;

  if (!userName) {
    return {
      field: "userName",
      message: "userName must be provide",
    };
  } else if (!isUsernameValid(userName)) {
    return {
      field: "userName",
      message:
        "userName must be valid: alphabets, number and speical characters.",
    };
  }
  ctx.state.user = { ...ctx.state.user, ...(userName ? { userName } : {}) };
};

export const validateEmail = (ctx) => {
  const email = ctx.request.body.email;

  if (!email) {
    return {
      field: "email",
      message: "email must be provide",
    };
  } else if (!isEmailValid(email)) {
    return {
      field: "email",
      message: "Please provide a valid email",
    };
  }
  ctx.state.user = { ...ctx.state.user, ...(email ? { email } : {}) };
  return;
};

export const validatePassword = (ctx) => {
  const password = ctx.request.body.password;

  if (!password) {
    return {
      field: "password",
      message: "password must be provide",
    };
  } else if (!isPasswordValid(password)) {
    return {
      field: "password",
      message: `Please provide a valid password:
- At least one uppercase letter
- At least one lowercase letter
- At least one digit
- At least one special character
- Minimum length of 8 characters
- Maximum length of 16 characters`,
    };
  }

  ctx.state.user = { ...ctx.state.user, ...(password ? { password } : {}) };
};

export const isUserExist = async (ctx) => {
  const { email } = ctx?.state.user;

  const isUserExist = await findUser(email);
  if (isUserExist) {
    return {
      field: "user",
      message: "user already exist",
    };
  }
};

export const validateLoginPassword = (ctx) => {
  const password = ctx.request.body.password;

  if (!password) {
    return {
      field: "password",
      message: "password must be provide",
    };
  }

  ctx.state.user = { ...ctx.state.user, ...(password ? { password } : {}) };
  return;
};

export const validateLoginCredential = async (ctx) => {
  const { email, password } = ctx?.state.user;
  const userExist = await findUser(email);
  if (!userExist) {
    return {
      field: "email",
      message: "user does not exist, please register",
    };
  }

  if (!(await comparePassword(password, userExist.password))) {
    return {
      field: "password",
      message: "please enter valid password",
    };
  }

  ctx.state.user = { ...ctx.state.user, ...(userExist ? { ... userExist } : {}) };
};
