// useBestBuyProducts.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const useBestBuyProducts = (searchTerm, minSalePercentage = 20) => {
  const [products, setProducts] = useState([]);
  

  useEffect(() => {
    const encodedSearchTerm = encodeURIComponent(searchTerm);
    const bestBuyApiKey = process.env.REACT_APP_BEST_BUY_API_KEY;



    const fetchProducts = async () => {
      if (!searchTerm) {
        setProducts([]);
        return;
      }
      try {
        const response = await axios.get(`https://api.bestbuy.com/v1/products((search=${encodedSearchTerm})&onSale=true)`, {
          params: {
            format: 'json',
            apiKey: bestBuyApiKey,
            pageSize: 99,
            show: 'sku,customerReviewAverage,description,dollarSavings,image,name,regularPrice,salePrice,url,longDescription,percentSavings,accessories.sku',
            sort: 'description',
          }
        });
        const productsWithSavings = response.data.products.filter(product => parseFloat(product.percentSavings) > 20);
        setProducts(productsWithSavings);
      } catch (error) {
        console.error('Error fetching data from Best Buy API', error);
      }
    };
    fetchProducts();
  }, [searchTerm, minSalePercentage]);

  return products;
};

export default useBestBuyProducts;