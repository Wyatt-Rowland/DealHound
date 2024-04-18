import React, {useMemo, useState, useEffect} from 'react';
import { Box, Center, Flex, Text, Link, Stack, Image, useBreakpointValue, IconButton } from '@chakra-ui/react';
import HomeText from './HomeText';
import InfiniteScrollBar from './InfininiteScrollBar';

const HomeLayout = () => {

    return (
        <Center>
            <Flex direction='column'>
                <HomeText/>
                <InfiniteScrollBar />
            </Flex>
        </Center>
    );
};

HomeLayout.whyDidYouRender = true;


export default HomeLayout;