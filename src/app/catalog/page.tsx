'use client';

import React from 'react';

import { Box } from '@mui/material';
import Title from '@wns/shared/ui/Title';
import WrapperContainer from '@wns/shared/ui/WrapperContainer';

import CatalogList from '@wns/features/CatalogPage/components/CatalogList';
import Filters from '@wns/features/CatalogPage/components/Filters';

export default function Page() {
  return (
    <WrapperContainer backGroundWrapper="palette.background.default">
      <Title align={'left'}>КАТАЛОГ</Title>
      <Box
        sx={(theme) => ({
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',

          [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
          },
        })}
      >
        <Filters />
        <CatalogList />
      </Box>
    </WrapperContainer>
  );
}
