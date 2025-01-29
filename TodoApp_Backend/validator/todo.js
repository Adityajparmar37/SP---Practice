export const statusValidator = (status) => {
  if (typeof status !== "string" || !["Not Done", "Done"].includes(status))
    return {
      field: "status",
      message: "status must be either of Not Done or Done",
    };

  return null;
};
export const priorityValidator = (priority) => {
  console.log("priority", priority);
  if (
    typeof priority !== "string" ||
    !["Low", "Medium", "High"].includes(priority)
  )
    return {
      field: "priority",
      message: "priority must be either of Low, Medium or High",
    };

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

export const todoValidator = (data) => {
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

export const updateTodoValidator = (data) => {
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

  return errors.length > 0 ? { errors: { details: errors } } : {};
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
