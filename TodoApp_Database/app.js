import express from "express";
import todoRoute from "./src/routes/todo.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/todos", todoRoute);

export default app