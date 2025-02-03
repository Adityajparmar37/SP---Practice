// utils/sendResponse.js
export const sendResponse = (ctx, statusCode, { message, data, error }) => {
  ctx.status = statusCode;
  ctx.body = {
    message,
    data,
    error,
  };
};
