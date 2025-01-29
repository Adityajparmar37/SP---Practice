import { reverseMap } from "./reverseMapping.js";

export const priorityMapping = new Map([
  ["Low", 1],
  ["Medium", 2],
  ["High", 3],
]);

export const statusMapping = new Map([
  ["Incomplete", "ic"],
  ["Complete", "c"],
]);

export const reverseStatusMapping = reverseMap(statusMapping);
export const reversePriorityMapping = reverseMap(priorityMapping);
