import React, { useState, useRef, useEffect } from 'react';
import { Box, Center, Badge, HStack, Image, Text, IconButton,Link as ChakraLink } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const InfiniteScrollBar = ({ products }) => {
  const scrollBoxRef = useRef(null);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const scrollIntervalRef = useRef(null);

  // Function to scroll right
  const scrollRight = () => {
    if(scrollBoxRef.current) {
      const { current: box } = scrollBoxRef;
      box.scrollBy({ left: box.offsetWidth, behavior: 'smooth' });
    }
  };

  // Function to scroll left
  const scrollLeft = () => {
    if(scrollBoxRef.current) {
      const { current: box } = scrollBoxRef;
      box.scrollBy({ left: -box.offsetWidth, behavior: 'smooth' });
    }
  };

  // Check if we're at the end of the scroll to loop back to the start
  useEffect(() => {
    const handleScroll = () => {
      const { current: box } = scrollBoxRef;
      if (box.scrollWidth - box.scrollLeft === box.clientWidth) {
        // We're at the end, scroll back to start
        box.scrollTo({ left: 0, behavior: 'smooth' });
      }
    };

    const box = scrollBoxRef.current;
    box.addEventListener('scroll', handleScroll);

    return () => box.removeEventListener('scroll', handleScroll);
  }, []);

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
      <Box maxW='60vw' ref={scrollBoxRef} overflowX="scroll" whiteSpace="nowrap" p="4">
        <HStack spacing="20px">
          {products.map((product, index) => (
            <Box w='55vw' maxH='30rem' key={index} boxShadow="md" p="5" bg="white" borderRadius="md" textAlign="center">
              <Image boxSize='4rem' src={product.image} alt={product.name} objectFit='contain' mx="auto" />
              <Text fontSize="sm" mt="2" isTruncated>{product.name}</Text>
              <Text fontSize="sm" mt="2" isTruncated>{product.name}</Text>
            </Box>
          ))}
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
};
export default InfiniteScrollBar;
