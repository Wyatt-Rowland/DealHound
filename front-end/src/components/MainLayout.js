import React from 'react';
import { useAppContext } from '../context/AppContext';
import { Flex, Box, useBreakpointValue } from '@chakra-ui/react';
import Sidebar from './Sidebar';
// import Products from './Products'
import BestBuyProducts from './GetProducts/BestBuyProducts';
import ContactUs from './ContactUs';
import Faq from './FAQ'
import HomeLayout from './homelayout/HomeLayout';
// import FeaturedBestBuy from './GetProducts/FeaturedBestBuy';
// import SmallFeaturedBestBuy from './GetProducts/SmallFeaturedBestBuy';
// import EbayCatalogSearch from './GetProducts/useEbayProducts';
// import productsData from './data/products'; // Your products data

const MainLayout = React.memo(({ searchTerm }) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const { currentPage } = useAppContext();


  return (
    <Flex minH="100vh" direction={{ base: "column", md: "row" }}
    pt={{ base: '7rem', md: '7rem' }}
    bg="gray.400">
      <Box flexShrink={0}>
        <Sidebar isMobile={isMobile} />
      </Box>
      {/* <EbayCatalogSearch searchTerm={searchTerm}/> */}
      {currentPage === 'home' && !searchTerm && (
        <HomeLayout/>
      )}
      {currentPage === 'FAQ' && !searchTerm && (
        <Faq />
      )}
      {currentPage === 'ContactUs' && !searchTerm && (
        <ContactUs />
      )}
      <Box flex="1" overflow="auto">
      
          
        {/* Show BestBuyProducts if there is a searchTerm */}
        {searchTerm && <BestBuyProducts searchTerm={searchTerm} />}
        
      </Box>
    </Flex>
  );
});

MainLayout.whyDidYouRender = true;


export default MainLayout;
