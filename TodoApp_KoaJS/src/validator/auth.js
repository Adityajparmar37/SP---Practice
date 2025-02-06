import { isUsernameValid } from "../shared/userName.js";
import { isEmailValid } from "../shared/email.js";
import { isPasswordValid } from "../shared/password.js";
import { findUser } from "../query/auth.js";

export const validateUserName = (ctx) => {
  const validationErrors = [];
  const userName = ctx.request.body.userName;

  if (!userName) {
    validationErrors.push({
      field: "userName",
      message: "userName must be provide",
    });
  } else if (!isUsernameValid(userName)) {
    validationErrors.push({
      field: "userName",
      message:
        "userName must be valid: alphabets, number and speical characters.",
    });
  }
  if (validationErrors.length > 0)
    return { error: { details: validationErrors } };

  ctx.state.user = { ...ctx.state.user, ...(userName ? { userName } : {}) };
};

export const validateEmail = (ctx) => {
  const validationErrors = [];
  const email = ctx.request.body.email;

  if (!email) {
    validationErrors.push({
      field: "email",
      message: "email must be provide",
    });
  } else if (!isEmailValid(email)) {
    validationErrors.push({
      field: "email",
      message: "Please provide a valid email",
    });
  }

  if (validationErrors.length > 0)
    return { error: { details: validationErrors } };

  ctx.state.user = { ...ctx.state.user, ...(email ? { email } : {}) };
};

export const validatePassword = (ctx) => {
  const validationErrors = [];
  const password = ctx.request.body.password;

  if (!password) {
    validationErrors.push({
      field: "password",
      message: "Password must be provided",
    });
  } else if (!isPasswordValid(password)) {
    validationErrors.push({
      field: "password",
      message: `Please provide a valid password:
- At least one uppercase letter
- At least one lowercase letter
- At least one digit
- At least one special character
- Minimum length of 8 characters
- Maximum length of 16 characters`,
    });
  }

  if (validationErrors.length > 0) {
    return { error: { details: validationErrors } };
  }

  ctx.state.user = { ...ctx.state.user, ...(password ? { password } : {}) };
};

export const validateUserExist = async (ctx) => {
  const validationErrors = [];
  const { email } = ctx.state.user;

  if (email) {
    const isUserExist = await findUser(email);
    if (isUserExist) {
      validationErrors.push({
        field: "User exist",
        message: "User already exists",
      });
    }
  }

  if (validationErrors.length > 0) {
    return { error: { details: validationErrors } };
  }
};

export const validateUserNotExist = async (ctx) => {
  const validationErrors = [];
  const { email } = ctx.state.user;
  console.log(email)

  if (email) {
    const isUserExist = await findUser(email);
    if (!isUserExist) {
      validationErrors.push({
        field: "User exist",
        message: "User not exists",
      });
    }
  }

  if (validationErrors.length > 0) {
    return { error: { details: validationErrors } };
  }
};
