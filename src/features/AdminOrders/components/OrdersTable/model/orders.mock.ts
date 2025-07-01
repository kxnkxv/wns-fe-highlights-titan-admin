import { Order } from '@wns/features/AdminOrders/types';

export const mockOrderAdmin: Order[] = [
  {
    id: 'ORD-001',
    customer: {
      name: 'Анна Смирнова',
      email: 'anna@example.com',
      phone: '+7(909)-444-33-22',
    },
    order_cost: 32000,
    status: 'Delivered',
    date: '2025-04-06',
    products: [
      {
        id: '1',
        name: 'КОЛЬЦО ОРБИТА',
        description: 'Минималистичное кольцо из титана с матовой отделкой',
        price: 12000,
        category: 'Кольца',
        tags: ['НОВИНКА'],
        image: '/placeholder.png',
        status: 'New',
        stock: '15',
        size: '15',
        count: 1,
      },
      {
        id: '2',
        name: 'СЕРЬГИ ГЕОМЕТРИЯ',
        description: 'Легкие титановые серьги с геометрическим дизайном',
        price: 10000,
        category: 'Серьги',
        tags: [],
        image: '/placeholder.png',
        status: 'Regular',
        stock: '8',
        size: '13',
        count: 2,
      },
    ],
    payment_info: {
      method: 'Card',
      card: '**** **** **** 4242',
      status: 'Paid',
    },
    shipping_info: {
      method: 'Курьерская доставка',
      tracking_number: 'TRACK-123456789',
      address: 'ул. Ленина, д. 10, Москва',
      cost: 500,
    },
    additional: [{ value: 'Подарочная упаковка' }],
  },

  {
    id: 'ORD-123',
    customer: { name: 'Alice Smith', email: 'alice@example.com' },
    date: '2025-04-01',
    status: 'Pending',
    order_cost: 10000,
  },
  {
    id: 'ORD-456',
    customer: { name: 'Bob Johnson', email: 'bob@example.com' },
    date: '2025-04-02',
    status: 'Shipped',
    order_cost: 30000,
  },
  {
    id: 'ORD-789',
    customer: { name: 'Charlie Brown', email: 'charlie@example.com' },
    date: '2025-04-03',
    status: 'Processing',
    order_cost: 40000,
  },
];

export const mockOrderStatuses = ['Delivered', 'Shipped', 'Processing', 'Pending', 'Cancelled'];
