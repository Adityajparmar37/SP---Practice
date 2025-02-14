import { isValidTodoId } from "../shared/todoId.js";

export const validateStatus = (ctx) => {
  const status = ctx.query.status || ctx.request.body.status;

  if (ctx.method === "POST" && !status) {
    return {
      field: "status",
      message: "Please provide a status",
    };
  }

  if (status && !["Incomplete", "Complete"].includes(status)) {
    return {
      field: "status",
      message: "Status must be either 'Incomplete' or 'Complete'",
    };
  }
  ctx.state.shared = { ...ctx.state.shared, ...(status ? { status } : {}) };
};

export const validateSortOrder = (ctx) => {
  const sort = ctx.query.sort;

  if (sort && !["AESC", "DESC"].includes(ctx.query.sort)) {
    return {
      field: "sort",
      message: "Sort must be either 'AESC' or 'DESC'",
    };
  }
  ctx.state.shared = { ...ctx.state.shared, ...(sort ? { sort } : {}) };
};

export const validatePriority = (ctx) => {
  const priority = ctx.query.priority || ctx.request.body.priority;

  if (ctx.method === "POST" && !priority) {
    return {
      field: "priority",
      message: "Please provide a priority",
    };
  }

  if (priority && !["Low", "Medium", "High"].includes(priority)) {
    return {
      field: "priority",
      message: "Priority must be either 'Low', 'Medium', or 'High'",
    };
  }

  ctx.state.shared = { ...ctx.state.shared, ...(priority ? { priority } : {}) };
};

export const validateDescription = (ctx) => {
  const description = ctx.request.body.description;

  if (ctx.method === "POST" && !description) {
    return {
      field: "description",
      message: "Please provide a description",
    };
  }

  if (description && description.length < 3) {
    return {
      field: "description",
      message: "Description must be at least 3 characters long",
    };
  }

  ctx.state.shared = {
    ...ctx.state.shared,
    ...(description ? { description } : {}),
  };
};

export const validateTodoId = (ctx) => {
  const todoId = ctx.params.todoId;

  if (!todoId) {
    return {
      field: "todoId",
      message: "Please provide Todo Id.",
    };
  } else if (!isValidTodoId(todoId)) {
    return {
      field: "todoId",
      message: "Todo Id must be a valid UUID.",
    };
  }

  ctx.state.params = { ...ctx.state.params, ...(todoId ? { todoId } : {}) };
};

export const validateUpdateTodoData = (ctx) => {
  const { description, status, priority } = ctx.request.body;

  if (!description && !status && !priority) {
    return {
      field: "updateTodo",
      message: "Please provide data to update.",
    };
  }
};

export const validatePage = (ctx) => {
  const { page, limit } = ctx.query;

  // Validate page
  if (page !== undefined) {
    const parsedPage = parseInt(page, 10);
    if (isNaN(parsedPage) || parsedPage < 1) {
      return {
        field: "page",
        message: "Page must be a positive integer",
      };
    }
  }

  // Validate limit
  if (limit !== undefined) {
    const parsedLimit = parseInt(limit, 10);
    if (isNaN(parsedLimit) || parsedLimit < 1) {
      return {
        field: "limit",
        message: "Limit must be a positive integer",
      };
    }
  }

  ctx.state.shared = {
    ...ctx.state.shared,
    ...(page ? { page: parseInt(page, 10) } : {}),
    ...(limit ? { limit: parseInt(limit, 10) } : {}),
  };
};
