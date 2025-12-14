// Import database
import db from "../config/db.js";

// Get semua produk
export const getProducts = (req, res) => {
  db.query("SELECT * FROM products", (err, result) => {
    if (err) return res.status(500).json(err);

    res.json(result);
  });
};

// Get produk berdasarkan ID
export const getProductById = (req, res) => {
  db.query(
    "SELECT * FROM products WHERE id=?",
    [req.params.id],
    (err, result) => {
      if (err) return res.status(500).json(err);

      res.json(result[0]);
    }
  );
};

// Create produk baru
export const createProduct = (req, res) => {
  const { category_id, name, price } = req.body;
  db.query(
    "INSERT INTO products (category_id, name, price) VALUES (?,?,?)",
    [category_id, name, price],
    (err) => {
      if (err) return res.status(500).json(err);

      res.json({ message: "Product created" });
    }
  );
};

// Update produk
export const updateProduct = (req, res) => {
  const { name, price } = req.body;
  db.query(
    "UPDATE products SET name=?, price=? WHERE id=?",
    [name, price, req.params.id],
    (err) => {
      if (err) return res.status(500).json(err);

      res.json({ message: "Product updated" });
    }
  );
};

// Delete produk
export const deleteProduct = (req, res) => {
  db.query("DELETE FROM products WHERE id=?", [req.params.id], (err) => {
    if (err) return res.status(500).json(err);

    res.json({ message: "Product deleted" });
  });
};
