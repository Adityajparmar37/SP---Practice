export const isValidTodoId = (todoId) => {
  const todoIdRegex =
    /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/i;
  if (!todoIdRegex.test(todoId)) return false;
  return true;
};
