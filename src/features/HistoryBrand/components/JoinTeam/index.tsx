'use client';

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
  background: 'linear-gradient(90deg, #222222 0%, #333333 100%)',
  borderRadius: '8px',
  margin: '0 auto',
  padding: '2rem',
  width: '100%',

  [theme.breakpoints.up('sm')]: {
    padding: '3rem',
  },
}));

const StyledDescription = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  textAlign: 'center',
  marginBottom: '40px',
  color: theme.palette.grey[400],
  maxWidth: '48rem',
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
  backgroundColor: '#c0c0c0',
  '&:hover': {
    backgroundColor: '#a0a0a0',
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

const JoinTeam = () => {
  return (
    <WrapperContainer backGroundWrapper="palette.background.default">
      <StyledSectionContainer>
        <Title>СТАНЬТЕ ЧАСТЬЮ НАШЕЙ ИСТОРИИ</Title>

        <StyledDescription>
          Присоединяйтесь к нам в путешествии по миру современных украшений из титана.
          <br />
          Откройте для себя уникальные изделия, которые сочетают в себе инновации, комфорт и стиль.
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

export default JoinTeam;
