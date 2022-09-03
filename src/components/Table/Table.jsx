import { range } from 'ramda';
import PropTypes from 'prop-types';
import { flexRender, useReactTable, getCoreRowModel } from '@tanstack/react-table';
import { Tr, Th, Td, Thead, Tbody, Skeleton, Table as ChakraTable } from '@chakra-ui/react';

function Table({ data, columns, isLoading }) {
  const { getHeaderGroups, getRowModel } = useReactTable({
    columns,
    getCoreRowModel: getCoreRowModel(),
    data: isLoading ? range(0, 10).map(() => ({})) : data,
  });

  const { rows } = getRowModel();

  return (
    <ChakraTable>
      <Thead>
        {getHeaderGroups().map(({ id, headers }) => (
          <Tr
            key={id}
            sx={{
              '> th:first-of-type': {
                borderLeftRadius: '7px',
              },
              '> th:last-of-type': {
                borderRightRadius: '7px',
              },
            }}
          >
            {headers.map(({ id, colSpan, column, getContext }) => (
              <Th
                py={3}
                px={2.5}
                key={id}
                border={0}
                colSpan={colSpan}
                bgColor='gray.100'
              >
                {flexRender(column.columnDef.header, getContext())}
              </Th>
            ))}
          </Tr>
        ))}
      </Thead>
      <Tbody>
        {rows.map(({ id, getVisibleCells }) => (
          <Tr key={id}>
            {getVisibleCells().map(({ id, column, getContext }) => (
              <Td
                px={2.5}
                py={3}
                key={id}
              >
                {isLoading ? <Skeleton height='20px' /> : flexRender(column.columnDef.cell, getContext())}
              </Td>
            ))}
          </Tr>
        ))}
        {!rows.length && (
          <Tr>
            <Td
              textAlign='center'
              py={4}
              border={0}
              colSpan={columns.length}
            >
              No record at the moment.
            </Td>
          </Tr>
        )}
      </Tbody>
    </ChakraTable>
  );
}

Table.defaultProps = {
  isLoading: false,
  data: [],
};

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string),
  columns: PropTypes.arrayOf(PropTypes.string).isRequired,
  isLoading: PropTypes.bool,
};

export default Table;
