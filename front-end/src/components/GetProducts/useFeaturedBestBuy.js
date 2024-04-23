import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAppContext } from '../../context/AppContext';

const useFeaturedBestBuyProducts = () => {
    const [featuredProduct, setFeaturedProduct] = useState(null); // Start with null and show placeholder until data is fetched
    const [isFetched, setIsFetched] = useState(false); // State to track if data has been fetched
    const { currentPage } = useAppContext();

    useEffect(() => {
        if (currentPage === 'home' && !isFetched) {
            const fetchFeaturedProduct = async () => {
                try {
                    const response = await axios.get('/api/bestBuy/featuredBestBuyProduct');
                    setFeaturedProduct(response.data);
                    setIsFetched(true); // Mark as fetched
                } catch (error) {
                    console.error('Error fetching featured product from backend', error);
                    // Use the placeholder product if fetching fails
                    setFeaturedProduct({
                        sku: 'loading',
                        name: 'Loading product...',
                        image: './Loading....jpg',
                        longDescription: 'Product information is loading...',
                        customerReviewAverage: '---',
                        regularPrice: '---',
                        salePrice: '---',
                        url: '#',
                        percentSavings: '---',
                    });
                }
            };

            fetchFeaturedProduct();
        } else {
            setFeaturedProduct(null)
        }

    }, [currentPage, isFetched]);

    return featuredProduct;
};

export default useFeaturedBestBuyProducts;