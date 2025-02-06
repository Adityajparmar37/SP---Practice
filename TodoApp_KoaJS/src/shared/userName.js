export const isUsernameValid = (username) => {
  const usernameRegex = /^[A-Za-z0-9@._-]+$/;
  return usernameRegex.test(username);
};
