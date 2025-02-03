export const handleAsync = (controller) => async (ctx, next) => {
  try {
    await controller(ctx, next);
  } catch (error) {
    console.log("error", error);
    await next(error);
  }
};
