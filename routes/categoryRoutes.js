import express from "express";
import {
  getCategory,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../controller/categoryController.js";

const router = express.Router();

// get categories
router.get("/", getCategory);

// get category by id
router.get("/:id", getCategoryById);

// create category
router.post("/", createCategory);

// update category
router.put("/:id", updateCategory);

// delete category
router.delete("/:id", deleteCategory);

export default router;
