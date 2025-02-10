import { connectDb } from "./src/config/connectDb.js";
import app from "./app.js";

const PORT = process.env.PORT;

connectDb()
  .then(() => {
    app.listen(PORT, (err) => {
      //print in slack error
      if (err) console.log("App error ", err);
      console.log(`App listing on ${PORT}`);
    });
  })
  //print in slack error
  .catch((error) => console.error("Server Error ", error));
