import { connectDb } from "./config/connectDb.js";
import app from "./app.js";

const PORT = process.env.PORT;

connectDb()
  .then(() => {
    app.listen(PORT, (err) => {
      if (err) console.log("App error ", err);
      console.log(`App listing on ${PORT}`);
    });
  })
  .catch((error) => console.error("Server Error ", error));
