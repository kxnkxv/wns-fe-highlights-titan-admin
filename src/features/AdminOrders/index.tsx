'use client';

import React, { useEffect, useMemo, useState } from 'react';

import { Box, Stack } from '@mui/material';
import Title from '@wns/shared/ui/Title';
import SearchTable from '@wns/widgets/Table/SearchTable';

import FilterStatus from './components/FilterStatus/FilterStatus';
import OrdersTable from './components/OrdersTable/OrdersTable';
import { mockOrderAdmin } from './components/OrdersTable/model/orders.mock';

import { Order, StatusFilterOption, StatusOrders } from './types';

const AdminOrders = () => {
  const [orderData, setOrderData] = useState<Order[]>([...mockOrderAdmin]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatuses, setSelectedStatuses] = useState<StatusFilterOption[]>(['All Statuses']);

  const filteredData = useMemo(() => {
    let result = [...mockOrderAdmin];

    if (searchTerm) {
      const term = searchTerm;
      result = result.filter(
        (order) => order.id.includes(term) || order.customer.email.includes(term) || order.customer.name.includes(term)
      );
    }

    if (!selectedStatuses.includes('All Statuses') && selectedStatuses.length > 0) {
      result = result.filter((order) => selectedStatuses.includes(order.status as StatusOrders));
    }

    return result;
  }, [searchTerm, selectedStatuses]);

  useEffect(() => {
    setOrderData(filteredData);
  }, [filteredData]);

  return (
    <Box sx={{ p: 3 }}>
      <Title align={'left'}>Orders</Title>
      <Stack
        direction={'row'}
        sx={{
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <SearchTable searchTerm={searchTerm} setSearchTerm={setSearchTerm} placeholder="Search orders..." />
        <FilterStatus selectedStatuses={selectedStatuses} onChange={setSelectedStatuses} />
      </Stack>
      <OrdersTable data={orderData} />
    </Box>
  );
};

export default AdminOrders;
