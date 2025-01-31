import { isValidTodoId } from "../shared/todoId.js";

export const validateStatus = (data, method) => {
  const validationErrors = [];

  if (method === "POST" && !data.status) {
    validationErrors.push({
      field: "status",
      message: "Please provide a status",
    });
  }

  if (
    data.status &&
    (typeof data.status !== "string" ||
      !["Incomplete", "Complete"].includes(data.status))
  ) {
    validationErrors.push({
      field: "status",
      message: "Status must be either 'Incomplete' or 'Complete'",
    });
  }

  return validationErrors.length > 0
    ? { error: { details: validationErrors } }
    : {};
};

export const validateSortOrder = (data) => {
  const validationErrors = [];

  if (
    data.sort &&
    (typeof data.sort !== "string" || !["AESC", "DESC"].includes(data.sort))
  ) {
    validationErrors.push({
      field: "sort",
      message: "Sort must be either 'AESC' or 'DESC'",
    });
  }

  return validationErrors.length > 0
    ? { error: { details: validationErrors } }
    : {};
};

export const validatePriority = (data, method) => {
  const validationErrors = [];

  if (method === "POST" && !data.priority) {
    validationErrors.push({
      field: "priority",
      message: "Please provide a priority",
    });
  }

  if (
    data.priority &&
    (typeof data.priority !== "string" ||
      !["Low", "Medium", "High"].includes(data.priority))
  ) {
    validationErrors.push({
      field: "priority",
      message: "Priority must be either 'Low', 'Medium', or 'High'",
    });
  }

  return validationErrors.length > 0
    ? { error: { details: validationErrors } }
    : {};
};

export const validateDescription = (data, method) => {
  const validationErrors = [];

  if (method === "POST" && !data.description) {
    validationErrors.push({
      field: "description",
      message: "Please provide a description",
    });
  }

  if (data.description && data.description.length < 3) {
    validationErrors.push({
      field: "description",
      message: "Description must be at least 3 characters long",
    });
  }

  return validationErrors.length > 0
    ? { error: { details: validationErrors } }
    : {};
};

export const validateTodoId = ({ todoId }) => {
  const validationErrors = [];

  if (!todoId) {
    validationErrors.push({
      field: "todoId",
      message: "Please provide Todo Id.",
    });
  } else if (!isValidTodoId(todoId)) {
    validationErrors.push({
      field: "todoId",
      message: "Todo Id must be a valid UUID.",
    });
  }

  return validationErrors.length > 0
    ? { error: { details: validationErrors } }
    : {};
};

export const validateUpdateTodoData = (data) => {
  const validationErrors = [];

  if (!data.description && !data.status && !data.priority) {
    validationErrors.push({
      field: "updateTodo",
      message: "Please provide data to update.",
    });
  }

  return validationErrors.length > 0
    ? { error: { details: validationErrors } }
    : {};
};
