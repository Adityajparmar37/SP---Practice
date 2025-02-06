import { findUser, insertUser } from "../query/auth.js";
import { comparePassword, hashPassword } from "../utils/password.js";
import { generateToken } from "../utils/token.js";
import { generateId } from "../utils/createID.js";

const createToken = (user) =>
  generateToken({
    _id: user._id,
    userName: user.userName,
    email: user.email,
    password: user.password,
  });

export const registerUserHandler = async (userData) => {
  const hashedPassword = await hashPassword(userData.password);
  const userId = generateId();
  Object.assign(userData, { _id: userId, password: hashedPassword });

  const newUser = await insertUser(userData);
  if (!newUser)
    return { success: false, message: "User not register, Please try again" };

  return {
    success: true,
    message: "User register Successfully",
    token: createToken(userData),
  };
};

export const loginUserHandler = async (userData) => {
  const userExist = await findUser(userData.email);
  if (!userExist)
    return { success: false, message: "User not found, Please register" };
  if (!comparePassword(userExist.password, userData.password)) {
    return { success: false, message: "Please provide a vaild password" };
  }
  return {
    success: true,
    message: "User login Successfully",
    token: createToken(userExist),
  };
};
