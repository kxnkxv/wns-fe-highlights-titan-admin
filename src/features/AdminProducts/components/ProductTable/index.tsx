import { FC } from 'react';

import { Box, Typography, styled } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

import MenuTable from '@wns/features/AdminProducts/components/MenuTable';
import { ProductType } from '@wns/features/AdminProducts/components/ProductTable/model/products.mock';

type Props = {
  data: ProductType[];
};

const DataTable = styled(DataGrid)(({ theme }) => ({
  fontSize: '.75rem',
  border: 0,
  marginTop: '1rem',
  backgroundColor: theme.palette.background.default,
}));

const ImageContainer = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.grey[400],
  width: '40px',
  height: '40px',
  borderRadius: '.5rem',
}));

const StatusBox = styled('span')({
  borderRadius: '8px',
  padding: '0.25rem 0.5rem',
  fontSize: '0.75rem',
  fontWeight: 600,
  border: '1px solid',
});

const statusColors: Record<string, string> = {
  New: '#2e7d32',
  Limited: '#6a1b9a',
  Regular: '#1565c0',
};

const NoRowsOverlay = () => {
  return (
    <Box sx={{ p: 10, textAlign: 'center' }}>
      <Typography variant="body2">No products found. Try adjusting your search.</Typography>
    </Box>
  );
};

const ProductTable: FC<Props> = ({ data }) => {
  const columns: GridColDef[] = [
    {
      field: 'id',
      headerName: 'Product',
      flex: 1,
      renderCell: (params) => (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, p: 1 }}>
          <ImageContainer />
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column', gap: 0.1 }}>
            <Typography fontSize={'.75rem'}>{params.row.name}</Typography>
            <Typography color="gray" fontSize={'.65rem'}>
              ID: {params.row.id}
            </Typography>
          </Box>
        </Box>
      ),
    },
    { field: 'category', headerName: 'Category', flex: 1 },
    {
      field: 'price',
      headerName: 'Price',
      flex: 1,
      renderCell: (params) => <span>{params.value.toLocaleString()} ₽</span>,
    },
    {
      field: 'stock',
      headerName: 'Stock',
      flex: 1,
      renderCell: (params) => <span style={{ color: params.value > 10 ? '#22c55e' : '#ef4444' }}>{params.value}</span>,
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

export default ProductTable;
