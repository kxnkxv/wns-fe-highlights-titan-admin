'use client';

import { Box } from '@mui/system';
import Arrow from '@wns/shared/ui/Arrow';

import Advantages from '@wns/features/MainPage/components/Advantages';
import FavoriteProducts from '@wns/features/MainPage/components/FavoriteProducts';
import MainBanner from '@wns/features/MainPage/components/MainBanner';
import ReviewsList from '@wns/features/MainPage/components/ReviewsList';
import SubscriptionForm from '@wns/features/MainPage/components/SubscriptionForm';

export default function App() {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          padding: '2rem',
          position: 'relative',
        }}
      >
        <MainBanner />
        <Arrow />
      </Box>
      <FavoriteProducts />
      <Advantages />
      <ReviewsList />
      <SubscriptionForm />
    </>
  );
}
