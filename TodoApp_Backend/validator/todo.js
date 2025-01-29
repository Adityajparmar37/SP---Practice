export const statusValidator = (status) => {
  if (typeof status !== "string" || !["Incomplete", "Complete"].includes(status))
    return {
      field: "status",
      message: "status must be either of Incomplete or Complete",
    };

  return null;
};

export const sortValidator = (sort) => {
  if (typeof sort !== "string" || !["ASEC", "DESC"].includes(sort))
    return {
      field: "sort",
      message: "sort must be either ASEC or DESC",
    };
};

export const priorityValidator = (priority) => {
  if (
    typeof priority !== "string" ||
    !["Low", "Medium", "High"].includes(priority)
  ) {
    return {
      field: "priority",
      message: "priority must be either of Low, Medium or High",
    };
  }

  return null;
};

export const descriptionValidator = (description) => {
  if (description.length < 3)
    return {
      field: "description",
      message: "Description must be of atleast 3 character",
    };

  return null;
};

export const addTodoValidator = (data) => {
  const errors = [];

  if (!data.status || !data.description || !data.priority)
    return { error: { details: ["Please provide all required data"] } };

  const statusError = statusValidator(data.status);
  if (statusError) errors.push(statusError);

  const descriptionError = descriptionValidator(data.description);
  if (descriptionError) errors.push(descriptionError);

  const priorityError = priorityValidator(data.priority);
  if (priorityError) errors.push(priorityError);

  return errors.length > 0 ? { error: { details: errors } } : {};
};

export const todoFieldValidator = (data) => {
  const errors = [];

  if (data.status) {
    const statusError = statusValidator(data.status);
    if (statusError) errors.push(statusError);
  }

  if (data.description) {
    const descriptionError = descriptionValidator(data.description);
    if (descriptionError) errors.push(descriptionError);
  }

  if (data.priority) {
    const priorityError = priorityValidator(data.priority);
    if (priorityError) errors.push(priorityError);
  }

  if (data.sort) {
    const sortError = sortValidator(data.sort);
    if (sortError) errors.push(sortError);
  }

  return errors.length > 0 ? { error: { details: errors } } : {};
};

export const indexValidator = ({ index }) => {
  const errors = [];
  if (!index) {
    errors.push({ field: "index", message: "Please provide Todo index." });
  } else if (!/^\d+$/.test(index))
    errors.push({
      field: "index",
      message: "Todo Index must be a valid number.",
    });

  return errors.length > 0 ? { error: { details: errors } } : {};
};
