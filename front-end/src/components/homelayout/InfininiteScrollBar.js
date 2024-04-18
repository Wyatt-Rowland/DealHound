import React, { useRef, useEffect, useState, useCallback, useMemo } from 'react';
import { Box, Center, Link, useBreakpointValue, Spinner, Badge, HStack, Image, Text, IconButton, Link as ChakraLink } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { debounce } from 'lodash'; // Debounce function to manage scroll events
import useInfiniteScroll from '../GetProducts/useInfiniteScroll';


const InfiniteScrollBar = React.memo(() => {
  const scrollBoxRef = useRef(null);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const scrollIntervalRef = useRef(null);
  const keywords = ["gaming", "televisions", "monitors", "desktops", "mice", "keyboards"];
  const randomKeyword = useMemo(() => {
      return keywords[Math.floor(Math.random() * keywords.length)];
  }, []);
  const searchTerm = randomKeyword;
  const pageSize = 10;

  console.log("I am updating many times")

  const products = useInfiniteScroll(`${searchTerm}`, pageSize);


  
  // Responsiveness: Adjust based on viewport size
  const mediaQueryResults = useBreakpointValue({ base: '60vw', md: '60vw', lg: '60vw' });
  const boxWidth = useMemo(() => mediaQueryResults, [mediaQueryResults]);
  const imageSize = useBreakpointValue({ base: '8rem', md: '10rem', lg: '12rem' });
  const scrollAmount = boxWidth

  const scrollRight = useCallback(() => {
    scrollBoxRef.current?.scrollBy({ left: scrollBoxRef.current.offsetWidth + 20, behavior: 'smooth' });
  }, []);

  const scrollLeft = useCallback(() => {
    scrollBoxRef.current?.scrollBy({ left: -scrollBoxRef.current.offsetWidth, behavior: 'smooth' });
  }, []);

  const startAutoScroll = useCallback(() => {
    if (!isUserInteracting) {
      scrollIntervalRef.current = setInterval(scrollRight, 5000);
    }
  }, [isUserInteracting, scrollRight]);

  const stopAutoScroll = useCallback(() => {
    clearInterval(scrollIntervalRef.current);
    scrollIntervalRef.current = null;
  }, []);

  useEffect(() => {
    startAutoScroll();
    return () => {
      stopAutoScroll(); // Clean up interval on component unmount
    };
  }, [isUserInteracting, startAutoScroll, stopAutoScroll, scrollRight]); // Restart interval only if isUserInteracting changes

  console.log(products);  // Check what products contains before using .map()


  return (
    <Center position="relative">
      <IconButton
        icon={<ChevronLeftIcon />}
        position="absolute"
        left="5%"
        top="50%"
        transform="translateY(-50%)"
        zIndex={2}
        onClick={scrollLeft}
      />
      <Box maxW='60vw' ref={scrollBoxRef} overflowX="hidden" whiteSpace="nowrap">
        <HStack spacing='20px' width='full'>
          {Array.isArray(products) && products.length > 0 ? (
            products.map((product, index) => (
            <Box minW={boxWidth} maxW={boxWidth} key={index} boxShadow="md" p="5" bg="white" borderRadius="md" textAlign="center">
              <Link href={product.url} isExternal _hover={{ textDecoration: 'none' }}>
                <Image boxSize={imageSize} src={product.image} alt={product.name} objectFit='contain' mx="auto" />
                <Text fontSize="sm" mt="2" isTruncated>{product.name}</Text>
                <Box p="2" maxW="100%">
                  {product.percentSavings > 0 && (
                    <Badge borderRadius="full" px="2" colorScheme="teal">Sale</Badge>
                  )}
                  <Text color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase" ml="2" isTruncated>
                    Best Buy &bull; {product.percentSavings} OFF
                  </Text>
                  <Text fontWeight="bold" fontSize={{ base: 'xs', sm: 'sm', md: 'md' }} as="h4" mt="1" noOfLines={2} isTruncated>{product.name}</Text>
                  <Text mt="1">${product.salePrice}
                    {product.percentSavings > 0 && (
                    <Text as="s" ml="2" color="gray.500">${product.regularPrice}</Text>
                    )}
                  </Text>
                 </Box>
              </Link>
            </Box>
          ))
        ) : (
            <Box minW={boxWidth} maxW={boxWidth} boxShadow="md" p="5" bg="white" borderRadius="md" textAlign="center">
              <Spinner boxSize={imageSize} src={Spinner} alt="Loading..." objectFit='contain' mx="auto" />
              <Box p="2" maxW="100%">
                <Text fontWeight="bold" fontSize={{ base: 'xs', sm: 'sm', md: 'md' }} as="h4" mt="1" noOfLines={2} isTruncated>Loading</Text>
                  <Spinner as="s" ml="2" color="gray.500" />
                </Box>
            </Box>
        )}        
        </HStack>
      </Box>
      <IconButton
        icon={<ChevronRightIcon />}
        position="absolute"
        right="5%"
        top="50%"
        transform="translateY(-50%)"
        zIndex={2}
        onClick={scrollRight}
      />
    </Center>
  );
});

InfiniteScrollBar.whyDidYouRender = true;

export default InfiniteScrollBar;

