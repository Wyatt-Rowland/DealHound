import React, { useEffect, useRef, useState } from 'react';
import { Box, Button, HStack, Image, Text } from '@chakra-ui/react';
import useInfiniteScroll from '../GetProducts/useInfiniteScroll';
import axios from 'axios';

const InfiniteScrollBar = () => {
    const products = useInfiniteScroll('monitors', 35, true, 10)
    const [page, setPage] = useState(1);
    const loaderRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const first = entries[0];
                if (first.isIntersecting) {
                    setPage((prevPage) => prevPage + 1);
                }
            },
            { threshold: 0.1 }
        );

        if (loaderRef.current) {
            observer.observe(loaderRef.current);
        }

        // Cleanup function
        return () => {
            if (loaderRef.current) {
                observer.unobserve(loaderRef.current);
            }
        };
    }, []);

    return (
        <Box overflowX="scroll" whiteSpace="nowrap" p="4">
            <HStack spacing="20px">
                {products.map((product, index) => (
                    <Box key={index} w="160px" boxShadow="md" p="5" bg="white" borderRadius="md" textAlign="center">
                        <Image src={product.image} alt={product.name} mx="auto" />
                        <Text fontSize="sm" mt="2" isTruncated>{product.name}</Text>
                        {/* Add more product details here */}
                    </Box>
                ))}
                <div ref={loaderRef}>
                    <Button isLoading>Loading more...</Button>
                </div>
            </HStack>
        </Box>
    );
};

export default InfiniteScrollBar;
