//FeaturedBestBuy.js
import React, { useState } from 'react';
import useFeaturedBestBuyProducts from './useFeaturedBestBuy'; // Adjust the path as necessary
import { Box, Text, Image, Link, Flex, Badge, SimpleGrid, useBreakpointValue } from '@chakra-ui/react';

const FeaturedBestBuy = () => {
  const featuredProduct = useFeaturedBestBuyProducts();
  const columns = useBreakpointValue({ base: 2, md: 3, lg: 4 });
  
  return (
    <Box pt="1rem" px={{ base: '1rem', md: '5rem' }}>
      <Link href={featuredProduct.url} isExternal _hover={{ textDecoration: 'none' }} key={featuredProduct.sku || featuredProduct.name}>
      <Box maxW="xxl" borderWidth="1px" borderRadius="lg" overflow="hidden" height='lg' bg="gray.100" _hover={{ shadow: 'lg' }}>
              <Flex justifyContent="center" alignItems="center" height="200px" bg="gray.300">
                <Image zIndex='0' src={featuredProduct.image} alt={featuredProduct.name} maxH="180px" maxW='90%' objectFit="contain" />
              </Flex>
              <Box p="6">
                <Badge borderRadius="full" px="2" colorScheme="teal">Sale</Badge>
                <Text color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase" ml="2" isTruncated>
                  Best Buy &bull; {featuredProduct.percentSavings} OFF 
                </Text>
                <Text fontWeight="bold" as="h4" mt="1" isTruncated>{featuredProduct.name}</Text>
                <Text mt="2">${featuredProduct.salePrice}<Text as="s" ml="2" color="gray.500">${featuredProduct.regularPrice}</Text></Text>
                <Text fontSize="sm" mt="3" noOfLines={4}>{featuredProduct.longDescription}</Text>
                <Box pt="10px">{featuredProduct.customerReviewAverage}/5</Box>
              </Box>
            </Box>
      </Link>
    </Box>
  );
};

export default FeaturedBestBuy;