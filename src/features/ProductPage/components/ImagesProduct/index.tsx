import Image from 'next/image';
import React, { FC } from 'react';

import { Box, Grid, styled } from '@mui/material';

import { ProductType } from '@wns/features/CatalogPage/components/CatalogList/model/ProductTypes';

const LargeImageContainer = styled(Box)({
  position: 'relative',
  aspectRatio: '1 / 1',
  width: '100%',
  borderRadius: '.5rem',
  overflow: 'hidden',
});

const SmallImageContainer = styled('div')({
  position: 'relative',
  width: '100%',
  aspectRatio: '1 / 1',
  borderRadius: '.5rem',
  overflow: 'hidden',
});

type Props = {
  product: ProductType;
};

const ImagesProduct: FC<Props> = ({ product }) => {
  return (
    <>
      <LargeImageContainer>
        <Image fill alt={product.name} src="/mockImage/placeholderBanner.png" style={{ objectFit: 'cover' }} />
      </LargeImageContainer>
      <Grid container spacing={1} marginTop={1}>
        <Grid size={{ xs: 4 }}>
          <SmallImageContainer>
            <Image fill alt={product.name} src="/mockImage/placeholderBanner.png" style={{ objectFit: 'cover' }} />
          </SmallImageContainer>
        </Grid>
        <Grid size={{ xs: 4 }}>
          <SmallImageContainer>
            <Image fill alt={product.name} src="/mockImage/placeholderBanner.png" style={{ objectFit: 'cover' }} />
          </SmallImageContainer>
        </Grid>
        <Grid size={{ xs: 4 }}>
          <SmallImageContainer>
            <Image fill alt={product.name} src="/mockImage/placeholderBanner.png" style={{ objectFit: 'cover' }} />
          </SmallImageContainer>
        </Grid>
      </Grid>
    </>
  );
};

export default ImagesProduct;
