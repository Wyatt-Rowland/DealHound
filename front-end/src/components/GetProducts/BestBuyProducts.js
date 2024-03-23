import React, { useState } from 'react';
import useBestBuyProducts from './useBestBuyProducts'; // Adjust the path as necessary
import { Box, Text, Image, Link, Flex, Badge, SimpleGrid, Center, Button, useBreakpointValue, Link as ChakraLink } from '@chakra-ui/react';

const BestBuyProducts = ({ searchTerm }) => {
  const [minSalePercentage, setMinSalePercentage] = useState(20);
  const products = useBestBuyProducts(searchTerm, minSalePercentage);
  const columns = useBreakpointValue({ base: 1, md: 2, lg: 4 });

  const Product = ({ product }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const showLongDescription = useBreakpointValue({ base: false, md: true, lg: true });
    const hasLongDescription = Boolean(product.longDescription);
    const layoutDirection = useBreakpointValue({ base: 'row', md: 'column' });
    const imageSize = useBreakpointValue({ base: '100px', md: '180px', lg: '200px' });
    const flexDirection = useBreakpointValue({ base: 'row', md: 'column', lg: 'column' })

    const toggleDescription = (event) => {
      event.stopPropagation(); // Prevent event from propagating to parent elements
      setIsExpanded(!isExpanded);
    };

    return (
      <Box as="article" maxW={{ base: 'sm', sm: 'xl', md: 'lg'}} borderWidth="1px" borderRadius="lg" overflow="hidden" bg="white" 
          _hover={{ shadow: 'lg' }} transition="all .3s ease" 
          height={isExpanded || showLongDescription ? 'auto' : 'auto'}>
        <Flex direction={flexDirection} maxW="100%">          
        <Center>
          <Link href={product.url} isExternal _hover={{ textDecoration: 'none' }}>
            <Flex p={1} justifyContent="center" alignItems="center" boxSize={imageSize} bg="white">
              <Image src={product.image} alt={product.name} boxSize={imageSize} objectFit="contain" />
          </Flex>   
          </Link>
        </Center>  
        <Box p="2" maxW="100%">
          <Badge borderRadius="full" px="2" colorScheme="teal">Sale</Badge>
          <Text color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase" ml="2" isTruncated>
            Best Buy &bull; {product.percentSavings} OFF
          </Text>
          <Text fontWeight="bold" fontSize={{ base: 'xs', sm: 'sm', md: 'md' }} as="h4" mt="1" noOfLines={2} isTruncated>{product.name}</Text>
          <Text mt="1">${product.salePrice}<Text as="s" ml="2" color="gray.500">${product.regularPrice}</Text></Text>
          {(isExpanded || showLongDescription) && hasLongDescription && (
            <Text maxW={{ base: '80%', md: '100%' }} fontSize="sm" mt="3" noOfLines={[4, null, null, null]}>{product.longDescription}</Text>
          )}
          <Box>
            <Flex direction={flexDirection} alignItems="center">
              {!showLongDescription && hasLongDescription && (
                <Button size="sm" mt="2" onClick={toggleDescription} border='1px solid gray'>
                  {isExpanded ? 'Less' : 'More'}
                </Button>
              )}
              {/* <Text pt="10px">{product.customerReviewAverage}/5</Text> */}
              <Center p={2}>
                <Button as={ChakraLink} size="sm" mt='0.5rem' bg='blue.400' href={product.url} isExternal >View Product</Button>
              </Center>
            </Flex>
          </Box>
        </Box>
        </Flex>
      </Box>
    );
  };

  return (
    <Box px={{ base: '1rem', md: '5rem' }} pt={{ base: '4rem', sm: '4rem' }} pb='1rem' minH="100vh">
      <Center>
      <SimpleGrid columns={columns} spacing={5}>
        {products.map((product) => (
          <Product key={product.sku || product.name} product={product} />
        ))}
      </SimpleGrid>
    </Center>
    </Box>
  );
};

export default BestBuyProducts;


// // BestBuyProducts.js
// import React, { useState } from 'react';
// import useBestBuyProducts from './useBestBuyProducts'; // Adjust the path as necessary
// import { Box, Text, Image, Link, Flex, Badge, SimpleGrid, useBreakpointValue } from '@chakra-ui/react';

// const BestBuyProducts = ({ searchTerm }) => {
//   const [minSalePercentage, setMinSalePercentage] = useState(20);
//   const products = useBestBuyProducts(searchTerm, minSalePercentage);
//   const columns = useBreakpointValue({ base: 1, md: 3, lg: 4 });

//   return (
//     <Box 
//       px={{ base: '1rem', md: '5rem' }} 
//       pt="1rem"
//       pb='1rem'
//       minH="100vh">
//       <SimpleGrid columns={columns} spacing={5}>
//         {products.map((product) => (
//           <Link href={product.url} isExternal _hover={{ textDecoration: 'none' }} key={product.sku || product.name}>
//             <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" height='lg' bg="white" _hover={{ shadow: 'lg' }}>
//               <Flex justifyContent="center" alignItems="center" height="200px" bg="white">
//                 <Image zIndex='0' src={product.image} alt={product.name} maxH="180px" maxW='90%' objectFit="contain" />
//               </Flex>
//               <Box p="6">
//                 <Badge borderRadius="full" px="2" colorScheme="teal">Sale</Badge>
//                 <Text color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase" ml="2" isTruncated>
//                   Best Buy &bull; {product.percentSavings} OFF 
//                 </Text>
//                 <Text fontWeight="bold" as="h4" mt="1" isTruncated>{product.name}</Text>
//                 <Text mt="2">${product.salePrice}<Text as="s" ml="2" color="gray.500">${product.regularPrice}</Text></Text>
//                 <Text fontSize="sm" mt="3" noOfLines={4}>{product.longDescription}</Text>
//                 <Box pt="10px">{product.customerReviewAverage}/5</Box>
//               </Box>
//             </Box>
//           </Link>
//         ))}
//       </SimpleGrid>
//     </Box>
//   );
// };

// export default BestBuyProducts;




















// // BestBuyProducts.js

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Box, Text, Image, Link, Flex, Badge, SimpleGrid, useBreakpointValue } from '@chakra-ui/react';

// const BestBuyProducts = ({ searchTerm }) => {
//   const [products, setProducts] = useState([]);
//   const columns = useBreakpointValue({ base: 2, md: 3, lg: 4 }); // Responsive column setup

//   useEffect(() => {
//     const fetchProducts = async () => {
//       if (!searchTerm) {
//         setProducts([]);
//         return;
//       }
//       try {
//         const response = await axios.get(`https://api.bestbuy.com/v1/products((search=${encodeURIComponent(searchTerm)})&onSale=true)`, {
//           params: {
//             format: 'json',
//             apiKey: '9xF9QWjaexpEQD3AEFfqZAbQ', // Use your actual API key here
//             pageSize: 99, // Adjust as needed
//             show: 'customerReviewAverage,description,dollarSavings,image,name,regularPrice,salePrice,url,longDescription,percentSavings,accessories.sku',
//             sort: 'dollarSavings.asc',
//             facets : '&facet=percentSavings,20',
//           }
//         });
//         const productsWithSavings = response.data.products.map(product => ({
//             ...product,
//         })).filter(product => parseFloat(product.percentSavings) > 20); // change 20 to a variable that will bind to checkboxes

//         setProducts(productsWithSavings);
//         } catch (error) {
//             console.log('Error fetching data from Best Buy API', error);
//         }
//     };
//     fetchProducts();
//     }, [searchTerm]);


// //         setProducts(response.data.products);
// //       } catch (error) {
// //         console.error("Error fetching data from Best Buy API", error);
// //       }
// //     };

// //     fetchProducts();
// //   }, [searchTerm]);



//   return (
//     <Box
//       bg="gray.900"
//       pt={{ base: '8rem', md: '8rem' }} // Padding top to push content below the header on mobile view
//       px={{ base: '1rem', md: '5rem' }} // Padding on the sides for some space
//       minH="100vh" // Minimum height to take full screen height
//     >
//       <SimpleGrid columns={columns} spacing={5}>
//         {products.map((product) => (
//           <Link href={product.url} isExternal _hover={{ textDecoration: 'none' }} key={product.accessories.sku}>
//             <Box
//               maxW="sm"
//               borderWidth="1px"
//               borderRadius="lg"
//               overflow="hidden"
//               height='lg'
//               bg="white"
//               _hover={{ shadow: 'lg' }} // Add a shadow on hover for better UX
//             >
//               <Flex justifyContent="center" alignItems="center" height="200px" bg="white">
//                 <Image zIndex='0' src={product.image} alt={product.name} maxH="180px" maxW='90%' objectFit="contain" />
//               </Flex>
//               <Box p="6">
//                 <Badge borderRadius="full" px="2" colorScheme="teal">
//                   Sale
//                 </Badge>
//                 <Text
//                   color="gray.500"
//                   fontWeight="semibold"
//                   letterSpacing="wide"
//                   fontSize="xs"
//                   textTransform="uppercase"
//                   ml="2"
//                   isTruncated
//                 >
//                   Best Buy &bull; {product.percentSavings} OFF
//                 </Text>
//                 <Text fontWeight="bold" as="h4" mt="1" isTruncated>
//                   {product.name}
//                 </Text>
//                 <Text mt="2">
//                   ${product.salePrice}
//                   <Text as="s" ml="2" color="gray.500">
//                     ${product.regularPrice}
//                   </Text>
//                 </Text>
//                 <Text fontSize="sm" mt="3" noOfLines={4}>
//                   {product.longDescription}
//                 </Text>
//                 <Box pt="10px">
//                     {product.customerReviewAverage}/5
//                 </Box>
//               </Box>
//             </Box>
//           </Link>
//         ))}
//       </SimpleGrid>
//     </Box>
//   );
// };

// export default BestBuyProducts;




// return (
//     <Box
//       bg="gray.900"
//       pt={{ base: '1rem', md: '1rem' }}
//       px={{ base: '1rem', md: '5rem' }}
//       pb="1rem"
//       minH="100vh"
//     >
//       <SimpleGrid columns={columns} spacing={5}>
//         {products.map((product) => (
//           <Box
//             key={product.sku}
//             maxW="sm"
//             borderWidth="1px"
//             borderRadius="lg"
//             overflow="hidden"
//             bg="white"
//             _hover={{ shadow: 'lg' }}
//           >
//             <Flex justifyContent="center" alignItems="center" height="200px" bg="white">
//                 <Image src={product.image} alt={product.name} maxW='90%' maxH='180px' objectFit="cover" />
//             </Flex>
//             <Box p="6">
//               {product.salePrice < product.regularPrice && (
//                 <Badge borderRadius="full" px="2" colorScheme="teal">
//                   Sale
//                 </Badge>
//               )}
//               <Text fontWeight="bold" as="h4" mt="1">
//                 {product.name}
//               </Text>
//               <Text>
//                 ${product.salePrice}
//                 <Text as="s" ml="2" color="gray.500">
//                   ${product.regularPrice}
//                 </Text>
//               </Text>
//               <Text fontSize="sm" mt="3">
//                 {product.description}
//               </Text>
//             </Box>
//           </Box>
//         ))}
//       </SimpleGrid>
//     </Box>
//   );
// };
