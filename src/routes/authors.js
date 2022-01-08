import { Router } from "express";
import { NotFound } from "http-errors";

const router = Router();

const authors = [
  { id: 1, name: "Brandon Sanderson" },
  { id: 2, name: "Robert Jordan" },
  { id: 3, name: "Patrick Rothfuss" }
];

// get all authors
router.get("/", (req, res) => {
  res.status(200).json(authors);
});

// get single author
router.get("/:id", (req, res, next) => {
  try {
    const id = parseFloat(req.params.id);
    const author = authors.find((a) => a.id === id);
    if (!author) throw NotFound();
    res.status(200).json(author);
  } catch (error) {
    next(error);
  }
});

export default router;
