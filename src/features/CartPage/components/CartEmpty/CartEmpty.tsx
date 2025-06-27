import React from 'react';
import { RiShoppingBag3Fill } from 'react-icons/ri';

import { Box, Button, Typography, styled } from '@mui/material';

const StyledContainer = styled(Box)(({}) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  alignItems: 'center',
}));
const StyledTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.6rem',
  textDecoration: 'uppercase',
  color: theme.palette.common.white,
  fontWeight: 'bold',
}));
const StyledText = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  color: theme.palette.grey[500],
  margin: '0 auto',
  textAlign: 'center',
}));

const StyledIconContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  backgroundColor: theme.palette.grey[600],
  color: theme.palette.grey[500],
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.grey[300],
  color: 'black',
  borderRadius: 6,
  padding: '0.5rem 1rem',
  fontSize: '0.8rem',
  textTransform: 'uppercase',
  boxShadow: 'none',
  '&:hover': {
    backgroundColor: theme.palette.grey[400],
    boxShadow: 'none',
  },
}));

const StyledIcon = styled(RiShoppingBag3Fill)(({ theme }) => ({
  fontSize: '40px',
}));

const CartEmpty = () => {
  return (
    <StyledContainer>
      <StyledIconContainer>
        <StyledIcon />
      </StyledIconContainer>
      <StyledTitle>ВАША КОРЗИНА ПУСТА</StyledTitle>
      <StyledText variant="body1">
        Похоже, вы еще не добавили товары в корзину. <br /> Перейдите в каталог, чтобы выбрать украшения.
      </StyledText>
      <StyledButton href="/catalog">Перейти в каталог</StyledButton>
    </StyledContainer>
  );
};

export default CartEmpty;
