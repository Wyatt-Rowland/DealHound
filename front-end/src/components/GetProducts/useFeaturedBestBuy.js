import { useState, useEffect } from 'react';
import axios from 'axios';

const placeholderProduct = {
  sku: 'loading',
  name: 'Loading product...',
  image: './Loading....jpg',
  longDescription: 'Product information is loading...',
  customerReviewAverage: '---',
  regularPrice: '---',
  salePrice: '---',
  url: '#',
  percentSavings: '---',
  // ...any other fields that your component expects
};

const useFeaturedBestBuyProducts = () => {
  const [featuredProduct, setFeaturedProduct] = useState(placeholderProduct);
  const bestBuyApiKey = process.env.REACT_APP_BEST_BUY_API_KEY;
  const MAX_RETRIES = 30; // Maximum number of retries
  const RETRY_DELAY = 1000; // Delay between retries in milliseconds

  const fetchProducts = async (attempt = 1) => { // Add attempt parameter with a default value
    try {
      const keywords = ['laptop', 'tablet', 'camera', 'headphones', 'smartphone', 'microwave', 'home', 'gym', 'health', 'sleep', 'recovery', 'wearables', 'baby'];
      const randomKeyword = keywords[Math.floor(Math.random() * keywords.length)];
      const encodedSearchTerm = encodeURIComponent(randomKeyword);

      const response = await axios.get(`https://api.bestbuy.com/v1/products((search=${encodedSearchTerm})&salePrice>40&percentSavings>40)`, {
        params: {
          format: 'json',
          apiKey: bestBuyApiKey,
          pageSize: 10,
          show: 'sku,customerReviewAverage,description,dollarSavings,image,name,regularPrice,salePrice,url,longDescription,percentSavings,accessories.sku',
        }
      });

      const { products } = response.data;
      if (products && products.length > 0) {
        const randomProductIndex = Math.floor(Math.random() * products.length);
        setFeaturedProduct(products[randomProductIndex]);
      }
    } catch (error) {
      if (error.code === "ERR_NETWORK" && attempt < MAX_RETRIES) {
        console.log(`Attempting retry ${attempt} of ${MAX_RETRIES}`);
        setTimeout(() => fetchProducts(attempt + 1), RETRY_DELAY);
      } else {
        console.error('Error fetching products from Best Buy API', error);
      }
    }
  };

  useEffect(() => {
    fetchProducts(); // This calls fetchProducts when the component mounts
  }, []); // The empty dependency array ensures this effect runs only once when the component mounts

  return featuredProduct;
};

export default useFeaturedBestBuyProducts;
