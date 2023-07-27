import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { useAuthStore } from 'stores';
import { shallow } from 'zustand/shallow';

const boxStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const marginTop = css`
  margin-top: 5rem;
`;

export function HomePage() {
  const { logout } = useAuthStore(
    (state) => ({
      logout: state.logout,
    }),
    shallow,
  );

  return (
    <Box css={boxStyle}>
      <Heading
        css={css`
          margin-top: 2rem;
        `}
      >
        Homepage
      </Heading>
      <Text css={marginTop}> Hello senior</Text>
      <Button css={marginTop}>
        <Link to='/seniors'>Go to Senior Page</Link>
      </Button>
      <Button onClick={logout} mt="1rem">
        Logout
      </Button>
    </Box>
  );
}

HomePage.defaultProps = {};
