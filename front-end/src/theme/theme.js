import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  components: {
    Input: {
      baseStyle: {
        field: {
          fontSize: 'lg', // Adjust base font size
          '::placeholder': {
            color: 'black.500', // Placeholder text color
          },
        },
      },
    },
  },
});

export default theme;