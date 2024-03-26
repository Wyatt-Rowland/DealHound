// backend/src/routes/products.js
const express = require('express');
const { fetchProductsFromBestBuy } = require('../api/bestbuy');
const router = express.Router();

router.get('/bestbuy', async (req, res) => {
  const { searchTerm, minSalePercentage } = req.query;
  try {
    const products = await fetchProductsFromBestBuy(searchTerm, minSalePercentage);
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch products from Best Buy" });
  }
});

module.exports = router;