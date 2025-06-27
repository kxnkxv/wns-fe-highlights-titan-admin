'use client';

import { observer } from 'mobx-react-lite';
import React from 'react';

import CartProduct from '../CartProduct/CartProduct';
import { Box, Button, Divider, Typography, styled } from '@mui/material';
import { useStore } from '@wns/stores/StoreContext';

const StyledContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[600],
  borderRadius: '0.5rem',
  padding: '1.5rem ',
  alignItems: 'center',
  maxHeight: 'fit-content',
  [theme.breakpoints.up('md')]: {
    width: '70%',
  },
}));

const StyledProductContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  [theme.breakpoints.up('sm')]: {
    gap: '2rem',
  },
}));

const StyledDivider = styled(Divider)(({ theme }) => ({
  margin: '2rem 0 ',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

const StyledInner = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',

  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

const StyledProductInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '2rem',
}));

const StyledText = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[400],
}));

const StyledButtonGroup = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: '1rem',
  flexDirection: 'column',
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  color: 'black',
  display: 'flex',
  borderRadius: 6,
  padding: '0.5rem 1rem',
  fontSize: '.875rem',
  lineHeight: '1.25rem',
  fontWeight: '500',
  textTransform: 'uppercase',
  boxShadow: 'none',
  width: '100%',
  transition: theme.transitions?.create(['background-color', 'color'], {
    duration: theme.transitions.duration.short,
    easing: theme.transitions.easing.easeIn,
  }),
  [theme.breakpoints.up('sm')]: {
    width: 'fit-content',
  },
}));

const StyledOutlinedButton = styled(StyledButton)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  border: `1px solid ${theme.palette.grey[100]}`,
  color: theme.palette.grey[100],
  '&:hover': {
    backgroundColor: theme.palette.grey[600],
    color: theme.palette.grey[300],
  },
}));

const CartProductList = observer(() => {
  const { cartStore } = useStore();

  const { cart } = cartStore;

  return (
    <StyledContainer>
      <StyledInner>
        <StyledText>ТОВАР</StyledText>
        <StyledProductInfo>
          <StyledText>ЦЕНА</StyledText>
          <StyledText>КОЛИЧЕСТВО</StyledText>
          <StyledText>ИТОГО</StyledText>
        </StyledProductInfo>
      </StyledInner>
      <StyledDivider />
      <StyledProductContainer>
        {cart?.products?.map((item) => <CartProduct product={item} key={item.id} />)}
      </StyledProductContainer>
      <StyledDivider />

      <StyledButtonGroup>
        <StyledOutlinedButton href="/catalog">Продолжить покупки</StyledOutlinedButton>
        <StyledOutlinedButton onClick={cartStore.claerCartProducts}>Очистить корзину</StyledOutlinedButton>
      </StyledButtonGroup>
    </StyledContainer>
  );
});

export default CartProductList;
