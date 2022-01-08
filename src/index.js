import express from "express";
import createError from "http-errors";
import morgan from "morgan";
import dotenv from "dotenv";

import authorsRoute from "./routes/authors.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST;

app.set("json spaces", 2);

// Middlewares
app.use(express.json());
app.use(morgan("dev"));

// API routes
app.use("/authors", authorsRoute);

// 404
app.use((req, res, next) => {
  next(createError.NotFound());
});

// Error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({ message: err.message });
});

app.listen(PORT, () => {
  console.log(`started server on http://${HOST}:${PORT}`);
});
