'use client';

import { FC } from 'react';

import { Box, Grid } from '@mui/material';
import Title from '@wns/shared/ui/Title';

import LineChatSales from '@wns/features/DashBoard/components/LineChatSales';
import RecentOrders from '@wns/features/DashBoard/components/RecentOrders';
import StatCards from '@wns/features/DashBoard/components/StatCards';

const DashBoard: FC = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Title align={'left'} sx={{ textTransform: 'none' }}>
        Dashboard
      </Title>
      <StatCards />
      <Grid container spacing={2} mb={3}>
        <Grid size={{ md: 6, xs: 12 }}>
          <LineChatSales />
        </Grid>
        <Grid size={{ md: 6, xs: 12 }}>
          <RecentOrders />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashBoard;
