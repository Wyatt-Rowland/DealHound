// frontend/src/GetProducts/useBestBuyProducts.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const useBestBuyProducts = (searchTerm, minSalePercentage = 20) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      if (!searchTerm) {
        setProducts([]);
        return;
      }
      try {
        const response = await axios.get('/api/bestbuy', {
          params: { searchTerm, minSalePercentage }
        });
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data from backend', error);
      }
    };
    fetchProducts();
  }, [searchTerm, minSalePercentage]);

  return products;
};

export default useBestBuyProducts;