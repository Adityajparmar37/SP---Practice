import express from "express";
import dotenv from "dotenv";
dotenv.config();

//import all routes
import TodoAPI from "./routes/todo.route.js"


// create server application from express instance
const app = express();
//reading the port from the env file 
const PORT = process.env.PORT;

//middlewares
app.use(express.json());



//routes
app.use("/api/todos",TodoAPI)


// listen to server port
app.listen(PORT, () => {
    console.log(`Server Listeing on ${PORT}`);
})