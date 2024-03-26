// backend/src/api/bestbuy.js
const axios = require('axios');

const fetchProductsFromBestBuy = async (searchTerm, minSalePercentage = 20) => {
  try {
    const encodedSearchTerm = encodeURIComponent(searchTerm);
    const bestBuyApiKey = process.env.BEST_BUY_API_KEY; 
    const response = await axios.get(`https://api.bestbuy.com/v1/products((search=${encodedSearchTerm})&onSale=true)`, {
      params: {
        format: 'json',
        apiKey: bestBuyApiKey,
        pageSize: 99,
        show: 'sku,customerReviewAverage,description,dollarSavings,image,name,regularPrice,salePrice,url,longDescription,percentSavings,accessories.sku',
        sort: 'description',
      }
    });

    const productsWithSavings = response.data.products.filter(product => parseFloat(product.percentSavings) >= minSalePercentage);
    return productsWithSavings;
  } catch (error) {
    console.error('Error fetching data from Best Buy API', error);
    throw error; // Rethrow the error or handle it as needed
  }
};

module.exports = { fetchProductsFromBestBuy };
