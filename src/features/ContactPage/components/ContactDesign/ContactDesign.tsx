import React from 'react';

import { Box, Button, Typography, styled } from '@mui/material';
import Title from '@wns/shared/ui/Title';

const StyledContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  justifyContent: 'space-between',
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
  },
}));
const StyledText = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  color: theme.palette.grey['300'],
  margin: '.5rem 0',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  textTransform: 'uppercase',
  color: theme.palette.grey['600'],
  marginTop: '1rem',
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: 'auto',
  },
}));

const StyledDesignContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1rem',
  marginTop: '1rem',
  width: '100%',
  flex: 1,
}));

const StyledDesignBlock = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  borderRadius: '8px',
  width: 'calc(50% - .5rem)',
  aspectRatio: 1 / 1,
}));

const ContactDesign = () => {
  return (
    <StyledContainer>
      <Box sx={{ flex: 1 }}>
        <Title align="left">ИНДИВИДУАЛЬНЫЙ ДИЗАЙН</Title>
        <StyledText>
          Мы предлагаем услугу создания украшений по индивидуальному дизайну. Наши мастера воплотят в жизнь вашу идею,
          создав уникальное украшение, которое будет отражать вашу индивидуальность.
        </StyledText>
        <StyledText>
          От эскиза до готового изделия — мы сопровождаем вас на каждом этапе создания вашего украшения, обеспечивая
          высочайшее качество и внимание к деталям.
        </StyledText>
        <StyledButton variant="contained">Заказать индивидуальный дизайн</StyledButton>
      </Box>

      <StyledDesignContainer>
        <StyledDesignBlock />
        <StyledDesignBlock />
        <StyledDesignBlock />
        <StyledDesignBlock />
      </StyledDesignContainer>
    </StyledContainer>
  );
};

export default ContactDesign;
