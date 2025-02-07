import bcrypt from "bcryptjs";

export const hashPassword = async (password) => await bcrypt.hash(password, 10);

export const comparePassword = async (password, loginPassword) =>
  await bcrypt.compare(password, loginPassword);
