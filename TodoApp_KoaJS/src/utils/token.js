import jwt from "jsonwebtoken";

export const generateToken = (payload) =>
  jwt.sign(payload, process.env.SECRET_JWT_KEY, {
    expiresIn: "30s",
  });

export const verifyToken = (token) => {
  try {
    jwt.verify(token, process.env.SECRET_JWT_KEY);
  } catch (error) {
    // if token is not valid
    return null;
  }
};
