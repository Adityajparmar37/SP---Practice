import { priorityMapping, statusMapping } from "../utils/constant.js";

export const filterData = (data, filterValue, filterField) => {
  let filterType;
  if (filterField === "priority") {
    filterType = priorityMapping.get(filterValue);
  } else if (filterField === "status") {
    filterType = statusMapping.get(filterValue);
  }

  if (filterType === undefined)
    throw new Error(`Invalid ${filterField} value provided: ${filterValue}`);

  return data.filter((element) => element[filterField] === filterType);
};
