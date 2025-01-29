import express from "express";
import todoApi from "./routes/todo.js";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/todos", todoApi);

app.listen(PORT, () => {
  console.log(`Server Listeing on ${PORT}`);
});
