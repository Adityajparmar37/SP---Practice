import { reverseMap } from "./reverseMapping.js";

export const priorityMapping = new Map([
  ["High", 1],
  ["Medium", 2],
  ["Low", 3],
]);

export const statusMapping = new Map([
  ["Incomplete", "in_complete"],
  ["Complete", "complete"],
]);

export const sortMapping = new Map([
  ["ASEC", -1],
  ["DSEC", 1],
]);

export const reverseStatusMapping = reverseMap(statusMapping);
export const reversePriorityMapping = reverseMap(priorityMapping);
