import React from 'react';

import { Box, styled } from '@mui/material';

type Props = {
  children: React.ReactNode;
};

const StyledOrderValue = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',
}));

const OrderSummary = ({ children }: Props) => {
  return <StyledOrderValue>{children}</StyledOrderValue>;
};

export default OrderSummary;
