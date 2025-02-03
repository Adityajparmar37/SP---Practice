// src/routes/index.js
import KoaRouter from "koa-router";
const router = new KoaRouter({ prefix: "/api/v1" });
import todoRoute from "../routes/todo.js";
const ROUTERS = [todoRoute];

ROUTERS.forEach((route) => {
  router.use(route.routes()).use(route.allowedMethods());
});

export default router;
