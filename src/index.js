import express from "express";
import createError from "http-errors";
import morgan from "morgan";
import dotenv from "dotenv";

import authorsRoute from "./routes/authors.js";
import "./config/init_mysql.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(morgan("dev"));
app.set("json spaces", 2);

app.use("/authors", authorsRoute);

// handle routes that doesn't exist
app.use((req, res, next) => {
  next(createError.NotFound());
});

// custom error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({ message: err.message });
});

app.listen(PORT, () => {
  console.log("server running");
});
