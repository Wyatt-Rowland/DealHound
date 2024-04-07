const axios = require('axios');

const fetchFeaturedProductsFromBestBuy = async () => {
    try {
        const keywords = ['laptop', 'tablet', 'headphones', 'smartphone', 'microwave', 'home', 'chair', 'sleep', 'recovery', 'baby'];
        const randomKeyword = keywords[Math.floor(Math.random() * keywords.length)];

        const response = await axios.get(`https://api.bestbuy.com/v1/products((search=${encodeURIComponent(randomKeyword)})&salePrice>40&percentSavings>40)`, {
            params: {
                format: 'json',
                apiKey: process.env.BEST_BUY_API_KEY,
                pageSize: 1,
                show: 'sku,image,name,regularPrice,salePrice,url,longDescription,percentSavings',
            },
        });

        const { products } = response.data;
        if (products && products.length > 0) {
            const randomProductIndex = Math.floor(Math.random() * products.length);
            // No need to wait for 1 second before returning
            return products[randomProductIndex];
        }
        return null; // Return null if no products are found
    } catch (error) {
        console.error('Error fetching featured products from Best Buy API', error);
        throw error;
    }
};

module.exports = { fetchFeaturedProductsFromBestBuy };





// const axios = require('axios');

// // Throttling mechanism
// let lastRequestTime = Date.now();
// const requestInterval = 1000; // Adjust this to match the API's rate limit

// const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// const throttledGetRequest = async (url, params) => {
//     const timeSinceLastRequest = Date.now() - lastRequestTime;
//     if (timeSinceLastRequest < requestInterval) {
//         await sleep(requestInterval - timeSinceLastRequest);
//     }
//     lastRequestTime = Date.now();
//     return axios.get(url, { params });
// };

// const fetchFeaturedProductsFromBestBuy = async () => {
//     const keywords = ['laptop', 'tablet', 'headphones', 'smartphone', 'microwave', 'home', 'chair', 'sleep', 'recovery', 'baby'];
//     const randomKeyword = keywords[Math.floor(Math.random() * keywords.length)];
//     const encodedSearchTerm = encodeURIComponent(randomKeyword);
//     const bestBuyApiKey = process.env.BEST_BUY_API_KEY; 

//     try {
//         const response = await throttledGetRequest(`https://api.bestbuy.com/v1/products((search=${encodedSearchTerm})&salePrice>40&percentSavings>40)`, {
//             format: 'json',
//             apiKey: bestBuyApiKey,
//             pageSize: 10,
//             show: 'sku,image,name,regularPrice,salePrice,url,longDescription,percentSavings',
//         });

//         const { products } = response.data;
//         if (products && products.length > 0) {
//             const randomProductIndex = Math.floor(Math.random() * products.length);
//             await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second
//             return products[randomProductIndex];
//         }
//         return null; // Return null if no products are found
//     } catch (error) {
//         console.error('Error fetching featured products from Best Buy API', error);
//         throw error;
//     }
// };

// module.exports = { fetchFeaturedProductsFromBestBuy };