import { isValidTodoId } from "../shared/todoId.js";

export const validateStatus = (ctx) => {
  const validationErrors = [];
  const status = ctx.query.status || ctx.request.body.status;

  if (ctx.method === "POST" && !status) {
    validationErrors.push({
      field: "status",
      message: "Please provide a status",
    });
  }

  if (status && !["Incomplete", "Complete"].includes(status)) {
    validationErrors.push({
      field: "status",
      message: "Status must be either 'Incomplete' or 'Complete'",
    });
  }

  status
    ? (ctx.state.shared = { ...ctx.state.shared, status })
    : ctx.state.shared;

  return validationErrors.length > 0
    ? { error: { details: validationErrors } }
    : {};
};



export const validateSortOrder = (ctx) => {
  const validationErrors = [];
  const sort = ctx.query.sort;

  if (ctx.query.sort && !["AESC", "DESC"].includes(ctx.query.sort)) {
    validationErrors.push({
      field: "sort",
      message: "Sort must be either 'AESC' or 'DESC'",
    });
  }

  sort ? (ctx.state.shared = { ...ctx.state.shared, sort }) : ctx.state.shared;

  return validationErrors.length > 0
    ? { error: { details: validationErrors } }
    : {};
};



export const validatePriority = (ctx) => {
  const validationErrors = [];
  const priority = ctx.query.priority || ctx.request.body.priority;

  if (ctx.method === "POST" && !priority) {
    validationErrors.push({
      field: "priority",
      message: "Please provide a priority",
    });
  }

  if (priority && !["Low", "Medium", "High"].includes(priority)) {
    validationErrors.push({
      field: "priority",
      message: "Priority must be either 'Low', 'Medium', or 'High'",
    });
  }

  priority
    ? (ctx.state.shared = { ...ctx.state.shared, priority })
    : ctx.state.shared;

  return validationErrors.length > 0
    ? { error: { details: validationErrors } }
    : {};
};



export const validateDescription = (ctx) => {
  const validationErrors = [];
  const description = ctx.request.body.description;

  if (ctx.method === "POST" && !description) {
    validationErrors.push({
      field: "description",
      message: "Please provide a description",
    });
  }

  if (description && description.length < 3) {
    validationErrors.push({
      field: "description",
      message: "Description must be at least 3 characters long",
    });
  }

  description
    ? (ctx.state.shared = { ...ctx.state.shared, description })
    : ctx.state.shared;

  return validationErrors.length > 0
    ? { error: { details: validationErrors } }
    : {};
};



export const validateTodoId = (ctx) => {
  const validationErrors = [];
  const todoId = ctx.params.todoId;

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

  todoId
    ? (ctx.state.params = { ...ctx.state.params, todoId })
    : ctx.state.params;

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
