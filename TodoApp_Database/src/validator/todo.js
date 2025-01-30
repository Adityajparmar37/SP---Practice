export const statusValidator = (status) => {
  if (
    typeof status !== "string" ||
    !["Incomplete", "Complete"].includes(status)
  )
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

export const todoIdValidator = ({ todoId }) => {
  const errors = [];
  if (!todoId) {
    errors.push({ field: "index", message: "Please provide Todo Id." });
  } else if (!/^\d+$/.test(todoId))
    errors.push({
      field: "index",
      message: "Todo Id must be a valid number.",
    });

  return errors.length > 0 ? { error: { details: errors } } : {};
};
