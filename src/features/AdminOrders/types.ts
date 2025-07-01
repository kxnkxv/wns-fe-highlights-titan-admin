import { ProductType } from '../AdminProducts/components/ProductTable/model/products.mock';

export interface OrderProduct extends ProductType {
  size: string;
  count: number;
}
export interface Order {
  id: string;
  customer: {
    name: string;
    email: string;
    phone?: string;
  };
  order_cost: number;
  status: StatusOrders;
  date: string;
  products?: OrderProduct[];
  payment_info?: {
    method: string;
    card?: string;
    status: StatusPayment;
  };
  shipping_info?: {
    method: string;
    tracking_number: string;
    address: string;
    cost: number;
  };
  additional?: [
    {
      name?: string;
      value?: string;
    },
  ];
}

export type StatusPayment = 'Paid' | 'Processing' | 'Pending' | 'Cancelled';

export type StatusOrders = 'Delivered' | 'Shipped' | 'Processing' | 'Pending' | 'Cancelled';
export type StatusFilterOption = StatusOrders | 'All Statuses';
