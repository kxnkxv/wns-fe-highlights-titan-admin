import { FC } from 'react';

import { Paper, Typography, styled } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

import { recentOrders } from '@wns/features/DashBoard/components/RecentOrders/model/orders.mock';

const RecentOrdersCard = styled(Paper)(({ theme }) => ({
  padding: '1rem',
  backgroundColor: theme.palette.background.default,
  color: theme.palette.common.white,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '100%',
  borderWidth: '1px',
  borderRadius: '.5rem',
}));

const StatusBox = styled('span')({
  borderRadius: '8px',
  padding: '0.25rem 0.5rem',
  fontSize: '0.75rem',
  fontWeight: 600,
  border: '1px solid',
});

const DataTable = styled(DataGrid)(({ theme }) => ({
  fontSize: '.75rem',
  border: 0,
  marginTop: '1rem',
  backgroundColor: theme.palette.background.default,
}));

const statusColors: Record<string, string> = {
  Delivered: '#2e7d32',
  Shipped: '#6a1b9a',
  Processing: '#1565c0',
  Pending: '#f9a825',
  Cancelled: '#c62828',
};

const RecentOrders: FC = () => {
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'Order ID', flex: 1 },
    { field: 'customer', headerName: 'Customer', flex: 1 },
    {
      field: 'amount',
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
      renderCell: (params) => <span style={{ color: '#cccccc' }}>{params.value}</span>,
    },
  ];

  return (
    <RecentOrdersCard elevation={3}>
      <Typography variant="h5" fontWeight={700}>
        Recent Orders
      </Typography>
      <Typography variant="body2" color="gray">
        Latest 5 orders placed on the platform
      </Typography>
      <DataTable
        disableColumnResize
        disableColumnMenu
        disableColumnSorting
        rows={recentOrders}
        columns={columns}
        disableRowSelectionOnClick
        hideFooter
        showColumnVerticalBorder={false}
        showCellVerticalBorder={false}
        columnHeaderHeight={36}
      />
    </RecentOrdersCard>
  );
};

export default RecentOrders;
