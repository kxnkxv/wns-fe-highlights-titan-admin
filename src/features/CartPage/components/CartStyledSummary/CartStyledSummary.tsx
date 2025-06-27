import React from 'react';
import { MdExpandMore } from 'react-icons/md';

import { Accordion, AccordionDetails, AccordionSummary, Divider, Typography } from '@mui/material';
import { styled } from '@mui/system';

export const StyledAccordion = styled(Accordion)(({ theme }) => ({
  boxShadow: 'none',
  backgroundColor: 'transparent',
  backgroundImage: 'none',
  borderRadius: '0',
  borderBottom: `1px solid var(--mui-palette-divider)`,

  ':before': {
    display: 'none',
  },
  '&.Mui-expanded': {
    margin: 0,
  },
  ':last-of-type': {
    borderBottomLeftRadius: '0',
    borderBottomRightRadius: '0',
  },
}));

export const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  minHeight: '20px',
  margin: '0.8rem 0',
  padding: '0.5rem 0',
  '&.Mui-expanded': {
    minHeight: '20px',
  },

  '& .MuiAccordionSummary-content.Mui-expanded': {
    margin: 0,
  },
  '& .MuiAccordionSummary-content': {
    margin: 0,
  },
}));

export const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  padding: 0,
  marginBottom: '0.8rem',
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
  textTransform: 'uppercase',
  fontSize: '0.8rem',
  fontWeight: '400',
}));

type Props = {
  children: React.ReactNode;
  title: string;
};

const CartStyledSummary: React.FC<Props> = ({ children, title }) => {
  return (
    <StyledAccordion>
      <StyledAccordionSummary expandIcon={<MdExpandMore size={20} />} aria-controls="panel-content">
        <StyledTypography>{title}</StyledTypography>
      </StyledAccordionSummary>
      <StyledAccordionDetails>{children}</StyledAccordionDetails>
    </StyledAccordion>
  );
};

export default CartStyledSummary;
