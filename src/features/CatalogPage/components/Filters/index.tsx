import { useState } from 'react';
import { FiFilter } from 'react-icons/fi';
import { MdOutlineExpandMore } from 'react-icons/md';

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Slider,
  Typography,
} from '@mui/material';
import { styled } from '@mui/system';

import {
  categoryOptions,
  collectionOptions,
  materialOptions,
} from '@wns/features/CatalogPage/components/Filters/model/filterOptions';

const FilterWrapper = styled('div')(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    flexDirection: 'column',
    width: '16rem',
    flexShrink: '0',
  },
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: '1.25rem',
  marginBottom: '1rem',
  fontWeight: 600,
}));

const StyledButton = styled(Button)(({ theme }) => ({
  color: 'black',
  display: 'flex',
  borderRadius: 6,
  padding: '.5rem .75rem',
  fontSize: '.875rem',
  lineHeight: '1.25rem',
  fontWeight: '500',
  textTransform: 'uppercase',
  boxShadow: 'none',
  width: 'fit-content',

  transition: theme.palette.transitions?.create(['background-color', 'color'], {
    duration: theme.palette.transitions.duration.short,
    easing: theme.palette.transitions.easing.easeIn,
  }),
}));

const StyledOutlinedButton = styled(StyledButton)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  borderColor: theme.palette.grey[400],
  color: theme.palette.grey[400],
  '&:hover': {
    backgroundColor: theme.palette.grey[600],
    color: theme.palette.primary.contrastText,
  },
}));

const StyledAccordion = styled(Accordion)({
  backgroundColor: 'transparent',
  margin: '1rem 0 !important',
  marginBottom: '0 !important',
  '&::before': {
    display: 'none',
  },
});

const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  color: theme.palette.grey[400],
  textTransform: 'uppercase',
  padding: '0',
  minHeight: '36px',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

const StyledAccordionDetails = styled(AccordionDetails)({
  display: 'flex',
  flexDirection: 'column',
  padding: '.5rem 0',
});

const StyledFormControlLabel = styled(FormControlLabel)({
  '& .MuiFormControlLabel-label': {
    fontSize: '0.875rem',
  },
});

const StyledCheckbox = styled(Checkbox)(({ theme }) => ({
  color: theme.palette.primary.dark,
  padding: '0 8px',
  '&:hover': {
    backgroundColor: 'transparent',
  },
}));

const StyledCatalogButton = styled(StyledButton)(({ theme }) => ({
  backgroundColor: theme.palette.grey[400],
  marginTop: '1rem',
  width: '100%',
  '&:hover': {
    backgroundColor: theme.palette.grey[500],
  },
}));

const FilterButton = styled(StyledOutlinedButton)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  textTransform: 'none',
  width: '100%',
  color: theme.palette.grey[400],
  borderColor: theme.palette.grey[400],
  borderWidth: '1px !important',
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

const FilterLength = styled('div')({
  backgroundColor: '#00ffaa',
  color: 'black',
  borderRadius: '9999px',
  padding: '.125rem .5rem',
});

const Filters = () => {
  const [priceRange, setPriceRange] = useState<number[]>([5000, 25000]);

  return (
    <Box>
      <FilterWrapper>
        <StyledTitle>ФИЛЬТРЫ</StyledTitle>
        <StyledOutlinedButton variant="outlined">Сбросить все</StyledOutlinedButton>
        <StyledAccordion defaultExpanded disableGutters elevation={0}>
          <StyledAccordionSummary expandIcon={<MdOutlineExpandMore size={24} />}>
            <Typography>Категория</Typography>
          </StyledAccordionSummary>
          <StyledAccordionDetails>
            {categoryOptions.map((label) => (
              <StyledFormControlLabel key={label} control={<StyledCheckbox color="success" />} label={`${label} (6)`} />
            ))}
          </StyledAccordionDetails>
        </StyledAccordion>

        <Divider sx={{ my: 1 }} />

        <StyledAccordion defaultExpanded disableGutters elevation={0}>
          <StyledAccordionSummary expandIcon={<MdOutlineExpandMore size={24} />}>
            <Typography>Цена</Typography>
          </StyledAccordionSummary>
          <StyledAccordionDetails>
            <Slider
              max={30000}
              min={1000}
              step={1000}
              sx={(theme) => ({
                color: theme.palette.primary.dark,
              })}
              value={priceRange}
              valueLabelDisplay="off"
              onChange={(_, newValue) => setPriceRange(newValue as number[])}
            />
            <Box display="flex" justifyContent="space-between">
              <Typography fontSize=".875rem">{priceRange[0].toLocaleString()} ₽</Typography>
              <Typography fontSize=".875rem">{priceRange[1].toLocaleString()} ₽</Typography>
            </Box>
          </StyledAccordionDetails>
        </StyledAccordion>

        <Divider sx={{ my: 1 }} />

        <StyledAccordion defaultExpanded disableGutters elevation={0}>
          <StyledAccordionSummary expandIcon={<MdOutlineExpandMore size={24} />}>
            <Typography>Материал</Typography>
          </StyledAccordionSummary>
          <StyledAccordionDetails>
            {materialOptions.map((label) => (
              <StyledFormControlLabel key={label} control={<StyledCheckbox color="success" />} label={label} />
            ))}
          </StyledAccordionDetails>
        </StyledAccordion>

        <Divider sx={{ my: 1 }} />

        <StyledAccordion elevation={0} disableGutters>
          <StyledAccordionSummary expandIcon={<MdOutlineExpandMore size={24} />}>
            <Typography>Коллекция</Typography>
          </StyledAccordionSummary>
          <StyledAccordionDetails>
            {collectionOptions.map((label) => (
              <StyledFormControlLabel key={label} control={<StyledCheckbox color="success" />} label={label} />
            ))}
          </StyledAccordionDetails>
        </StyledAccordion>
        <Divider sx={{ my: 1 }} />
        <StyledCatalogButton>Применить фильтры</StyledCatalogButton>
      </FilterWrapper>
      <FilterButton>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '.5rem',
          }}
        >
          <FiFilter />
          Фильтры
        </Box>
        <FilterLength>4</FilterLength>
      </FilterButton>
    </Box>
  );
};

export default Filters;
