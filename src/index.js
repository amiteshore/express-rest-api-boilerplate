import "./env";

import express from "express";
import morgan from "morgan";

import { notFound, genericErrorHandler } from "./middlewares/errorHandler";
import authorsRoute from "./routes/authors";

const app = express();
const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST;

app.set("json spaces", 2);

// Middlewares
app.use(express.json());
app.use(morgan("dev"));

// API routes
app.use("/authors", authorsRoute);

// Error middlewares
app.use(notFound);
app.use(genericErrorHandler);

app.listen(PORT, () => {
  console.log(`started server on http://${HOST}:${PORT}`);
});
