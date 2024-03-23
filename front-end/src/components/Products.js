import React from "react";
import { Box, Text, VStack, Flex, Image, Link, Badge, Input, Button, HStack, SimpleGrid, useBreakpointValue } from '@chakra-ui/react';
import updatedFalseProducts from "./MockProducts";

const Products = () => {
  const columns = useBreakpointValue({ base: 2, md: 3, lg: 4 }); // Adjust the number of columns based on the breakpoint

  return (
    <Box
      bg="gray.900"
      pt={{ base: '8rem', md: '8rem' }} // Padding top to push content below the header on mobile view
      px={{ base: '1rem', md: '5rem' }} // Padding on the sides for some space
      minH="100vh" // Minimum height to take full screen height
    >
      <SimpleGrid columns={columns} spacing={5}>
        {updatedFalseProducts.map((product) => (
          <Link href={product.url} isExternal _hover={{ textDecoration: 'none' }} key={product.id}>
            <Box
              maxW="sm"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              height='lg'
              bg="white"
              _hover={{ shadow: 'lg' }} // Add a shadow on hover for better UX
            >
              <Flex justifyContent="center" alignItems="center" height="200px" bg="white">
                <Image zIndex='0' src={product.imageUrl} alt={product.name} maxH="180px" maxW='90%' objectFit="contain" />
              </Flex>
              <Box p="6">
                <Badge borderRadius="full" px="2" colorScheme="teal">
                  Sale
                </Badge>
                <Text
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                  ml="2"
                  isTruncated
                >
                  {product.store} &bull; {product.salePercentage} OFF
                </Text>
                <Text fontWeight="bold" as="h4" mt="1" isTruncated>
                  {product.name}
                </Text>
                <Text mt="2">
                  {product.salePrice}
                  <Text as="s" ml="2" color="gray.500">
                    {product.regularPrice}
                  </Text>
                </Text>
                <Text fontSize="sm" mt="3" noOfLines={4}>
                  {product.description}
                </Text>
              </Box>
            </Box>
          </Link>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Products;