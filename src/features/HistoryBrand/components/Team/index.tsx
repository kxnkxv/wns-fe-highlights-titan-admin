'use client';

import Image from 'next/image';
import React from 'react';

import { Box, Typography, styled } from '@mui/material';
import Title from '@wns/shared/ui/Title';
import WrapperContainer from '@wns/shared/ui/WrapperContainer';

import { teamMock } from '@wns/features/HistoryBrand/components/Team/model/team.mock';

const GridWrapper = styled('div')(({ theme }) => ({
  display: 'grid',
  gap: theme.spacing(4),
  gridTemplateColumns: '1fr',
  margin: '1rem 0',
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: '1fr 1fr',
  },
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: '1fr 1fr 1fr',
  },
}));

const StyledCard = styled(Box)(({ theme }) => ({
  borderRadius: '.5rem',
  backgroundColor: theme.palette.grey[600],
  textDecoration: 'none',
  overflow: 'hidden',
}));

const CardContainer = styled('div')({
  padding: '1rem',
});

const ImageContainer = styled('div')({
  position: 'relative',
  aspectRatio: '1/1',
});

const StyledTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: '1.25rem',
  fontWeight: 600,
}));

const StyledDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[400],
  fontSize: '1rem',
  marginBottom: '.75rem',
}));

const StyledPosition = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '1rem',
  marginBottom: '.5rem',
}));

const Team = () => {
  return (
    <WrapperContainer backGroundWrapper="palette.background.default">
      <Title align={'center'}>НАША КОМАНДА</Title>
      <GridWrapper>
        {teamMock.map((employee) => (
          <StyledCard key={employee.id}>
            <ImageContainer>
              <Image fill alt={employee.name} src="/mockImage/placeholderBanner.png" style={{ objectFit: 'cover' }} />
            </ImageContainer>
            <CardContainer>
              <StyledTitle>{employee.name}</StyledTitle>
              <StyledPosition>{employee.position}</StyledPosition>
              <StyledDescription>{employee.description}</StyledDescription>
            </CardContainer>
          </StyledCard>
        ))}
      </GridWrapper>
    </WrapperContainer>
  );
};

export default Team;
