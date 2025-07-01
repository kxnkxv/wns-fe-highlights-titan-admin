'use client';

import Link from 'next/link';
import React from 'react';
import { IoMdArrowBack } from 'react-icons/io';
import { MdOutlineEmail, MdOutlineFileDownload } from 'react-icons/md';

import { Box, Button, styled } from '@mui/material';
import Title from '@wns/shared/ui/Title';

import OrderDetails from './components/OrderDetails';

import { Order } from '../../types';

const StyledLink = styled(Link)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
  textDecoration: 'none',
  color: theme.palette.common.white,

  ':hover': {
    color: theme.palette.primary.main,
  },
}));

type Props = {
  order: Order;
};
const StyledButton = styled(Button)(({ theme }) => ({
  border: `1px solid ${theme.palette.grey['600']}`,
  display: 'flex',
  gap: '0.25rem',
  color: theme.palette.common.white,

  ':hover': {
    backgroundColor: theme.palette.grey['600'],
  },
}));
const OrderByID = ({ order }: Props) => {
  return (
    <Box sx={{ p: 3 }}>
      <StyledLink href={'/admin/orders'}>
        <IoMdArrowBack />
        Back to orders
      </StyledLink>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '1rem',
          alignItems: 'center',
          marginBottom: '24px',
        }}
      >
        <Title align={'left'} sx={{ marginBottom: '0' }}>
          {order.id}
        </Title>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
          <StyledButton>
            <MdOutlineEmail />
            Email Customer
          </StyledButton>
          <StyledButton>
            <MdOutlineFileDownload />
            Download Invoice
          </StyledButton>
        </Box>
      </Box>
      <OrderDetails order={order} />
    </Box>
  );
};

export default OrderByID;
