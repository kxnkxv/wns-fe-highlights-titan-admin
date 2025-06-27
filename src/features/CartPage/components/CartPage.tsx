'use client';

import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';

import { CartProductType } from '../model/CartTypes';
import CartEmpty from './CartEmpty/CartEmpty';
import CartOrder from './CartOrder/CartOrder';
import CartProductList from './CartProductList/CartProductList';
import { Box, CircularProgress, styled } from '@mui/material';
import Title from '@wns/shared/ui/Title';
import WrapperContainer from '@wns/shared/ui/WrapperContainer';
import { useStore } from '@wns/stores/StoreContext';

const StyledCartContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: '3rem',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
  },
}));

type Props = {
  products: Array<CartProductType>;
};
const CartPage: React.FC<Props> = observer(({ products }) => {
  const { cartStore } = useStore();

  useEffect(() => {
    if (products.length > 0 && cartStore) {
      cartStore.setLoadingProducts(true);
      cartStore.setCartProducts(products);
      cartStore.setLoadingProducts(false);
    }
  }, [products, cartStore]);

  const hasProducts = cartStore?.cart?.products?.length > 0;

  return (
    <WrapperContainer backGroundWrapper="palette.background.default">
      <Title align="left">Корзина</Title>

      {cartStore.isLoadingProducts ? (
        <CircularProgress />
      ) : hasProducts ? (
        <StyledCartContainer>
          <CartProductList />
          <CartOrder />
        </StyledCartContainer>
      ) : (
        <CartEmpty />
      )}
    </WrapperContainer>
  );
});

export default CartPage;
