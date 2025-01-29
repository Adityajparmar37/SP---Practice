export const getDataIndex = (data, fieldValue, field) => {
  if (!Array.isArray(data))
    throw new Error("Invalid Input, Data must be a Array");

  if (!data || !fieldValue || !field)
    throw new Error(
      `Missing argument, please provide ${
        !data ? "data" : !fieldValue ? "fieldValue" : "field"
      }`
    );

  return data.findIndex((todo) => todo[field] === fieldValue);
};
