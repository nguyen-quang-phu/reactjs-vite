/* eslint-disable react/jsx-props-no-spreading */
import Table from './Table';

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

const data = [
  {
    id: 1,
    name: 'Harvey',
  },
  {
    id: 2,
    name: 'Baron',
  },
  {
    id: 3,
    name: 'Gary',
  },
];

export function Default(props) {
  return (
    <Table
      {...props}
      data={data}
      columns={columns}
    />
  );
}

export function Loading(props) {
  return (
    <Table
      {...props}
      isLoading
      data={data}
      columns={columns}
    />
  );
}

const TableBlock = {
  component: Table,
  title: 'Table',
};

export default TableBlock;
