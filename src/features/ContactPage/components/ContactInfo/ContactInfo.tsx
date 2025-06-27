import React from 'react';

import ContactForm from './ContactForm/ContactForm';
import { ContactInfoMock, ContactTimeTypeMock } from './model/contactInfo.mock';
import { Box, Typography, styled } from '@mui/material';
import Title from '@wns/shared/ui/Title';

const SectionContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
}));

const ContactsWrapper = styled(Box)(() => ({
  flex: '1',
}));

const TitleSection = styled(Box)(() => ({
  marginBottom: '1.5rem',
}));

const ContactsUsContainer = styled(Box)(() => ({
  display: 'flex',
  gap: '1rem',
  flexDirection: 'column',
}));

const ContactCard = styled(Box)(() => ({
  display: 'flex',
  gap: '1rem',
  alignItems: 'center',
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  color: theme.palette.primary.light,
  backgroundColor: theme.palette.grey['600'],
  borderRadius: '50%',
  display: 'flex',
  padding: '.6rem',
}));

const TitleText = styled(Typography)(() => ({
  fontWeight: '600',
  fontSize: '1.2rem',
}));

const DetailText = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  color: theme.palette.grey['500'],
  fontWeight: '400',
}));

const ContactsTimeContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '1rem',
  flexWrap: 'wrap',
  backgroundColor: theme.palette.grey[600],
  padding: '1rem',
  borderRadius: '8px',
}));

const TimeItem = styled(Box)(({ theme }) => ({
  width: 'calc(50% - 1rem)',
}));

const ContactInfoSection = () => {
  return (
    <SectionContainer>
      <ContactsWrapper>
        <TitleSection>
          <Title align="left">СВЯЗАТЬСЯ С НАМИ</Title>
        </TitleSection>

        <ContactsUsContainer>
          {ContactInfoMock.map((item, index) => (
            <Box key={index}>
              <ContactCard>
                <IconWrapper>{item.icon}</IconWrapper>
                <Box>
                  <TitleText>{item.title}</TitleText>
                  <DetailText>{item.details[0]}</DetailText>
                  <DetailText display="block">{item.details[1]}</DetailText>
                </Box>
              </ContactCard>
            </Box>
          ))}
        </ContactsUsContainer>

        <Box sx={{ marginTop: '2rem' }}>
          <Title align="left" sx={{ fontSize: '1rem !important' }}>
            ЧАСЫ РАБОТЫ
          </Title>
          <ContactsTimeContainer>
            {ContactTimeTypeMock.map((item, index) => (
              <TimeItem key={index}>
                <TitleText>{item.title}</TitleText>
                <DetailText>{item.description}</DetailText>
              </TimeItem>
            ))}
          </ContactsTimeContainer>
        </Box>
      </ContactsWrapper>

      <ContactForm />
    </SectionContainer>
  );
};

export default ContactInfoSection;
