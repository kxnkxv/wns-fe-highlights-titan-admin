import React from 'react';

import { Box, styled } from '@mui/system';

type Props = {
  children: React.ReactNode;
  backGroundWrapper?: 'palette.background.default';
};

const StyledWrapper = styled(Box)(() => ({
  padding: '3rem 0',
}));

const StyledContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  margin: '0 auto',
  padding: '0 1.5rem',
  display: 'flex',
  flexDirection: 'column',

  [theme.breakpoints.up('xl')]: {
    maxWidth: '1400px',
  },
}));
const WrapperContainer = ({ children, backGroundWrapper }: Props) => {
  return (
    <StyledWrapper
      sx={{
        backgroundColor: (theme) =>
          backGroundWrapper ? (theme.palette as never)[backGroundWrapper] : theme.palette.grey[600],
      }}
    >
      <StyledContainer>{children}</StyledContainer>
    </StyledWrapper>
  );
};

export default WrapperContainer;
