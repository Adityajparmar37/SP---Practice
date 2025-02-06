import { handleAsync } from "../middleware/handleAsync.js";
import { registerUserHandler, loginUserHandler } from "../helper/auth.js";
import { sendResponse } from "../utils/sendResponse.js";

// @route   POST /api/v1/auth/register
// @desc    register user
export const registerUser = handleAsync(async (ctx) => {
  const user = ctx.state.user;
  const result = await registerUserHandler(user);

  if (!result.success) {
    sendResponse(ctx, 400, { message: result.message });
    return;
  }

  ctx.set("Authorization", `${result.token}`);
  sendResponse(ctx, 200, { message: result.message, data: result.token });
});

// @route   POST /api/v1/auth/login
// @desc    login user
export const loginUser = handleAsync(async (ctx) => {
  const user = ctx.state.user;
  const result = await loginUserHandler(user);

  if (!result.success) {
    sendResponse(ctx, 400, { message: result.message });
    return;
  }

  ctx.set("Authorization", `${result.token}`);
  sendResponse(ctx, 200, { message: result.message, data: result.token });
});
