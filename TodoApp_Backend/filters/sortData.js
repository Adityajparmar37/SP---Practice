import { sortMapping } from "../utils/constant.js";

export const sortData = (data, sort, sortField) => {
  if (!Array.isArray(data))
    throw new Error("Invalid Input, Data must be a Array");

  if (!data || !sort || !sortField)
    throw new Error(
      `Missing argument, please provide ${
        !data ? "data" : !sort ? "filterValue" : "sortField"
      }`
    );

  const sortOrder = sortMapping[sort];
  if (sortOrder === "Descending")
    return data.sort((a, b) => b[sortField] - a[sortField]);
  else if (sortOrder === "Asecending")
    return data.sort((a, b) => a[sortField] - b[sortField]);
  else throw new Error("Invalid sort type, must be ASEC or DSEC");
};
