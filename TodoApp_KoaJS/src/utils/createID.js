import { v4 as uuidv4 } from "uuid";

// will generate unique uuid
export const generateId = () => {
  return uuidv4();
};
