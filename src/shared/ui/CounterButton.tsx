'use client';

import React, { memo } from 'react';

import { Box, Button, Typography, styled } from '@mui/material';
import { UpdateCartCount } from '@wns/features/CartPage/model/CartTypes';

interface CounterButtonProps {
  id: string;
  count: number;
  onChange: (id: string, type: UpdateCartCount) => void;
  stock: number;
}

const StyledCounterButton = styled(Button)(({ theme }) => ({
  width: '32px',
  height: '32px',
  borderRadius: '8px',
  fontSize: '1rem',
  minWidth: '10px',
  backgroundColor: theme.palette.background.default,
  border: `1px solid ${theme.palette.grey[500]}`,
  color: theme.palette.grey[500],
  lineHeight: '100%',
  '&.Mui-disabled': {
    borderColor: theme.palette.grey[700],
    color: theme.palette.grey[700],
    backgroundColor: theme.palette.background.paper,
    opacity: 0.6,
    cursor: 'not-allowed',
  },

  '@media (hover: hover)': {
    '&:hover': {
      borderColor: theme.palette.grey[400],
      color: theme.palette.grey[400],
      backgroundColor: theme.palette.background.paper,
    },
  },
}));

const StyledCountText = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
}));
const CounterButton: React.FC<CounterButtonProps> = (props) => {
  const { id, count, onChange, stock } = props;
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <StyledCounterButton onClick={() => onChange(id, 'minus')} disabled={count <= 1}>
        -
      </StyledCounterButton>

      <StyledCountText>{count}</StyledCountText>

      <StyledCounterButton onClick={() => onChange(id, 'plus')} disabled={count >= stock}>
        +
      </StyledCounterButton>
    </Box>
  );
};

export default memo(CounterButton);
