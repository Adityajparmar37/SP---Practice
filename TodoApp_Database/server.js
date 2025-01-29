import app from "./app.js"
import { connectDB } from "./database/dbconnect.js";
const PORT = process.env.PORT;

connectDB()
  .then(() =>
    app.listen(PORT, (error) => {
      if (error) {
        return console.log("Error in starting server ", error);
      }
      console.log(`Server Listeing on ${PORT}`);
    })
  )
  .catch((error) => console.log("Error connecting in db ", error));
