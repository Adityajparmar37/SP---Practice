import Koa from "koa";
import bodyParser from "koa-bodyparser";
import router from "./src/routes/index.js";


const app = new Koa();

app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());

export default app;
