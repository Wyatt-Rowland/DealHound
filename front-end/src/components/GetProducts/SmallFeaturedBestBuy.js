// SmallFeaturedBestBuy.js
import React, { useState } from 'react';
import useFeaturedBestBuyProducts from './useFeaturedBestBuy'; // Adjust the path as necessary
import { Box, Text, Image, Link, Flex, Badge, SimpleGrid, useBreakpointValue } from '@chakra-ui/react';

const SmallFeaturedBestBuy = () => {
  const featuredProduct = useFeaturedBestBuyProducts();
  const columns = useBreakpointValue({ base: 1, md: 3, lg: 4 });
  
  if (!featuredProduct) {
    return <Box>Loading...</Box>; // Or any other loading indicator you prefer
  }

  return (
    <Box px={{ base: '1rem', lg: '4rem' }} pb='1rem'>
        {/* <Text zIndex='10000' textColor='red'>whwa</Text> */}
      <Link href={featuredProduct.url} isExternal _hover={{ textDecoration: 'none' }} key={featuredProduct.sku || featuredProduct.name}>
      <Box maxW={{ base: 'xs', sm: 'xs', md: 'sm', lg: 'sm' }} borderWidth="1px" borderRadius="lg" overflow="hidden" height='lg' bg="gray.100" _hover={{ shadow: 'lg' }}>
              <Flex justifyContent="center" alignItems="center" height="40%" bg="gray.300">
                <Image zIndex='0' src={featuredProduct.image} alt={featuredProduct.name} maxH="80%" maxW={{ base: '90%' }} objectFit="contain" />
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

export default SmallFeaturedBestBuy;