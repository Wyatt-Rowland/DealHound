// backend/src/api/bestBuy/bestbuy.js
const axios = require('axios');

const fetchBestBuyData = async ({ searchTerm = '', minSalePercentage = null, featured = false, pageSize = 10 }) => {
  
  try {
    let query = searchTerm ? `(search=${searchTerm})` : '';
    if (minSalePercentage) {
      query += `&percentSavings>${minSalePercentage}&onSale=true`;
    }
    if (featured) {
      // Optionally adjust th equery to fetch featured products
      // This is a placeholder for whatever logic you use to determine "featured" products
    }

    console.log(searchTerm, minSalePercentage, featured, pageSize)
    const apiKey = process.env.BEST_BUY_API_KEY;
    const response = await axios.get(`https://api.bestbuy.com/v1/products(${query})`, {
      params: {
        format: 'json',
        apiKey: apiKey,
        pageSize: pageSize,
        show: 'sku,description,dollarSavings,image,name,regularPrice,salePrice,url,longDescription,percentSavings',
        sort: 'description.asc',
      }
    });
    return response.data.products || [];
  } catch (error) {
    console.error('Error fetching data from Best Buy API', error);
    throw error;
  }
};

module.exports = { fetchBestBuyData };

// // backend/src/api/bestbuy.js
// const axios = require('axios');

// const fetchProductsFromBestBuy = async (searchTerm, minSalePercentage = null) => {
//   try {
//     const encodedSearchTerm = searchTerm; //Encoded in header
//     const bestBuyApiKey = process.env.BEST_BUY_API_KEY;
    
//     // Start building the query with the search term
//     let query = `(search=${encodedSearchTerm})`;

//     // Conditionally add filters based on minSalePercentage
//     if (minSalePercentage > 0) {
//       // If there is a minSalePercentage, add it to the filter along with onSale=true
//       query += `&percentSavings>${minSalePercentage}&onSale=true`;
//     }
//     // Note: If minSalePercentage is 0, null, or not provided, we don't filter by onSale or percentSavings

//     const response = await axios.get(`https://api.bestbuy.com/v1/products(${query})`, {
//       params: {
//         format: 'json',
//         apiKey: bestBuyApiKey,
//         pageSize: 89,
//         show: 'sku,description,dollarSavings,image,name,regularPrice,salePrice,url,longDescription,percentSavings',
//         sort: 'description',
//       }
//     });

//     return response.data.products;
//   } catch (error) {
//     console.error('Error fetching data from Best Buy API', error);
//     throw error;
//   }
// };

// module.exports = { fetchProductsFromBestBuy };
