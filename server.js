import express from "express";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";

const app = express();
const PORT = 3000;

app.use(express.json());

// ini untuk routing
app.use("/category", categoryRoutes);
app.use("/product", productRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
