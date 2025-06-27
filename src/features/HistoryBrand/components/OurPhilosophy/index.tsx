'use client';

import { Button, Skeleton, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import Title from '@wns/shared/ui/Title';
import WrapperContainer from '@wns/shared/ui/WrapperContainer';

const StyledContentBox = styled(Box)(() => ({
  display: 'flex',
  gap: '3rem',
  justifyContent: 'space-between',
  flexDirection: 'column',
  alignItems: 'center',
  '@media screen and (min-width: 1024px)': {
    flexDirection: 'row',
  },
}));

const StyledTextBox = styled(Box)(() => ({
  width: '100%',
  '@media screen and (min-width: 1024px)': {
    width: '50%',
  },
}));

const StyledImageBox = styled(Box)(({ theme }) => ({
  width: '100%',
  aspectRatio: '1/1',
  maxWidth: '650px',
  backgroundColor: theme.palette.grey[400],
  borderRadius: '0.5rem',
}));

const StyledDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[400],
  marginBottom: '1.5rem',
  fontSize: '1rem',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  color: 'black',
  display: 'flex',
  borderRadius: 6,
  padding: '.5rem 1rem',
  fontSize: '.875rem',
  lineHeight: '1.25rem',
  fontWeight: '500',
  textTransform: 'uppercase',
  boxShadow: 'none',
  width: 'fit-content',
  backgroundColor: '#c0c0c0',
  marginTop: '2rem',

  transition: theme.palette.transitions?.create(['background-color', 'color'], {
    duration: theme.palette.transitions.duration.short,
    easing: theme.palette.transitions.easing.easeIn,
  }),

  '&:hover': {
    backgroundColor: '#a0a0a0',
  },
}));

const OurPhilosophy = () => {
  return (
    <WrapperContainer backGroundWrapper="palette.background.default">
      <StyledContentBox>
        <StyledTextBox>
          <Title>НАША ФИЛОСОФИЯ</Title>
          <StyledDescription>
            Мы верим, что ювелирные украшения должны быть не только красивыми, но и функциональными, комфортными и
            долговечными. Именно поэтому мы выбрали титан в качестве основного материала для наших изделий.
          </StyledDescription>
          <StyledDescription>
            Наша миссия — создавать инновационные украшения, которые сочетают в себе современный дизайн, передовые
            технологии и исключительное качество. Мы стремимся предложить альтернативу традиционным ювелирным изделиям
            для тех, кто ценит уникальность, комфорт и долговечность.
          </StyledDescription>

          <StyledButton href="/catalog">СМОТРЕТЬ КОЛЛЕКЦИЮ</StyledButton>
        </StyledTextBox>
        <StyledImageBox>
          <Skeleton variant="rectangular" width={'100%'} height={'100%'} sx={{ borderRadius: '0.5rem' }} />
        </StyledImageBox>
      </StyledContentBox>
    </WrapperContainer>
  );
};

export default OurPhilosophy;
