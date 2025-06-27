'use client';

import Image from 'next/image';
import React from 'react';

import { Typography } from '@mui/material';
import { Box, styled } from '@mui/system';

// Styled components
const StyledTitle = styled(Typography)(() => ({
  fontSize: '2rem',
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: '32px',
  '@media screen and (min-width: 768px)': {
    fontSize: '2.5rem',
  },
  '@media screen and (min-width: 1024px)': {
    fontSize: '3.5rem',
  },
}));

const StyledDescription = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: '35px',
  maxWidth: '700px',
  [theme.breakpoints.up('sm')]: {
    fontSize: '1rem',
    lineHeight: '1.75rem',
  },
}));

const StyledBannerContainer = styled(Box)(({ theme }) => ({
  height: '100%',
  position: 'relative',
  aspectRatio: '6/4',
  overflow: 'hidden',
  [theme.breakpoints.up('sm')]: { aspectRatio: '16/4' },
}));

const StyledOverlay = styled(Box)(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'linear-gradient(to top, #1A1A1A , transparent)',
  zIndex: 1,
}));

const StyledContentBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  padding: '1rem',
  position: 'relative',
  zIndex: 2,
  [theme.breakpoints.up('sm')]: { padding: '2rem' },
}));

type Props = {
  title: string;
  description: string;
  src?: string;
};

const Banner = (props: Props) => {
  const { title, description, src = '/mockImage/placeholderBanner.png' } = props;

  return (
    <StyledBannerContainer>
      <Image src={src} fill alt={`banner ${title}`} style={{ objectFit: 'cover' }} />

      <StyledOverlay />

      <StyledContentBox>
        <StyledTitle variant="h1">{title}</StyledTitle>
        <StyledDescription variant="body1">{description}</StyledDescription>
      </StyledContentBox>
    </StyledBannerContainer>
  );
};

export default Banner;
