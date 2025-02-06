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

  if (validationErrors.length > 0)
    return { error: { details: validationErrors } };

  ctx.state.shared = { ...ctx.state.shared, ...(status ? { status } : {}) };
};

export const validateSortOrder = (ctx) => {
  const validationErrors = [];
  const sort = ctx.query.sort;

  if (sort && !["AESC", "DESC"].includes(ctx.query.sort)) {
    validationErrors.push({
      field: "sort",
      message: "Sort must be either 'AESC' or 'DESC'",
    });
  }

  if (validationErrors.length > 0)
    return { error: { details: validationErrors } };

  ctx.state.shared = { ...ctx.state.shared, ...(sort ? { sort } : {}) };
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

  if (validationErrors.length > 0)
    return { error: { details: validationErrors } };

  ctx.state.shared = { ...ctx.state.shared, ...(priority ? { priority } : {}) };
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

  if (validationErrors.length > 0)
    return { error: { details: validationErrors } };

  ctx.state.shared = {
    ...ctx.state.shared,
    ...(description ? { description } : {}),
  };
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

  if (validationErrors.length > 0)
    return { error: { details: validationErrors } };

  ctx.state.params = { ...ctx.state.params, ...(todoId ? { todoId } : {}) };
};

export const validateUpdateTodoData = (ctx) => {
  const validationErrors = [];
  const { description, status, priority } = ctx.request.body;

  if (!description && !status && !priority) {
    validationErrors.push({
      field: "updateTodo",
      message: "Please provide data to update.",
    });
  }

  return validationErrors.length > 0
    ? { error: { details: validationErrors } }
    : {};
};


export const validatePage = (ctx) => {
  const validationErrors = [];
  const { page, limit } = ctx.query;

  // Validate page
  if (page !== undefined) {
    const parsedPage = parseInt(page, 10);
    if (isNaN(parsedPage) || parsedPage < 1) {
      validationErrors.push({
        field: "page",
        message: "Page must be a positive integer",
      });
    }
  }

  // Validate limit
  if (limit !== undefined) {
    const parsedLimit = parseInt(limit, 10);
    if (isNaN(parsedLimit) || parsedLimit < 1) {
      validationErrors.push({
        field: "limit",
        message: "Limit must be a positive integer",
      });
    }
  }

  if (validationErrors.length > 0) {
    ctx.status = 400;
    ctx.body = { error: { details: validationErrors } };
    return;
  }

  ctx.state.shared = {
    ...ctx.state.shared,
    ...(page ? { page: parseInt(page, 10) } : {}),
    ...(limit ? { limit: parseInt(limit, 10) } : {}),
  };
};
