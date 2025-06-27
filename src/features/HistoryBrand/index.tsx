import React from 'react';

import { Box } from '@mui/material';
import Banner from '@wns/widgets/Banner';

import JoinTeam from '@wns/features/HistoryBrand/components/JoinTeam';
import OurPhilosophy from '@wns/features/HistoryBrand/components/OurPhilosophy';
import OurValues from '@wns/features/HistoryBrand/components/OurValues';
import Team from '@wns/features/HistoryBrand/components/Team';
import Timeline from '@wns/features/HistoryBrand/components/Timeline';

const HistoryBrand = () => {
  return (
    <Box>
      <Banner
        title="ИСТОРИЯ БРЕНДА"
        description="Путь инноваций, мастерства и страсти к созданию уникальных украшений из титана"
      />
      <OurPhilosophy />
      <Timeline />
      <Team />
      <OurValues />
      <JoinTeam />
    </Box>
  );
};

export default HistoryBrand;
