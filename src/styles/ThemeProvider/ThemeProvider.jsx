import PropTypes from 'prop-types';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import { Fonts, theme } from './chakraTheme';

function ThemeProvider({ children }) {
  const themeConfig = extendTheme(theme);

  return (
    <ChakraProvider theme={themeConfig}>
      <Fonts />
      {children}
    </ChakraProvider>
  );
}

ThemeProvider.defaultProps = {};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;
