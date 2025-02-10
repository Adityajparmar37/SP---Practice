export const isEmailValid = (email) => {
  const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,6}$/;
  console.log(email.length);

  if (!emailRegex.test(email) || email.length >= 320) return false;

  return true;
};
