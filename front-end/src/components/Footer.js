import React from 'react';
import { Box, Flex, Text, Link, Stack, Image, useBreakpointValue, IconButton } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box bg="gray.600" color="white" width="full">
      <Flex
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1rem"
        margin="0 auto"
        textAlign="center"
      >
        {/* Left side */}
        <Image src="/logo.png" alt="logo" boxSize={{ base: '2rem', sm: '2rem', md: '6rem', lg: '6rem' }} />

        <Flex align="center" mb={{ base: '10px' }}>
          <Text fontSize={{ base: '10px', md: '18px'}}>&copy; {new Date().getFullYear()} DealHound.shop All rights reserved.</Text>
        </Flex>

        {/* Right side */}
        <Stack direction="row" spacing={6}>
        <IconButton
            aria-label="Github"
            isRound={true}
            as="a"
            href="https://github.com/vaccinaldig3710"
            backgroundColor="transparent"
            _hover={{ color: 'blue.500' }}
            size="lg" // This sets the button size, not the icon size
            style={{
              fontSize: useBreakpointValue({ base: '20px', sm: '24px', md: '28px', lg: '32px' }),
            }}
          >
            <FaGithub />
          </IconButton>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Footer;