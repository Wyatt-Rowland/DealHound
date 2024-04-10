// frontend/src/GetProducts/useInfiniteScroll.js
import { useEffect, useState } from 'react';
import axios from 'axios';

const useInfiniteScroll = (searchTerm, pageSize, featured = true) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const { data } = await axios.get('/api/bestBuy/bestbuy', {
                    params: { searchTerm, pageSize, featured },
                });
                setProducts(prevProducts => [...prevProducts, ...data]);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
    }, [searchTerm, pageSize, featured]);
    return products;
};

export default useInfiniteScroll;
