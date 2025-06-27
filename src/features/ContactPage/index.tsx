'use client';

import React from 'react';

import { Box, styled } from '@mui/material';
import WrapperContainer from '@wns/shared/ui/WrapperContainer';
import Banner from '@wns/widgets/Banner';

import ContactDesign from './components/ContactDesign/ContactDesign';
import ContactInfoSection from './components/ContactInfo/ContactInfo';
import ContactMap from './components/ContactMap/ContactMap';

const StyledWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '3rem',
}));
const ContactPage = () => {
  return (
    <>
      <Banner title="Контакты" description="Мы всегда рады ответить на ваши вопросы и помочь с выбором украшений" />
      <WrapperContainer backGroundWrapper="palette.background.default">
        <StyledWrapper>
          <ContactInfoSection />
          <ContactMap />
          <ContactDesign />
        </StyledWrapper>
      </WrapperContainer>
    </>
  );
};

export default ContactPage;
