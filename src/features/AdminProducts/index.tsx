'use client';

import { FC, useEffect, useState } from 'react';

import { Box } from '@mui/material';
import Title from '@wns/shared/ui/Title';
import SearchTable from '@wns/widgets/Table/SearchTable';

import ProductTable from '@wns/features/AdminProducts/components/ProductTable';
import {
  ProductType,
  mockAdminProducts,
} from '@wns/features/AdminProducts/components/ProductTable/model/products.mock';

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
      <Title align={'left'}>Products</Title>
      <SearchTable searchTerm={searchTerm} setSearchTerm={setSearchTerm} placeholder={'Search products...'} />
      <ProductTable data={productData} />
    </Box>
  );
};

export default AdminProducts;
