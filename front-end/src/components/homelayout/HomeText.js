import React from 'react';
import { Box, Center, Heading, Flex, Text, Link, Stack, Image, useBreakpointValue, IconButton } from '@chakra-ui/react';

const HomeText = () => {
  const imageSize = useBreakpointValue({ base: '3rem', md: '5rem', lg: '6rem' });
  const textSize = useBreakpointValue({ base: '14px', md: '20px', lg: '24px'})

  console.log("Me TOO!!")
    return (
        <Center width='100vw' p={4}>
        <Flex p={8} borderRadius='lg' border='1px solid gray' bg='blue.400' direction={{ base: 'column' }} alignItems='center' textAlign='center'>
          <Flex alignItems='center'>
            <Image mr="4px" src="./logo.png" alt="dealhound logo" boxSize={imageSize} />
            <Heading size='lg' as='h2'>Welcome to Deal Hound!</Heading>
          </Flex>
          <Text fontSize={textSize}>Dealhound.shop is a site I created to help you find the best deals across your favorite sites!</Text>
          <Text fontSize={textSize}>You can select which stores you want to *sniff* out the best bargains on. We are currently under construction though!</Text>
          <Text fontSize={textSize}>Please prove any feedback you can so I can further improve the site!</Text>
        </Flex>
      </Center>
    )
}

export default HomeText;