import { isValidTodoId } from "../shared/todoId.js";

export const validateStatus = (ctx) => {
  const validationErrors = [];

  if (ctx.method === "POST" && !ctx.request.body.status) {
    validationErrors.push({
      field: "status",
      message: "Please provide a status",
    });
  }

  const status = ctx.query.status || ctx.request.body.status;

  if (status && !["Incomplete", "Complete"].includes(status)) {
    validationErrors.push({
      field: "status",
      message: "Status must be either 'Incomplete' or 'Complete'",
    });
  }

  return validationErrors.length > 0
    ? { error: { details: validationErrors } }
    : {};
};



export const validateSortOrder = (ctx) => {
  const validationErrors = [];

  if (ctx.query.sort && !["AESC", "DESC"].includes(ctx.query.sort)) {
    validationErrors.push({
      field: "sort",
      message: "Sort must be either 'AESC' or 'DESC'",
    });
  }

  return validationErrors.length > 0
    ? { error: { details: validationErrors } }
    : {};
};



export const validatePriority = (ctx) => {
  const validationErrors = [];

  if (ctx.method === "POST" && !ctx.request.body.priority) {
    validationErrors.push({
      field: "priority",
      message: "Please provide a priority",
    });
  }

  const priority = ctx.query.priority || ctx.request.body.priority;

  if (priority && !["Low", "Medium", "High"].includes(priority)) {
    validationErrors.push({
      field: "priority",
      message: "Priority must be either 'Low', 'Medium', or 'High'",
    });
  }

  return validationErrors.length > 0
    ? { error: { details: validationErrors } }
    : {};
};



export const validateDescription = (ctx) => {
  const validationErrors = [];

  if (ctx.method === "POST" && !ctx.request.body.description) {
    validationErrors.push({
      field: "description",
      message: "Please provide a description",
    });
  }

  if (ctx.request.body.description && ctx.request.body.description.length < 3) {
    validationErrors.push({
      field: "description",
      message: "Description must be at least 3 characters long",
    });
  }

  return validationErrors.length > 0
    ? { error: { details: validationErrors } }
    : {};
};



export const validateTodoId = (ctx) => {
  const validationErrors = [];

  if (!ctx.params.todoId) {
    validationErrors.push({
      field: "todoId",
      message: "Please provide Todo Id.",
    });
  } else if (!isValidTodoId(ctx.params.todoId)) {
    validationErrors.push({
      field: "todoId",
      message: "Todo Id must be a valid UUID.",
    });
  }

  return validationErrors.length > 0
    ? { error: { details: validationErrors } }
    : {};
};



export const validateUpdateTodoData = (ctx) => {
  const validationErrors = [];

  if (
    !ctx.request.body.description &&
    !ctx.request.body.status &&
    !ctx.request.body.priority
  ) {
    validationErrors.push({
      field: "updateTodo",
      message: "Please provide data to update.",
    });
  }

  return validationErrors.length > 0
    ? { error: { details: validationErrors } }
    : {};
};
