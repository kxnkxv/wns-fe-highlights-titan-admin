'use client'

import { Box, Typography, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import { OrderProduct } from '@wns/features/AdminOrders/types';
import Image from 'next/image';

type OrderItemsProps = {
  items: OrderProduct[];

  shipping?: number;
  total?: number;
};

const StyledOrderItemsContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#333',
  padding: '1rem',
  borderRadius: '5px',
}));

const StyledOrderItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '1rem',
}));

const StyledItemImage = styled('div')(({ theme }) => ({
  width: '60px',
  height: '60px',
  background: '#fff',
  marginRight: '1rem',
  borderRadius: '5px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const StyledOrderItemDetails = styled(Box)(({ theme }) => ({
  flex: 1,
}));

const StyledPrice = styled(Typography)(({ theme }) => ({
  textAlign: 'right',
  color: '#fff',
}));

const StyledSummaryRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '1rem',
}));

const StyledDivider = styled(Divider)(({ theme }) => ({
  backgroundColor: '#555',
  margin: '1rem 0',
}));

const OrderProduct: React.FC<OrderItemsProps> = ({ items, shipping, total }) => {

  const subtotal = items.reduce((acc, item) => acc + item.price * item.count, 0);
  return (
    <StyledOrderItemsContainer>
      <Typography variant="h6" color="white">
        Order Items
      </Typography>


      {items.map((item, index) => (
        <StyledOrderItem key={index}>
          <StyledItemImage>
            <Image src="/placeholder.png" alt="Product Image" width={40} height={ 40} />
          </StyledItemImage>
          <StyledOrderItemDetails>
            <Typography variant="body1" color="white"> 
              {item.name}
            </Typography>
            <Typography variant="body2" color="#aaa">
              Size: {item.size}
            </Typography>
            <Typography variant="body2" color="#aaa">
              Quantity: {item.count}
            </Typography>
          </StyledOrderItemDetails>
          <StyledPrice variant="body1" color="white">
            ₽ {item.price.toLocaleString()}
          </StyledPrice>
        </StyledOrderItem>
      ))}


      <StyledDivider />


      <StyledSummaryRow>
        <Typography variant="body1" color="#aaa">
          Subtotal
        </Typography>
        <StyledPrice variant="body1" color="white">
          ₽ {subtotal?.toLocaleString()}
        </StyledPrice>
      </StyledSummaryRow>
      <StyledSummaryRow>
        <Typography variant="body1" color="#aaa">
          Shipping
        </Typography>
        <StyledPrice variant="body1" color="white">
          ₽ {shipping?.toLocaleString()}
        </StyledPrice>
      </StyledSummaryRow>
      <StyledDivider />

      <StyledSummaryRow>
        <Typography variant="body1" color="white">
          Total
        </Typography>
        <StyledPrice variant="body1" color="white">
          ₽ {total?.toLocaleString()}
        </StyledPrice>
      </StyledSummaryRow>
    </StyledOrderItemsContainer>
  );
};

export default OrderProduct;