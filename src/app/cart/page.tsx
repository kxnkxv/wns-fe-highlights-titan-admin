import { Metadata } from 'next/dist/lib/metadata/types/metadata-interface';
import React from 'react';

import { cartProductsModel } from '@wns/features/CartPage/model/cart.mock';

import CartPage from '@wns/features/CartPage/components/CartPage';

export const metadata: Metadata = {
  title: 'Корзина',
};

const Page = () => {
  const products = cartProductsModel;
  return <CartPage products={products} />;
};

export default Page;
