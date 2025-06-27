import React from 'react';

import { SxProps, Theme, Typography, styled } from '@mui/material';

const StyledTitle = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'alignCustom',
})<{ alignCustom?: 'left' | 'center' | 'right' }>(({ theme, alignCustom }) => ({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  textAlign: alignCustom ?? 'center',
  textTransform: 'uppercase',
  marginBottom: '24px',
  [theme.breakpoints.up('sm')]: {
    fontSize: '2rem',
    textAlign: alignCustom ?? 'left',
  },
}));

type Props = {
  children: React.ReactNode;
  align?: 'left' | 'center' | 'right';
  sx?: SxProps<Theme>;
};

const Title = ({ children, align, sx }: Props) => {
  return (
    <StyledTitle alignCustom={align} sx={sx}>
      {children}
    </StyledTitle>
  );
};

export default Title;
