import express from "express";
import {
  createAuthor,
  getAuthors,
  getAuthor,
  editAuthor,
  deleteAuthor
} from "../controllers/authors.js";

const router = express.Router();

// create an author
router.post("/", createAuthor);

// get all authors
router.get("/", getAuthors);

// get an author
router.get("/:id", getAuthor);

// edit an author
router.put("/:id", editAuthor);

// delete an author
router.delete("/:id", deleteAuthor);

export default router;
