import Link from 'next/link';
import React from 'react';

import { Button, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import Title from '@wns/shared/ui/Title';
import WrapperContainer from '@wns/shared/ui/WrapperContainer';

const StyledSectionContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: theme.palette.grey[600],
  borderRadius: '8px',
  margin: '0 auto',
  padding: '2rem',
  [theme.breakpoints.up('sm')]: {
    padding: '3rem',
  },
}));

const StyledDescription = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  textAlign: 'center',
  marginBottom: '40px',
  color: theme.palette.grey[400],
}));
const StyledButtonGroup = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: '1rem',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  [theme.breakpoints.up('sm')]: {
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
  textTransform: 'uppercase',
  boxShadow: 'none',

  transition: theme.palette.transitions?.create(['background-color', 'color'], {
    duration: theme.palette.transitions.duration.short,
    easing: theme.palette.transitions.easing.easeIn,
  }),
}));

const StyledCatalogButton = styled(StyledButton)(({ theme }) => ({
  backgroundColor: theme.palette.grey[400],
  '&:hover': {
    backgroundColor: theme.palette.grey[500],
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
const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: '240px',
  },
}));
const AboutFooter = () => {
  return (
    <WrapperContainer backGroundWrapper="palette.background.default">
      <StyledSectionContainer>
        <Title>ОТКРОЙТЕ ДЛЯ СЕБЯ ТИТАН</Title>

        <StyledDescription>
          Познакомьтесь с нашей коллекцией титановых украшений и откройте для себя новый стандарт качества, комфорта и
          стиля
        </StyledDescription>

        <StyledButtonGroup>
          <StyledLink href="/catalog">
            <StyledCatalogButton fullWidth>Смотреть каталог</StyledCatalogButton>
          </StyledLink>
          <StyledLink href="/contact">
            <StyledOutlinedButton variant="outlined" fullWidth>
              Связаться с НАМИ
            </StyledOutlinedButton>
          </StyledLink>
        </StyledButtonGroup>
      </StyledSectionContainer>
    </WrapperContainer>
  );
};

export default AboutFooter;
