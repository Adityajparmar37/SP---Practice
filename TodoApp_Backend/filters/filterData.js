import { priorityMapping, statusMapping } from "../utils/constant.js";

export const filterData = (data, filterValue, filterField) => {
  if (!Array.isArray(data))
    throw new Error("Invalid Input, Data must be a Array");

  if (!data || !filterValue || !filterField)
    throw new Error(
      `Missing argument, please provide ${
        !data ? "data" : !filterValue ? "filterValue" : "filterField"
      }`
    );

  let filterType;
  if (filterField === "status") {
    filterType = statusMapping[filterValue];
  } else if (filterField === "priority") {
    // console.log("priority")
    filterType = priorityMapping[filterValue];
  }

  if (filterType === undefined)
    throw new Error(`Invalid ${filterField} value provided: ${filterValue}`);

  return data.filter((element) => element[filterField] === filterType);
};
