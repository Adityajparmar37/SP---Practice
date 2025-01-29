export const removeData = (data, filterValue, filterField) => {
  if (!Array.isArray(data))
    throw new Error("Invalid Input, Data must be a Array");

  if (!data || !filterValue || !filterField)
    throw new Error(
      `Missing argument, please provide ${
        !data ? "data" : !filterValue ? "filterValue" : "filterField"
      }`
    );

  return data.filter((element) => element[filterField] !== filterValue);
};
