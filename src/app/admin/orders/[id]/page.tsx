import React from 'react';

import OrderByID from '@wns/features/AdminOrders/components/OrderById';
import { mockOrderAdmin } from '@wns/features/AdminOrders/components/OrdersTable/model/orders.mock';

async function getOrder(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const order = mockOrderAdmin.find((item) => item.id === id);
  if (!order) throw new Error('Order not found');

  return order;
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const paramsObject = await params;
  const { id } = paramsObject;

  const order = await getOrder(id);

  return <OrderByID order={order} />;
}
