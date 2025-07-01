'use client';

import { FC, useEffect, useState } from 'react';
import { IoMdAdd } from 'react-icons/io';

import { Box, Button } from '@mui/material';
import { styled } from '@mui/system';
import Title from '@wns/shared/ui/Title';

import ProductTable from '@wns/features/AdminProducts/components/ProductTable';
import {
  ProductType,
  mockAdminProducts,
} from '@wns/features/AdminProducts/components/ProductTable/model/products.mock';
import SearchProducts from '@wns/features/AdminProducts/components/SearchProducts';

const StyledAddButton = styled(Button)(({ theme }) => ({
  color: 'black',
  display: 'flex',
  borderRadius: 6,
  padding: '0.5rem 1rem',
  fontSize: '0.875rem',
  lineHeight: '1.25rem',
  fontWeight: '500',
  textTransform: 'none',
  boxShadow: 'none',
  backgroundColor: theme.palette.primary.main,
  gap: '.5rem',
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
  transition: theme.palette.transitions?.create(['background-color', 'color'], {
    duration: theme.palette.transitions.duration.short,
    easing: theme.palette.transitions.easing.easeIn,
  }),
}));

const AdminProducts: FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [productData, setProductData] = useState<ProductType[]>(mockAdminProducts);

  useEffect(() => {
    if (searchTerm) {
      const filteredData = productData.filter(
        (product) => product.name.includes(searchTerm) || product.category.includes(searchTerm)
      );
      setProductData(filteredData);
    } else {
      setProductData(mockAdminProducts);
    }
  }, [searchTerm]);

  return (
    <Box sx={{ p: 3 }}>
      <Box display={'flex'} flexDirection={'row'} gap={2} justifyContent={'space-between'} alignItems={'center'}>
        <Title align={'left'} sx={{ textTransform: 'none' }}>
          Products
        </Title>
        <StyledAddButton href={'/admin/products/new'}>
          <IoMdAdd fontSize="medium" />
          Add Product
        </StyledAddButton>
      </Box>
      <SearchProducts searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ProductTable data={productData} />
    </Box>
  );
};

export default AdminProducts;
