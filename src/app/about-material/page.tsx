'use client';

import React from 'react';

import { Box } from '@mui/system';
import Banner from '@wns/widgets/Banner';

import AboutFooter from '@wns/features/AboutMaterialPage/components/AboutFooter';
import ArtOfCreation from '@wns/features/AboutMaterialPage/components/ArtOfCreation';
import CompairMaterial from '@wns/features/AboutMaterialPage/components/CompairMaterial';
import CreationProcess from '@wns/features/AboutMaterialPage/components/ProcessCreate';
import UniquePropreties from '@wns/features/AboutMaterialPage/components/UniquePropreties';

export default function Page() {
  return (
    <Box>
      <Banner
        title="ТИТАН: МАТЕРИАЛ БУДУЩЕГО"
        description="Откройте для себя уникальные свойства титана, которые делают его идеальным материалом для создания современных ювелирных изделий"
      />
      <UniquePropreties />
      <CompairMaterial />
      <CreationProcess />
      <ArtOfCreation />
      <AboutFooter />
    </Box>
  );
}
