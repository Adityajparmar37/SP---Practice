import { isTodoIdValid } from "../shared/todoId.js";

export const statusValidator = (data, url) => {
  const errors = [];
  if (url.startsWith("/addTodo") && !data.status) {
    errors.push({
      field: "status",
      message: "Please provide a status",
    });
  }

  if (
    data.status &&
    (typeof data.status !== "string" ||
      !["Incomplete", "Complete"].includes(data.status))
  ) {
    errors.push({
      field: "status",
      message: "Status must be either 'Incomplete' or 'Complete'",
    });
  }

  return errors.length > 0 ? { error: { details: errors } } : {};
};

export const sortValidator = (data) => {
  const errors = [];
  if (
    data.sort &&
    (typeof data.sort !== "string" || !["ASEC", "DESC"].includes(data.sort))
  ) {
    errors.push({
      field: "sort",
      message: "Sort must be either 'ASEC' or 'DESC'",
    });
  }

  return errors.length > 0 ? { error: { details: errors } } : {};
};

export const priorityValidator = (data, url) => {
  const errors = [];

  if (url.startsWith("/addTodo") && !data.priority) {
    errors.push({
      field: "priority",
      message: "Please provide a priority",
    });
  }

  if (
    data.priority &&
    (typeof data.priority !== "string" ||
      !["Low", "Medium", "High"].includes(data.priority))
  ) {
    errors.push({
      field: "priority",
      message: "Priority must be either 'Low', 'Medium', or 'High'",
    });
  }

  return errors.length > 0 ? { error: { details: errors } } : {};
};

export const descriptionValidator = (data, url) => {
  const errors = [];
  if (url.startsWith("/addTodo") && !data.description) {
    errors.push({
      field: "description",
      message: "Please provide a description",
    });
  }

  if (data.description && data.description.length < 3) {
    errors.push({
      field: "description",
      message: "Description must be at least 3 characters long",
    });
  }

  return errors.length > 0 ? { error: { details: errors } } : {};
};

export const todoIdValidator = ({ todoId }) => {
  const errors = [];
  if (!todoId) {
    errors.push({ field: "todoId", message: "Please provide Todo Id." });
  } else if (!isTodoIdValid(todoId)) {
    errors.push({
      field: "todoId",
      message: "Todo Id must be a valid UUID.",
    });
  }
  return errors.length > 0 ? { error: { details: errors } } : {};
};
