import React from 'react';
import { Box, Center, Flex, Text, Link, Stack, Image, useBreakpointValue, IconButton } from '@chakra-ui/react';
import HomeText from './HomeText';
import InfiniteScrollBar from './InfininiteScrollBar';
import useInfiniteScroll from '../GetProducts/useInfiniteScroll';

const HomeLayout = () => {
    const productsForScroll = useInfiniteScroll('monitors', true, 10);


    return (
        <Center pt='3rem'>
            <Flex direction='column'>
                <HomeText/>
                <InfiniteScrollBar products={productsForScroll} />
            </Flex>
        </Center>
    );
};

export default HomeLayout;