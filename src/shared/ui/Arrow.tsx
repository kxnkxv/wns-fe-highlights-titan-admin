import React from 'react';
import { MdOutlineArrowBackIos } from 'react-icons/md';

import { Box } from '@mui/material';
import { styled } from '@mui/system';

const StyledArrow = styled(MdOutlineArrowBackIos)(() => ({
  animation: 'bounce 2s infinite ease-in-out',

  '@keyframes bounce': {
    '0%, 100%': { transform: 'translateX(-50%) translateY(-10px) rotate(270deg)' },
    '50%': { transform: 'translateX(-50%) translateY(0) rotate(270deg)' },
  },
}));

const StyledArrowContainer = styled(Box)(() => ({
  position: 'absolute',
  bottom: '5rem',
  left: '50%',
}));


const Arrow = () => {
  return (
    <StyledArrowContainer>
      <StyledArrow />
    </StyledArrowContainer>
  );
};

export default Arrow;
