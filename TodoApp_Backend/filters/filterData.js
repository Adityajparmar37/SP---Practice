import { priorityMapping, statusMapping } from "../utils/constant.js";

export const filterData = (data, filterValue, filterField) => {
  let filterType;
  if (filterField === "status") {
    filterType = statusMapping[filterValue];
  } else if (filterField === "priority") {
    filterType = priorityMapping[filterValue];
  }

  if (filterType === undefined)
    throw new Error(`Invalid ${filterField} value provided: ${filterValue}`);

  return data.filter((element) => element[filterField] === filterType);
};
