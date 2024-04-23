// frontend/src/GetProducts/useInfiniteScroll.js
import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { debounce } from 'lodash';

const useInfiniteScroll = (searchTerm, pageSize) => {
    const minSalePercentage = 30;
    const featured = 'true'
    console.log(`Fetching products for: ${searchTerm}, ${pageSize}, ${featured}`);
    const [products, setProducts] = useState([]);
    // const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        // setLoading(true)
        const fetchProducts = debounce(async () => {
            const urlForBackend = process.env.BACKEND_API;
            console.log('Fetching products for:', searchTerm, featured, pageSize);
            try {
                const { data } = await axios.get(`${urlForBackend}/api/bestBuy/bestbuy`, {
                    params: { searchTerm, minSalePercentage, featured, pageSize},
                });
                setProducts(prevProducts => [...prevProducts, ...data]);
                // setProducts(data || []);
            } catch (error) {
                console.error('Error fetching products:', error);
                setError(error)
            }
            // setLoading(false);
        }, 500); 
        fetchProducts();

        return () => {
            fetchProducts.cancel();  // This is how you cancel a debounced function
        };
    }, []);
    // return { products, loading, error };
    return products;
};

export default useInfiniteScroll;
