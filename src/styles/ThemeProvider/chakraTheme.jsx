import { Global } from '@emotion/react';
import { extendTheme } from '@chakra-ui/react';

export function Fonts() {
  return (
    <Global
      styles={`
        @font-face {
          font-family: 'roboto-bold';
          src: url('/fonts/Roboto-Bold.ttf');
        }
        @font-face {
          font-family: 'roboto-italic';
          src: url('/fonts/Roboto-Italic.ttf');
        }
        @font-face {
          font-family: 'roboto-bold-italic';
          src: url('/fonts/Roboto-BoldItalic.ttf');
        }
        @font-face {
          font-family: 'roboto-regular';
          src: url('fonts/Roboto-Regular.ttf');
        }
      `}
    />
  );
}

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        bgColor: 'white',
      },
    },
  },
  fonts: {
    body: 'roboto-regular',
    heading: 'roboto-bold',
  },
});
