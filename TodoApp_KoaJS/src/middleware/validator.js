import { sendResponse } from "../utils/sendResponse.js";
import Bluebird from "bluebird";

export const validator = (validators) => async (ctx, next) => {
  const errors = await Bluebird.mapSeries(validators, async (validator) => {
    const result = await validator(ctx);
    return result?.error?.details || [];
  });
  const flattenedErrors = errors.flat();  

  if (flattenedErrors.length > 0) {
    sendResponse(ctx, 400, {
      message: "Validator Errors:",
      error: flattenedErrors,
    });
    return;
  }

  await next();
};
