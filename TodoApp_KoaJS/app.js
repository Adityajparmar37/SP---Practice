import Koa from "koa";
import bodyParser from "koa-bodyparser";
import router from "./src/routes/index.js";

const app = new Koa();

app.use(bodyParser());
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = {
      success: false,
      message: err.message || "Internal Server Error",
    };
    //print error in slack
    console.error("Error:", err);
  }
});
app.use(router.routes()).use(router.allowedMethods());

export default app;
