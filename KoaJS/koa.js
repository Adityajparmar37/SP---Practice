// import Koa from "koa";

// const app = new Koa();

// app.use(async (ctx) => {
//   ctx.body = "Hello World";
// });

// app.use(async (ctx, next) => {
//   await next();
//   const rt = ctx.response.get("X-Response-Time");
//   console.log(`${ctx.method} ${ctx.url} - ${rt}`);
// });

// app.listen(3000, () => {
//   console.log("Listen on 3000");
// });

// import http from ("http");
// import https from ("https");

// import koa from ("koa");
// const app = new Koa();

// http.createServer(app.callback()).listen(3000, () => {
//   console.log(`Serving on PORT 3000`);
// });
// https.createServer(app.callback()).listen(3001, () => {
//   console.log(`Serving on PORT 3001`);
// });

// app.on("error", (err) => {
//   log.error("server error", err);
// });

// app.use(async (ctx) => {
//   ctx;
//   ctx.request;
//   ctx.response;
// });

// app.use(async (ctx) => {
//   ctx.state.user = "Aditya Parmar";
// });

// app.on("user:visit", (ctx) => {
//   console.log(`User visited: ${ctx.path} at ${new Date().toISOString()}`);
// });

// app.use(async (ctx, next) => {
//   ctx.app.emit("user:visit", ctx);
//   await next();
// });

// app.use(async (ctx) => {
//   ctx.body = "Welcome to our site!";
// });

// app.use(async (ctx) => {
//   ctx.body = {
//     messgae: "Hello world",
//     method: ctx.method,
//     path: ctx.path,
//     query: ctx.query,
//   };
// });

// import koaRouter from "@koa/router";
// import bodyParser from "koa-bodyparser";
// import session from "koa-session";

// const router = new koaRouter();

// app.use(bodyParser());

// router.get("/users", async (ctx) => {
//   ctx.body = { users: ["Alice", "Bob"] };
// });

// router.post("/users", async (ctx) => {
//   ctx.body = { message: "User created" };
// });

// app.use(router.routes());

// // This automatically handles 405 (Method Not Allowed) errors if a method is not supported.

// app.use(router.allowedMethods());

// app.keys = ["todoapp"];
// app.use(session(app));
// app.use(async (ctx) => {
//   ctx.session.view = (ctx.session.views || 0) + 1;
//   ctx.body = `Page Views: ${ctx.session.views}`;
// });

// // app.use(async (ctx) => (ctx.body = "Welcome to site"));

// app.use(async (ctx) => {
//   console.log(ctx.request.body);
//   ctx.body = { received: ctx.request.body };
// });

// app.listen(3000, () => {
//   console.log("Server running on port 3000");
// });

import Koa from "koa";
import Router from "@koa/router";
import bodyParser from "koa-bodyparser";
import session from "koa-session";

const app = new Koa();
const router = new Router();

app.keys = ["todoapp"];
app.use(session({}, app)); // Corrected session usage

app.use(bodyParser());

// Middleware to track user visits
app.use(async (ctx, next) => {
  ctx.app.emit("user:visit", ctx);
  await next();
});

// Logging user visits
app.on("user:visit", (ctx) => {
  console.log(`User visited: ${ctx.path} at ${new Date().toISOString()}`);
});

// API Routes
router.get("/users", async (ctx) => {
  ctx.body = { users: ["Alice", "Bob"] };
});

router.post("/users", async (ctx) => {
  console.log(ctx.request.body);
  ctx.body = { message: "User created", received: ctx.request.body };
});

router.get("/session", async (ctx) => {
  ctx.body = { session: ctx.session };
});

// Apply routes
app.use(router.routes());
app.use(router.allowedMethods()); // Handles 405 errors

// Session tracking middleware
app.use(async (ctx) => {
  ctx.session.views = (ctx.session.views || 0) + 1;
  console.log("Updated Session:", ctx.session);
  ctx.body = `Page Views: ${ctx.session.views}`;
});

// Start the server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
