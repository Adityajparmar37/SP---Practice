export const getDataIndex = (data, fieldValue, field) => {
  return data.findIndex((todo) => todo[field] === fieldValue);
};
