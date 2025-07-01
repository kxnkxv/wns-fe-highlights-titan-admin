'use client';

import { MenuItem, Select, styled } from '@mui/material';

const StyledSelect = styled(Select)(({ theme }) => ({
  backgroundColor: '#333',
  color: '#fff',
  '& .MuiSelect-select': {
    padding: '8px 16px',
    fontSize: '14px',
    fontWeight: 500,
  },
  '& .MuiSelect-iconOpen': {
    color: '#fff',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: 'transparent',
  },
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  color: '#fff',
  '&.Mui-selected': {
    backgroundColor: '#555',
  },
}));

type Props = {
  selected: any;
  onChange: any;
  values: any;
};

const CustomSelect: React.FC<Props> = ({ selected, onChange, values }) => {
  const handleStatusChange = (event: any) => {
    const newSelectedStatuses = event.target.value;

    onChange(newSelectedStatuses);
  };
  return (
    <StyledSelect
      value={selected}
      onChange={handleStatusChange}
      MenuProps={{
        PaperProps: {
          style: {
            backgroundColor: '#333',
            color: '#fff',
          },
        },
      }}
    >
      {values.map((value: any) => (
        <StyledMenuItem key={value} value={value}>
          {value}
        </StyledMenuItem>
      ))}
    </StyledSelect>
  );
};

export default CustomSelect;
