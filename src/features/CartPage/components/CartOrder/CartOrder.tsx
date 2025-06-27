import { observer } from 'mobx-react-lite';
import React from 'react';

import CartOrderAdditional from './CartOrderAdditional/CartOrderAdditional';
import { Box, Button, Divider, Typography, styled } from '@mui/material';
import Title from '@wns/shared/ui/Title';
import { formatPrice } from '@wns/shared/utils/productUtils';
import { useStore } from '@wns/stores/StoreContext';

const StyledContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[600],
  borderRadius: '0.5rem',
  padding: '1.5rem ',
  alignItems: 'center',

  [theme.breakpoints.up('md')]: {
    width: '30%',
  },
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.2rem',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  marginBottom: '2rem',
}));

const StyledText = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[400],
}));
const StyledTextValue = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
}));

const StyledInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
}));
const StyledInfoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
}));

const StyledDivider = styled(Divider)(({ theme }) => ({
  margin: '1rem 0',
}));

const StyledButtonOrder = styled(Button)(({ theme }) => ({
  width: '100%',
  textTransform: 'uppercase',
  backgroundColor: theme.palette.primary.main,
  color: 'black',
  borderRadius: 6,
  padding: '0.5rem 1rem',
  fontSize: '0.875rem',
  boxShadow: 'none',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
    boxShadow: 'none',
  },
}));

const CartOrder = observer(() => {
  const { cartStore } = useStore();
  const { deliveryPrice, finalPrice, finalProductPrice, giftedPrice } = cartStore;

  return (
    <StyledContainer>
      <StyledTitle>Сумма заказа</StyledTitle>
      <StyledInfoContainer>
        <StyledInfo>
          <StyledText>Подытог</StyledText>
          <StyledTextValue>{formatPrice(finalProductPrice)}</StyledTextValue>
        </StyledInfo>

        {giftedPrice > 0 && (
          <StyledInfo>
            <StyledText>Подарочная упаковка</StyledText>
            <StyledTextValue>{formatPrice(giftedPrice)}</StyledTextValue>
          </StyledInfo>
        )}

        <StyledInfo>
          <StyledText>Доставка</StyledText>
          <StyledTextValue>{finalPrice < 20000 ? formatPrice(deliveryPrice) : 'Бесплатно'}</StyledTextValue>
        </StyledInfo>
      </StyledInfoContainer>
      <StyledDivider />
      <StyledInfo>
        <StyledTitle sx={{ textTransform: 'none' }}>Итого</StyledTitle>
        <StyledTitle sx={{ textTransform: 'none' }}>{formatPrice(finalPrice)}</StyledTitle>
      </StyledInfo>
      <StyledButtonOrder>Оформить заказ</StyledButtonOrder>
      <CartOrderAdditional />
    </StyledContainer>
  );
});

export default CartOrder;
