import { CartProductType, InitialCart, UpdateCartCount } from './model/CartTypes';
import { extendObservable, makeAutoObservable } from 'mobx';

const initialCart: InitialCart = {
  cart: {
    products: [],
  },
  finalPrice: 0,
  deliveryPrice: 500,
  giftedPrice: 0,
  finalProductPrice: 0,
  isLoadingProducts: true,
};

class CartStore {
  cart = initialCart.cart;
  deliveryPrice = initialCart.deliveryPrice;
  giftedPrice = initialCart.giftedPrice;
  isLoadingProducts = initialCart.isLoadingProducts;

  constructor() {
    makeAutoObservable(this);
  }

  setGiftedPrice = (price: number) => {
    this.giftedPrice = price;
  };

  setLoadingProducts = (loading: boolean) => {
    this.isLoadingProducts = loading;
  };

  setCartProducts = (cartProductData: CartProductType[]) => {
    this.cart.products = cartProductData.map((p) => extendObservable({}, p));
  };

  removeCartProduct = (id: string) => {
    this.cart.products = this.cart.products.filter((p) => p.id !== id);
  };

  claerCartProducts = () => {
    this.cart.products = [];
  };

  updateCartProduct = (id: string, updatedProduct: Partial<CartProductType>) => {
    const productIndex = this.cart.products.findIndex((p) => p.id === id);
    if (productIndex > -1) {
      const product = this.cart.products[productIndex];
      Object.assign(product, updatedProduct);
    }
  };

  getFinalPriceForProduct = (product: CartProductType): number => {
    return product.price * product.count;
  };

  updateProductCount = (id: string, type: UpdateCartCount) => {
    const product = this.cart.products.find((p) => p.id === id);
    if (!product) return;

    const newCount = type === 'plus' ? product.count + 1 : Math.max(product.count - 1, 0);

    this.updateCartProduct(id, { count: newCount });
  };

  get finalPrice(): number {
    return (
      this.deliveryPrice +
      this.giftedPrice +
      this.cart.products.reduce((sum, product) => sum + this.getFinalPriceForProduct(product), 0)
    );
  }

  get finalProductPrice(): number {
    return this.cart.products.reduce((sum, product) => sum + this.getFinalPriceForProduct(product), 0);
  }
}

const cartStore = new CartStore();
export default cartStore;
