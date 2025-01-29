import express from "express";
import TodoAPI from "./routes/todo.js"


const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/todos",TodoAPI)

app.listen(PORT, () => {
    console.log(`Server Listeing on ${PORT}`);
})