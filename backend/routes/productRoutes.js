// backend/src/routes/productRoutes.js
const express = require('express');
const NodeCache = require("node-cache");
const { fetchBestBuyData } = require('../api/bestBuy/bestbuy');
const router = express.Router();

// Cache setup remains the same
const cache = new NodeCache({ stdTTL: 300 });

router.get('/bestBuy/bestbuy', async (req, res) => {
  const { searchTerm, minSalePercentage, featured, pageSize } = req.query;
  const key = `products-${searchTerm}-${minSalePercentage}-${featured}`;
  const cachedData = cache.get(key);
  if (cachedData) {
    console.log('Serving from cache');
    return res.json(cachedData);
  }

  console.log('Fetching new data');
  try {
    const products = await fetchBestBuyData({ searchTerm, minSalePercentage, featured: featured === 'true', pageSize });
    cache.set(key, products);
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch products" });
  }
});

module.exports = router;


// // backend/src/routes/productRoutes.js
// const express = require('express');
// const NodeCache = require("node-cache");
// const { fetchProductsFromBestBuy } = require('../api/bestBuy/bestbuy');
// const { fetchFeaturedProductsFromBestBuy } = require('../api/bestBuy/featuredBestBuyProduct');
// const router = express.Router();

// // Set up the cache. Items will be kept for 5 minutes (300 seconds)
// const cache = new NodeCache({ stdTTL: 300 });

// router.get('/bestBuy/bestbuy', async (req, res) => {
//   const { searchTerm, minSalePercentage } = req.query;
//   // Create a unique key for each combination of searchTerm and minSalePercentage
//   const key = `products-${searchTerm}-${minSalePercentage}`;

//   // Try to get data from the cache
//   const cachedData = cache.get(key);
//   if (cachedData) {
//     console.log('Serving from cache');
//     return res.json(cachedData);
//   }
//   console.log('Fetching new data');
//   try {
//     const products = await fetchProductsFromBestBuy(searchTerm, minSalePercentage);
//     // Save the fetched data in the cache
//     cache.set(key, products);
//     res.json(products);
//   } catch (error) {
//     res.status(500).json({ message: "Failed to fetch products from Best Buy" });
//   }
// });

// // Route for fetching a featured product
// router.get('/bestBuy/featuredBestBuyProduct', async (req, res) => {
//   // Similar caching logic can be applied here if needed

//   try {
//     const featuredProduct = await fetchFeaturedProductsFromBestBuy();
//     console.log('featured')
//     if (featuredProduct) {
//       res.json(featuredProduct);
//     } else {
//       res.status(404).json({ message: "No featured product found" });
//     }
//   } catch (error) {
//     res.status(500).json({ message: "Failed to fetch featured product from Best Buy" });
//   }
// });

// module.exports = router;