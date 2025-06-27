import Image from 'next/image';
import React from 'react';
import { HiOutlineLocationMarker } from 'react-icons/hi';

import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';
import Title from '@wns/shared/ui/Title';

const StyledContainer = styled(Box)(({ theme }) => ({
  padding: '2rem 1rem',
  backgroundColor: theme.palette.grey['600'],
  borderRadius: '8px',
}));

const StyledMapContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  background: theme.palette.grey['500'],
  borderRadius: '8px',
  aspectRatio: '4/3',
  [theme.breakpoints.up('sm')]: {
    aspectRatio: '16/9',
  },
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));
const MapPoint = styled(HiOutlineLocationMarker)(({ theme }) => ({
  fontSize: '50px',
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.grey['600'],
  padding: '0.3rem',
  border: `5px solid ${theme.palette.primary.main}`,
  borderRadius: '50%',
}));
const MapText = styled(Typography)(({ theme }) => ({}));
const MapTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  fontSize: '1.2rem',
}));
const StyledText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textAlign: 'center',
  margin: '1rem 0',
}));
const StyledOutlinedButton = styled(Button)(({ theme }) => ({
  justifySelf: 'center',
  display: 'flex',
  borderRadius: 6,
  padding: '0.75rem 2rem',
  fontSize: '.875rem',
  lineHeight: '1.25rem',
  fontWeight: '500',
  textTransform: 'uppercase',
  boxShadow: 'none',
  color: theme.palette.grey['600'],
  backgroundColor: theme.palette.grey['300'],

  '@media (hover: hover)': {
    ':hover': {
      backgroundColor: theme.palette.grey['400'],
    },
  },
}));
const ContactMap: React.FC = () => {
  return (
    <StyledContainer>
      <Title align="center">КАК НАС НАЙТИ</Title>

      <StyledMapContainer>
        <MapPoint />
        <MapTitle>Титан</MapTitle>
        <MapText>ул.Тверская, 15</MapText>
      </StyledMapContainer>
      <StyledText>Наш шоу-рум расположен в центре Москвы, в пешей доступности от станции метро "Тверская"</StyledText>
      <StyledOutlinedButton>Построить маршрут</StyledOutlinedButton>
    </StyledContainer>
  );
};

export default ContactMap;
