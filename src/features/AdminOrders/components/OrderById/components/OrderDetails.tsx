'use client';

import React, { useState } from 'react';

import { mockOrderStatuses } from '../../OrdersTable/model/orders.mock';
import InfoBlock from './InfoBlock';
import OrderProduct from './OrderProduct';
import OrderSummary from './OrderSummary';
import StatusBadge from './StatusBadge';
import TrackingNumber from './TrackingNumber';
import { Box, Button, TextField, Typography, styled } from '@mui/material';
import CustomSelect from '@wns/shared/ui/CustomSelect';

import { Order, StatusOrders } from '@wns/features/AdminOrders/types';

export const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
}));

export const LeftColumn = styled('div')(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

export const RightColumn = styled('div')(({ theme }) => ({
  width: '30%',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

const StyledTextPrimary = styled(Typography)(({ theme }) => ({
  fontSize: '0.8rem',
  color: theme.palette.grey['400'],
}));

const StyledTextSecondary = styled('div')(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: '1rem',
}));

const StyledButtonSend = styled(Button)(({ theme }) => ({
  marginTop: '1rem',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.grey['600'],
}));

type Props = {
  order: Order;
};

const OrderDetails = ({ order }: Props) => {
  const [orderStatus, setOrderStatus] = useState<StatusOrders>(order.status);
  const [note, setNote] = useState<string>('');
  const [confimUpdate, setComfirmUpdate] = useState(false);

  const handleChangeOrder = () => {
    setComfirmUpdate(true);
  };

  return (
    <Container>
      <LeftColumn>
        <Box sx={{ width: '100%', height: 'fit-content' }}>
          <OrderProduct items={order.products || []} total={order.order_cost} shipping={order.shipping_info?.cost} />
        </Box>
        <Box sx={{ flex: 1, display: 'flex', flexWrap: 'flex-wrap', gap: '1rem' }}>
          <InfoBlock title="Shipping Information">
            <OrderSummary>
              <StyledTextPrimary>Method</StyledTextPrimary>
              <StyledTextSecondary>{order.shipping_info?.method}</StyledTextSecondary>
            </OrderSummary>

            <OrderSummary>
              <StyledTextPrimary>Tracking Number</StyledTextPrimary>
              <StyledTextSecondary>
                <TrackingNumber trackingNumber={order.shipping_info?.tracking_number || ''} />
              </StyledTextSecondary>
            </OrderSummary>
            <OrderSummary>
              <StyledTextPrimary>Address</StyledTextPrimary>
              <StyledTextSecondary>{order.shipping_info?.address}</StyledTextSecondary>
            </OrderSummary>
          </InfoBlock>

          <InfoBlock title="Payment Information">
            <OrderSummary>
              <StyledTextPrimary>Method</StyledTextPrimary>
              <StyledTextSecondary>{order.payment_info?.method}</StyledTextSecondary>
            </OrderSummary>

            <OrderSummary>
              <StyledTextPrimary>Card</StyledTextPrimary>
              <StyledTextSecondary>{order.payment_info?.card}</StyledTextSecondary>
            </OrderSummary>
            <OrderSummary>
              <StyledTextPrimary>Status</StyledTextPrimary>
              <StyledTextSecondary>
                <StatusBadge type="payment" value={order.payment_info?.status || ''} />
              </StyledTextSecondary>
            </OrderSummary>
          </InfoBlock>
        </Box>
      </LeftColumn>
      <RightColumn>
        <InfoBlock title="Customer Information">
          <OrderSummary>
            <StyledTextPrimary>Name</StyledTextPrimary>
            <StyledTextSecondary>{order.customer?.name}</StyledTextSecondary>
          </OrderSummary>
          <OrderSummary>
            <StyledTextPrimary>Email</StyledTextPrimary>
            <StyledTextSecondary>{order.customer?.email}</StyledTextSecondary>
          </OrderSummary>

          <OrderSummary>
            <StyledTextPrimary>Phone</StyledTextPrimary>
            <StyledTextSecondary>{order.customer?.phone}</StyledTextSecondary>
          </OrderSummary>
        </InfoBlock>

        <InfoBlock title="Order Status">
          <StyledTextPrimary sx={{ marginTop: '-15px' }}> Update the status of this order</StyledTextPrimary>
          <OrderSummary>
            <StyledTextSecondary>Current status</StyledTextSecondary>
            <StatusBadge type="order" value={orderStatus} />
          </OrderSummary>

          <OrderSummary>
            <StyledTextSecondary>Update Status</StyledTextSecondary>
            <CustomSelect selected={orderStatus} onChange={setOrderStatus} values={mockOrderStatuses} />
            <StyledTextSecondary>Note (Optional)</StyledTextSecondary>
            <TextField
              label="Add a note about this status change"
              multiline
              rows={3}
              value={note}
              onChange={(e) => setNote(e.target.value)}
              fullWidth
              placeholder="Add a note about this status change"
              sx={{ mt: 1 }}
            />

            <StyledButtonSend onClick={handleChangeOrder}>Update Status</StyledButtonSend>
            {confimUpdate && (
              <Typography align="center" color="#2e7d32">
                Status updated successfully!
              </Typography>
            )}
          </OrderSummary>
        </InfoBlock>

        <InfoBlock title="Notes">
          {order.additional?.map((item, index) => (
            <OrderSummary key={index}>
              <StyledTextPrimary>{item.name}</StyledTextPrimary>
              <StyledTextSecondary>{item.value}</StyledTextSecondary>
            </OrderSummary>
          ))}
        </InfoBlock>
      </RightColumn>
    </Container>
  );
};
export default OrderDetails;
