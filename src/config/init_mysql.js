import db from "./mysql.js";
//import User from "../models/User.js";

(async () => {
  try {
    await db.authenticate();
    //await User.sync({ alter: true });
    console.log("database connected");
  } catch (error) {
    console.log(error);
  }
})();
