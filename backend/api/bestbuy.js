const axios = require('axios');

const fetchProductsFromBestBuy = async (searchTerm) => {
  try {
    // Replace with actual Best Buy API details
    const response = await axios.get(`https://api.bestbuy.com/v1/products(name=${searchTerm}*)?format=json&apiKey=YOUR_API_KEY`);
    return response.data.products;
  } catch (error) {
    console.error("Error fetching from Best Buy API", error);
    throw error;
  }
};

module.exports = { fetchProductsFromBestBuy };