import { ProductType } from '@wns/features/CatalogPage/components/CatalogList/model/ProductTypes';

export interface CartProductType extends ProductType {
  count: number;
  attributes?: {
    name: string;
    value: string;
  }[];
  stock: number;
  finalPrice: number;
}

export type InitialCart = {
  cart: {
    products: CartProductType[];
  };
  finalPrice: number;
  deliveryPrice: number;
  giftedPrice: number;
  finalProductPrice: number;
  isLoadingProducts: boolean;
};

export type UpdateCartCount = 'plus' | 'minus';
