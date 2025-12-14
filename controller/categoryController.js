// INi untuk import database
import db from "../config/db.js";

// Get semua kategori
export const getCategory = (req, res) => {
  db.query("SELECT * FROM categories", (err, result) => {
    if (err) return res.status(500).json(err);

    res.json(result);
  });
};

// Get kategori berdasarkan ID
export const getCategoryById = (req, res) => {
  db.query(
    "SELECT * FROM categories WHERE id=?",
    [req.params.id],
    (err, result) => {
      if (err) return res.status(500).json(err);

      res.json(result[0]);
    }
  );
};

// buat category baru
export const createCategory = (req, res) => {
  const { name } = req.body;
  db.query("INSERT INTO categories (name) VALUES (?)", [name], (err) => {
    if (err) return res.status(500).json(err);

    res.json({ message: "Category created" });
  });
};

// update category
export const updateCategory = (req, res) => {
  const { name } = req.body;
  db.query(
    "UPDATE categories SET name=? WHERE id=?",
    [name, req.params.id],
    (err) => {
      if (err) return res.status(500).json(err);

      res.json({ message: "Category updated" });
    }
  );
};

// delete category
export const deleteCategory = (req, res) => {
  db.query("DELETE FROM categories WHERE id=?", [req.params.id], (err) => {
    if (err) return res.status(500).json(err);

    res.json({ message: "Category deleted" });
  });
};
