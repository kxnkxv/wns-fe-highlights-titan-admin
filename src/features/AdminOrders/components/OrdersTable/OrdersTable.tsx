import { FC } from 'react';

import { Box, Typography, styled } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import MenuTable from '@wns/features/AdminOrders/MenuTable';

import { Order } from '../../types';

const DataTable = styled(DataGrid)(({ theme }) => ({
  fontSize: '.75rem',
  border: 0,
  marginTop: '1rem',
  backgroundColor: theme.palette.background.default,
}));

const StatusBox = styled('span')({
  borderRadius: '8px',
  padding: '0.25rem 0.5rem',
  fontSize: '0.75rem',
  fontWeight: 600,
  border: '1px solid',
});

const statusColors: Record<string, string> = {
  Delivered: '#2e7d32',
  Shipped: '#6a1b9a',
  Processing: '#1565c0',
  Pending: '#eab308',
  Cancelled: '#ef4444',
};

const CustomerBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  lineHeight: 'calc(var(--height)/2)',
}));

type Props = {
  data: Order[];
};
const NoRowsOverlay = () => {
  return (
    <Box sx={{ p: 10, textAlign: 'center' }}>
      <Typography variant="body2">No Orders found. Try adjusting your search.</Typography>
    </Box>
  );
};

const OrdersTable: FC<Props> = ({ data }) => {
  const columns: GridColDef[] = [
    {
      field: 'id',
      headerName: 'Order ID',
      flex: 1,
      renderCell: (params) => <span>{params.row.id}</span>,
    },
    {
      field: 'customer',
      headerName: 'Customer',
      flex: 1,
      renderCell: (params) => (
        <CustomerBox>
          <span>{params.value.name}</span>
          <span> {params.value.email}</span>
        </CustomerBox>
      ),
    },
    {
      field: 'order_cost',
      headerName: 'Amount',
      flex: 1,
      renderCell: (params) => <span>{params.value.toLocaleString()} ₽</span>,
    },
    {
      field: 'status',
      headerName: 'Status',
      flex: 1,
      renderCell: (params) => (
        <StatusBox
          style={{
            borderColor: statusColors[params.value],
            color: statusColors[params.value],
          }}
        >
          {params.value}
        </StatusBox>
      ),
    },
    {
      field: 'date',
      headerName: 'Date',
      flex: 1,
      renderCell: (params) => <span>{params.value}</span>,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      flex: 0.5,
      renderCell: (params) => <MenuTable row={params.row} />,
    },
  ];

  return (
    <DataTable
      disableColumnResize
      disableColumnMenu
      disableColumnSorting
      rows={data}
      columns={columns}
      disableRowSelectionOnClick
      hideFooter
      showColumnVerticalBorder={false}
      showCellVerticalBorder={false}
      columnHeaderHeight={36}
      slots={{
        noRowsOverlay: NoRowsOverlay,
      }}
    />
  );
};

export default OrdersTable;
