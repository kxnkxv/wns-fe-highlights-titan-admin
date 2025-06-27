import { Box, Pagination } from '@mui/material';
import { styled } from '@mui/system';
import ProductCard from '@wns/shared/ui/ProductCard';

import { mockProducts } from '@wns/features/CatalogPage/components/CatalogList/model/products.mock';

const GridWrapper = styled('div')(({ theme }) => ({
  display: 'grid',
  gap: theme.spacing(4),
  gridTemplateColumns: '1fr',
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: '1fr 1fr',
  },
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: '1fr 1fr 1fr',
  },
}));

const StyledPagination = styled(Pagination)(({ theme }) => ({
  '& .MuiPagination-ul': {
    justifyContent: 'center',
    gap: '4px',
  },
  '& .MuiPaginationItem-root': {
    color: theme.palette.text.primary,
    fontSize: '1rem',
    padding: '.5rem',
    borderColor: theme.palette.grey[500],
    '&:hover': {
      backgroundColor: theme.palette.grey[600],
    },
  },
  '& .MuiPaginationItem-root.Mui-selected': {
    backgroundColor: theme.palette.grey[300],
    color: theme.palette.grey[600],
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  '& .MuiPaginationItem-previousNext': {
    display: 'none',
  },
}));

const CatalogList = () => {
  return (
    <Box>
      <GridWrapper>
        {mockProducts.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </GridWrapper>
      <Box
        sx={{
          mt: 4,
        }}
      >
        <StyledPagination count={5} variant="outlined" shape="rounded" />
      </Box>
    </Box>
  );
};

export default CatalogList;
