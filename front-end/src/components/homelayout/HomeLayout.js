import React from 'react';
import { Box, Center, Flex, Text, Link, Stack, Image, useBreakpointValue, IconButton } from '@chakra-ui/react';
import HomeText from './HomeText';
import InfiniteScrollBar from './InfininiteScrollBar';

const HomeLayout = () => {
    return (
        <Center pt='3rem'>
            <Flex direction='row'>
                <HomeText/>
                <InfiniteScrollBar/>
            </Flex>
        </Center>
    );
};

export default HomeLayout;