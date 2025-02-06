import jwt from "jsonwebtoken";

export const generateToken = (payload) =>
  jwt.sign(payload, process.env.SECRET_JWT_KEY, {
    expiresIn: "1h",
  });

export const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.SECRET_JWT_KEY);
  } catch (error) {
    console.log(error)
    // if token is not valid
    return null;
  }
};
