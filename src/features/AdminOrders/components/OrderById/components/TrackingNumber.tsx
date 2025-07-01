import { CiDeliveryTruck } from 'react-icons/ci';

import { Box, styled } from '@mui/material';

const TruckWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
  color: '#00c2b3',
  cursor: 'pointer',
}));

type Props = {
  trackingNumber: string;
};

export default function TrackingNumber({ trackingNumber }: Props) {
  return (
    <TruckWrapper>
      {trackingNumber} <CiDeliveryTruck size={'1.3rem'} /> Track
    </TruckWrapper>
  );
}
