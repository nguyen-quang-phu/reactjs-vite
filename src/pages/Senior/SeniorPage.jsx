import { Box, Button, Heading } from '@chakra-ui/react';
import { css } from '@emotion/react';
import { useQuery } from '@tanstack/react-query';

import Table from 'components/Table';
import { NavLink } from 'react-router-dom';
import getSeniors from 'services/seniors';

const buttonStyle = css`
  margin-top: 5rem;
`;

const containerStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const columns = [
  {
    header: 'Id',
    accessorKey: 'id',
  },
  {
    header: 'Name',
    accessorKey: 'name',
  },
];

function SeniorPage() {
  const { data: res } = useQuery(['seniors'], getSeniors);

  return (
    <Box css={containerStyle}>
      <Heading
        my='2rem'
        textAlign='center'
      >
        Senior Page
      </Heading>
      <Table
        data={res?.data}
        columns={columns}
      />
      <Button css={buttonStyle}>
        <NavLink to='/'>Go to HomePage</NavLink>
      </Button>
    </Box>
  );
}

SeniorPage.defaultProps = {};
export default SeniorPage;
