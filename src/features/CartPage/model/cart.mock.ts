import { CartProductType } from './CartTypes';

export const cartProductsModel: Array<CartProductType> = [
  {
    id: '1',
    name: 'КОЛЬЦО ОРБИТА',
    description: 'Минималистичное кольцо из титана с матовой отделкой',
    price: 12900,
    category: 'Кольца',
    tags: ['НОВИНКА'],
    image: '/placeholder.png',
    count: 1,
    attributes: [
      {
        name: 'Размер',
        value: '20',
      },
    ],
    stock: 1,
    finalPrice: 12900,
  },
  {
    id: '2',
    name: 'КОЛЬЦО ОРБИТА',
    description: 'Минималистичное кольцо из титана с матовой отделкой',
    price: 12900,
    category: 'Кольца',
    tags: ['НОВИНКА'],
    image: '/placeholder.png',
    count: 1,
    attributes: [
      {
        name: 'Размер',
        value: '20',
      },
    ],
    stock: 2,
    finalPrice: 12900,
  },
];
