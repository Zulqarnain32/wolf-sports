const express = require("express")
const ProductModel = require("../models/ProductModel.js")

const router = express.Router();

router.get("/fetch", async (req, res) => {
    try {
        const products = await ProductModel.find({});
        res.json(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ message: "Server Error" });
    }
});

// Fetch a single product by ID
router.get("/:id", async (req, res) => {
    try {
      const product = await ProductModel.findById(req.params.id);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.json(product);
    } catch (error) {
      console.error("Error fetching product:", error);
      res.status(500).json({ message: "Server Error" });
    }
  });



module.exports = router