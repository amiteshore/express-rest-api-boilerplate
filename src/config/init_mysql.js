import db from "./mysql.js";
//import Author from "../models/Author.js";

(async () => {
  try {
    await db.authenticate();
    //await Author.sync({ alter: true });
    console.log("database connected");
  } catch (error) {
    console.log(error);
  }
})();
