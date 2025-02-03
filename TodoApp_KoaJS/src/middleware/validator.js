import { sendResponse } from "../utils/sendResponse.js";

export const validator = (validators) => async (ctx, next) => {
  const error = [].concat(
    ...validators.map((validator) => validator(ctx)?.error?.details || [])
  );

  if (error.length > 0) {
    sendResponse(ctx, 400, { message: "Validator Error's:", error });
    return;
  }

  await next();
};
