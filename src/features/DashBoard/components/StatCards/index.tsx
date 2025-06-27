import { FC } from 'react';
import { BsBoxSeam, BsCurrencyDollar } from 'react-icons/bs';
import { IoCartOutline } from 'react-icons/io5';
import { TbUsers } from 'react-icons/tb';

import { Grid } from '@mui/material';
import StatCard from '@wns/shared/ui/StatCard';

const StatCards: FC = () => {
  return (
    <Grid container spacing={2} mb={3}>
      <Grid size={{ md: 3, xs: 12 }}>
        <StatCard
          icon={<BsCurrencyDollar color={'#22c55e'} />}
          label="Total Revenue"
          value="₽ 1,245,600"
          subtitle="↗ 12% from last month"
        />
      </Grid>
      <Grid size={{ md: 3, xs: 12 }}>
        <StatCard
          icon={<IoCartOutline color={'#3b82f6'} />}
          label="Orders"
          value="324"
          subtitle="↗ 8% from last month"
        />
      </Grid>
      <Grid size={{ md: 3, xs: 12 }}>
        <StatCard icon={<BsBoxSeam color={'#f97316'} />} label="Products" value="56" subtitle="↗ 3 new this month" />
      </Grid>
      <Grid size={{ md: 3, xs: 12 }}>
        <StatCard
          icon={<TbUsers color={'#a855f7'} />}
          label="Customers"
          value="1,893"
          subtitle="↗ 18% from last month"
        />
      </Grid>
    </Grid>
  );
};

export default StatCards;
