const express = require('express');
// const { fetchProductsFromAmazon } = require('../api/amazon');
const { fetchProductsFromBestBuy } = require('../api/bestbuy');

const router = express.Router();

router.get('/search', async (req, res) => {
  const { searchTerm } = req.query;
  try {
    // const amazonProducts = await fetchProductsFromAmazon(searchTerm);
    const bestBuyProducts = await fetchProductsFromBestBuy(searchTerm);
    res.json({ amazon: amazonProducts, bestBuy: bestBuyProducts });
  } catch (error) {
    res.status(500).send("Error fetching product data");
  }
});

module.exports = router;