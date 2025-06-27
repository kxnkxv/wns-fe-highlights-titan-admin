import Link from 'next/link';
import { useParams } from 'next/navigation';
import { FC } from 'react';
import { FaArrowLeft } from 'react-icons/fa';

import { Grid, Typography, styled } from '@mui/material';

import { mockProducts } from '@wns/features/CatalogPage/components/CatalogList/model/products.mock';
import ImagesProduct from '@wns/features/ProductPage/components/ImagesProduct';
import ProductInfo from '@wns/features/ProductPage/components/ProductInfo';
import ProductTabs from '@wns/features/ProductPage/components/ProductTabs';

const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textDecoration: 'none',
  display: 'flex',
  gap: '1rem',
  alignItems: 'center',
  marginBottom: '2rem',

  '&:hover': {
    color: theme.palette.text.primary,
  },
}));

const ProductPage: FC = () => {
  const params = useParams();
  const product = mockProducts.find((product) => product.id === params.id);

  if (!product)
    return (
      <Typography variant="h2" align="center" color="text.secondary">
        Товар не найден
      </Typography>
    );

  return (
    <>
      <StyledLink href={'/catalog'}>
        <FaArrowLeft />
        Вернуться в каталог
      </StyledLink>
      <Grid container spacing={8}>
        <Grid size={{ md: 6, xs: 12 }}>
          <ImagesProduct product={product} />
        </Grid>
        <Grid size={{ md: 6, xs: 12 }}>
          <ProductInfo product={product} />
          <ProductTabs product={product} />
        </Grid>
      </Grid>
    </>
  );
};

export default ProductPage;
