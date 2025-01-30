import express from "express";
import todoRoute from "./src/routes/todo.js";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/todos", todoRoute);

export default app