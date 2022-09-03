import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

const boxStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const marginTop = css`
  margin-top: 5rem;
`;

function HomePage() {
  return (
    <Box css={boxStyle}>
      <Heading
        css={css`
          margin-top: 2rem;
        `}
      >
        {' '}
        Homepage
      </Heading>
      <Text css={marginTop}> Hello senior</Text>
      <Button css={marginTop}>
        <Link to='/seniors'>Go to Senior Page</Link>
      </Button>
    </Box>
  );
}

HomePage.defaultProps = {};
export default HomePage;
