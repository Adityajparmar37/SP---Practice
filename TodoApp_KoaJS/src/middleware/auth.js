import { sendResponse } from "../utils/sendResponse.js";
import { verifyToken } from "../utils/token.js";

export const auth = async (ctx, next) => {
  const token = ctx.headers.authorization?.split(" ")[1];

  if (!token)
    return sendResponse(ctx, 401, {
      message: "Unauthorized: Token not provided",
    });

  const isUserVerify = verifyToken(token);

  if (!isUserVerify)
    return sendResponse(ctx, 401, {
      message: "Unauthorized: Invalid Token",
    });

  ctx.state.user = isUserVerify;

  await next();
};
