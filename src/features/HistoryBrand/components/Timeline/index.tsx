'use client';

import Image from 'next/image';
import React from 'react';

import { Box, Typography, styled } from '@mui/material';
import Title from '@wns/shared/ui/Title';
import WrapperContainer from '@wns/shared/ui/WrapperContainer';

import { timelineMock } from '@wns/features/HistoryBrand/components/Timeline/model/timeline.mock';

const EventWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  marginBottom: '1rem',
  position: 'relative',
  alignItems: 'center',

  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    gap: '0',
    marginBottom: '.5rem',
    padding: '0 3rem',
  },
}));

const StyledTextCard = styled(Box)(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.palette.background.default,
  padding: '1rem 1.2rem',
  borderRadius: '8px',
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: '50%',
  },
}));

const StyledYear = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 'bold',
  fontSize: '1rem',
  marginBottom: '.5rem',
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: 'bold',
  fontSize: '1.25rem',
  lineHeight: '1.75rem',
  marginBottom: '.75rem',
}));

const StyledDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[400],
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  aspectRatio: '16/9',
  width: '100%',
  borderRadius: '8px',
  overflow: 'hidden',

  [theme.breakpoints.up('sm')]: {
    width: '50%',
    aspectRatio: '16/9',
  },
}));

const StyledDot = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: '1rem',
  height: '1rem',
  backgroundColor: theme.palette.primary.main,
  borderRadius: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 2,
  display: 'none',

  [theme.breakpoints.up('sm')]: {
    display: 'block',
  },
}));

const Timeline = () => {
  return (
    <WrapperContainer>
      <Title align={'center'}>Ключевые моменты</Title>

      {timelineMock.map((event, index) => {
        const isEven = index % 2 === 0;

        return (
          <EventWrapper key={event.id}>
            <StyledDot />
            <StyledTextCard
              sx={{
                order: { xs: 1, sm: isEven ? 1 : 2 },
              }}
            >
              <StyledYear>{event.year}</StyledYear>
              <StyledTitle>{event.title}</StyledTitle>
              <StyledDescription>{event.description}</StyledDescription>
            </StyledTextCard>

            <ImageContainer
              sx={{
                order: isEven ? 2 : 1,
                pr: { sm: isEven ? 2 : 0 },
                pl: { sm: isEven ? 0 : 2 },
              }}
            >
              <Image fill alt={event.title} src="/mockImage/placeholderBanner.png" style={{ objectFit: 'cover' }} />
            </ImageContainer>
          </EventWrapper>
        );
      })}
    </WrapperContainer>
  );
};

export default Timeline;
