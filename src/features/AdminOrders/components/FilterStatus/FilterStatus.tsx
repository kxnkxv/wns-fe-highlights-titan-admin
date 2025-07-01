import React from 'react';

import CustomSelect from '@wns/shared/ui/CustomSelect';

import { StatusFilterOption } from '../../types';

interface FilterStatusProps {
  selectedStatuses: StatusFilterOption[];
  onChange: (statuses: StatusFilterOption[]) => void;
}

const FilterTableStatus: React.FC<FilterStatusProps> = ({ selectedStatuses, onChange }) => {
  const statuses: StatusFilterOption[] = ['All Statuses', 'Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'];

  return <CustomSelect onChange={onChange} selected={selectedStatuses} values={statuses} />;
};

export default FilterTableStatus;
