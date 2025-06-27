'use client';

import { observer } from 'mobx-react-lite';
import Image from 'next/image';
import React, { useCallback } from 'react';
import { IoMdClose } from 'react-icons/io';

import { CartProductType, UpdateCartCount } from '../../model/CartTypes';
import { Box, Button, Divider, Typography, styled } from '@mui/material';
import CounterButton from '@wns/shared/ui/CounterButton';
import { formatPrice } from '@wns/shared/utils/productUtils';
import { useStore } from '@wns/stores/StoreContext';

const StyledContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));

const StyledProductDescription = styled('div')(({ theme }) => ({
  height: '5rem',
  position: 'relative',
  display: 'flex',
  gap: '1rem',
  alignItems: 'center',
}));

const ImageContainer = styled('div')({
  aspectRatio: '1/1',
  position: 'relative',
  height: 'inherit',
  img: {
    borderRadius: '0.5rem',
    objectFit: 'cover',
  },
});

const StyledTitle = styled('h3')(({ theme }) => ({
  display: 'inline',
  fontSize: '0.8rem',
  margin: 0,
}));

const StyledText = styled(Typography)(({ theme }) => ({
  display: 'inline',
  fontSize: '1rem',
  margin: 0,
  color: theme.palette.grey[400],
}));

const StyledTextFinance = styled(Typography)(({ theme }) => ({
  display: 'inline',
  fontSize: '0.9rem',
  margin: 0,
  color: theme.palette.grey[300],
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));

const StyleDescription = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    gap: '2rem',
  },
}));

const StyleDescriptionTop = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
}));

const StyledProductFinance = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: '2rem',
  },
}));

const StyledProductFinanceInner = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
}));

const StyledProductNumber = styled(Typography)(({ theme }) => ({}));

const StyledDeleteProduct = styled(Button)(({ theme }) => ({
  margin: 0,
  padding: '0 5px',
  textTransform: 'none',
  justifyContent: 'flex-start',
  marginLeft: '-5px',
  minWidth: 'fit-content',

  [`${IoMdClose}`]: {
    fontSize: 16,
  },

  [theme.breakpoints.up('sm')]: {
    padding: '0',
    span: {
      display: 'none',
    },
    [`${IoMdClose}`]: {
      color: theme.palette.grey[300],
      fontSize: 20,
    },
    ':hover': {
      backgroundColor: 'transparent',
      color: theme.palette.grey[200],
    },
  },
}));

const StyledDivider = styled(Divider)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));

type Props = {
  product: CartProductType;
};

const CartProduct = observer(({ product }: Props) => {
  const { cartStore } = useStore();

  const handleChange = useCallback(
    (id: string, type: UpdateCartCount) => {
      cartStore.updateProductCount(id, type);
    },
    [cartStore.cart.products]
  );
  const handleDeleteProduct = (id: string) => {
    cartStore.removeCartProduct(id);
  };
  return (
    <StyledContainer>
      <StyledProductDescription>
        <ImageContainer>
          <Image fill alt={product.name} src="/mockImage/placeholderBanner.png" />
        </ImageContainer>
        <StyleDescription>
          <StyleDescriptionTop>
            <StyledTitle>{product.name}</StyledTitle>
            {product.attributes?.map((attr) => (
              <StyledText key={attr.name}>
                {attr.name}: {attr.value}
              </StyledText>
            ))}
          </StyleDescriptionTop>

          <StyledDeleteProduct onClick={() => handleDeleteProduct(product.id)}>
            <IoMdClose /> <span>Удалить</span>
          </StyledDeleteProduct>
        </StyleDescription>
      </StyledProductDescription>

      {product.stock > 0 ? (
        <StyledProductFinance>
          <StyledProductFinanceInner>
            <StyledTextFinance>Цена:</StyledTextFinance>
            <StyledProductNumber>{formatPrice(product.price)}</StyledProductNumber>
          </StyledProductFinanceInner>

          <StyledProductFinanceInner>
            <StyledTextFinance>Количество:</StyledTextFinance>
            <CounterButton id={product.id} count={product.count} stock={product.stock} onChange={handleChange} />
          </StyledProductFinanceInner>

          <StyledProductFinanceInner>
            <StyledTextFinance>Итого:</StyledTextFinance>
            <StyledProductNumber sx={{ fontWeight: '800' }}>
              {formatPrice(product.count * product.price)}
            </StyledProductNumber>
          </StyledProductFinanceInner>
        </StyledProductFinance>
      ) : (
        <StyledText sx={{ fontWeight: '800', color: 'white' }}>Товар отсутствует</StyledText>
      )}

      <StyledDivider />
    </StyledContainer>
  );
});

export default CartProduct;
