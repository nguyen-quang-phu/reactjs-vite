import { Box, Button, Heading } from '@chakra-ui/react';
import { css } from '@emotion/react';
import { Table } from 'components';

import { useFetch } from 'hooks';
import { NavLink } from 'react-router-dom';
import { getSeniors } from 'services';

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

export function SeniorPage() {
  const { data: res } = useFetch(['seniors'], getSeniors);

  return (
    <Box css={containerStyle}>
      <Heading
        my='2rem'
        textAlign='center'
      >
        Senior Page
      </Heading>
      <Table
        data={res?.data?.data}
        columns={columns}
      />
      <Button css={buttonStyle}>
        <NavLink to='/'>Go to HomePage</NavLink>
      </Button>
    </Box>
  );
}

SeniorPage.defaultProps = {};
