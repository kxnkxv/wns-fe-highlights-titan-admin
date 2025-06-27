import React from 'react';

import { Button, Link, Typography, styled } from '@mui/material';

const StyledTitle = styled(Typography)(({ theme }) => ({
  fontSize: '2.5rem',
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: '32px',
  '@media screen and (min-width: 768px)': {
    fontSize: '3.5rem',
  },
  '@media screen and (min-width: 1024px)': {
    fontSize: '4.5rem',
  },
  '>span': {
    color: theme.palette.grey[500],
  },
}));

const StyledDescription = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: '35px',
  color: theme.palette.grey[400],
  maxWidth: '700px',
  '@media screen and (min-width: 768px)': {
    fontSize: '1.25rem',
    lineHeight: '1.75rem',
  },
}));

const StyledButtonGroup = styled('div')(() => ({
  display: 'flex',
  gap: '1rem',
  flexDirection: 'column',
  '@media screen and (min-width: 768px)': {
    flexDirection: 'row',
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  color: 'black',
  display: 'flex',
  borderRadius: 6,
  padding: '0.75rem 2rem',
  fontSize: '.875rem',
  lineHeight: '1.25rem',
  fontWeight: '500',
  textTransform: 'none',
  boxShadow: 'none',
  width: '100%',
  transition: theme.transitions?.create(['background-color', 'color'], {
    duration: theme.transitions.duration.short,
    easing: theme.transitions.easing.easeIn,
  }),
}));
const StyledCatalogButton = styled(StyledButton)(({ theme }) => ({
  backgroundColor: theme.palette.grey[400],
  '&:hover': {
    backgroundColor: theme.palette.grey[600],
    color: theme.palette.grey[300],
  },
}));

const StyledOutlinedButton = styled(StyledButton)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  borderColor: theme.palette.grey[400],
  color: theme.palette.grey[400],
  '&:hover': {
    backgroundColor: theme.palette.grey[600],
    color: theme.palette.grey[300],
  },
}));

const MainBanner = () => {
  return (
    <>
      <StyledTitle variant="h1">
        <span>HIGHLIGHTS:</span> СИЛА ЭСТЕТИКИ
      </StyledTitle>
      <StyledDescription variant="body1">
        Эксклюзивные ювелирные изделия из титана, воплощающие прочность, легкость и современный дизайн
      </StyledDescription>
      <StyledButtonGroup>
        <Link href="/catalog" underline="none">
          <StyledCatalogButton fullWidth>КАТАЛОГ</StyledCatalogButton>
        </Link>
        <Link href="/about-material" underline="none">
          <StyledOutlinedButton variant="outlined" fullWidth>
            О МАТЕРИАЛЕ
          </StyledOutlinedButton>
        </Link>
      </StyledButtonGroup>
    </>
  );
};

export default MainBanner;
