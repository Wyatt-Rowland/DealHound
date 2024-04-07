// frontend/src/GetProducts/useBestBuyProducts.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAppContext } from '../../context/AppContext';

const useBestBuyProducts = (searchTerm, pageSize) => {
  const [products, setProducts] = useState([]);
  const { minSalePercentage } = useAppContext(); // Use context

  useEffect(() => {
    const fetchProducts = async () => {
      if (!searchTerm) {
        setProducts([]);
        return;
      }
      try {
        const response = await axios.get('/api/bestBuy/bestbuy', {
          params: { searchTerm, minSalePercentage, pageSize }
        });
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data from backend', error);
      }
    };
    fetchProducts();
  }, [searchTerm, minSalePercentage, pageSize]);

  return products;
};

export default useBestBuyProducts;