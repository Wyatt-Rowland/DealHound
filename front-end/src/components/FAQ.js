import React from 'react';
import { 
    Box,
    Link, 
    Flex,
    Image,
    Spacer,
    Button,
    Center,
    Heading, 
    Accordion, 
    AccordionItem, 
    AccordionButton, 
    AccordionPanel, 
    AccordionIcon, 
    VStack,
    Checkbox,
    Text,
    IconButton,
    useDisclosure,
   } from '@chakra-ui/react';

const Faq = () => {
    return (
       <Box  width='100vw' alignItems='center' justifyContent='center' pt="1rem" pb='1rem'>
        <Center>
        <Accordion allowToggle width={{ base: '60vw', md: '80vw', lg: '80vw'}} bg='blue.400'>
            <AccordionItem>
                <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                    How do I use this site?
                </Box>
                <AccordionIcon />
                </AccordionButton>
                <AccordionPanel bg='blue.500'>
                    <Text>
                        Use this app to find the best deals across some of your favorite sites. Just open the sidebar, and select what stores, percent off, or price, and start shopping. 
                        All purchases will be made on the site that hosts the actual product. You can click on a product and it will link you directly to the product on, for example, bestbuy.com.
                    </Text>
                    <Text>
                        Please check the buyers guide! A lot of stores will have false sales, and will also raise prices right before having a sale. The buyer's guide will help you lookout for it.
                    </Text>
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                    Buyer's Guide!
                </Box>
                <AccordionIcon />
                </AccordionButton>
                <AccordionPanel bg='blue.500'>
                    <Text>
                        Some sites will try to sell things the normal price, while just having a marked through 'regular' price beside it. This makes the average consumer think that they're getting a good deal. 
                        Some sites will also raise the prices of items before putting it on sale so that people think they found the best deal, when in reality, they're getting the short end of the stick.
                    </Text>
                    <Text>
                        To combat this, you can use this site in conjunction with a price tracker, like honey's browser extension. 
                    </Text>
                    <Text>
                        Please check the buyers guide! A lot of stores will have false sales, and will also raise prices right before having a sale. The buyer's guide will help you lookout for it.
                    </Text>
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionButton>
                    <Box flex="1" textAlign="left" fontWeight="bold">
                        About
                    </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel bg='blue.500'>
                        <Flex direction={{ base: "column", md: "row" }} align="center">
                            <Box flexShrink={0}>
                            <Image src='/logo.png' boxSize={{ base: "100px", md: "150px" }} objectFit="cover" />
                            </Box>
                            <Spacer />
                            <VStack align="start" pl={{ md: '2rem' }} pt={{ base: '2rem', md: '0' }} spacing={4}>
                            <Heading as="h1" size="xl">Hello and welcome to Deal Hound!</Heading>
                            <Text fontSize="lg">Sniffing out the best Deals across some of your favorite sites!</Text>
                            <Text>
                                Deal Hound is a site I founded for a couple of reasons. The first one is I wanted a portfolio project that will help me get my first programming job. 
                                The second reason was the frustration I felt when searching multiple sites, looking for the best deals on monitors. I needed 144hz, and 1440p, and it was very tedious. 
                            </Text>
                            <Text>
                                Deal Hound should be a place where one can come to and look across multiple sites and *sniff* out the best deals. It would also be nice to earn some money through affiliate marketing, but I shouldn't get ahead of myself.
                            </Text>
                            <Text>
                                This site is built with React, and Chakra-UI. This is my first website, and my first time using either at this scale, so please forgive me if I messed up something.
                            </Text>
                            <Text>
                                If you need help, would like to report an issue (please do), or just have questions, please contact me at business@dealhound.shop, and I will respond as soon as I can.  
                                Happy Shopping!
                            </Text>
                            </VStack>
                        </Flex>
                    </AccordionPanel>
            </AccordionItem>
        </Accordion>  
        </Center> 
        <Center>
            <Image src='logo.png' alt="Deal Hound Logo" boxSize='15rem' /> 
        </Center>
       </Box> 
    );
};

export default Faq;