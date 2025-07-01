'use client';

import React, { FC, useState } from 'react';

import { Box, Button, Tab, Tabs } from '@mui/material';
import { styled } from '@mui/system';
import Title from '@wns/shared/ui/Title';

import BasicInformation from '@wns/features/ProductForm/components/BasicInformation';
import DetailsFeatures from '@wns/features/ProductForm/components/Details&Features';
import Images from '@wns/features/ProductForm/components/Images';

type Props = {
  initialValues?: {
    name: string;
    category: string;
    description: string;
    price: string;
    stock: string;
    isNew: boolean;
    isLimited: boolean;
    details: {
      sizes: string[];
      features: string[];
      careInstructions: string[];
    };
    images: string[];
  };
  isEdit?: boolean;
};

const Wrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: '1rem',
}));

const StyledTabs = styled(Tabs)(({ theme }) => ({
  backgroundColor: theme.palette.grey[600],
  padding: '.2rem',
  minHeight: '24px',
  borderRadius: '4px',
  '& .MuiTab-root': {
    color: theme.palette.text.secondary,
    minWidth: 'calc(100%/3)',
    textTransform: 'none',
    padding: '8px 16px',
    minHeight: '24px',
    '&.Mui-selected': {
      color: '#fff',
      backgroundColor: '#333333',
      borderRadius: '4px',
    },
  },

  '& .MuiTabs-indicator': {
    display: 'none',
  },
}));

const StyledButtonGroup = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  marginTop: '1rem',
  gap: '.5rem',
});

const StyledButton = styled(Button)(({ theme }) => ({
  color: 'black',
  display: 'flex',
  borderRadius: 6,
  padding: '0.5rem 1rem',
  fontSize: '0.75rem',
  lineHeight: '1.25rem',
  fontWeight: '500',
  textTransform: 'none',
  boxShadow: 'none',

  transition: theme.palette.transitions?.create(['background-color', 'color'], {
    duration: theme.palette.transitions.duration.short,
    easing: theme.palette.transitions.easing.easeIn,
  }),
}));

const StyledSubmitButton = styled(StyledButton)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const StyledOutlinedButton = styled(StyledButton)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  border: `1px solid ${theme.palette.grey[500]}`,
  color: theme.palette.grey[500],
  '&:hover': {
    backgroundColor: theme.palette.grey[600],
    color: theme.palette.grey[400],
  },
}));

const ProductForm: FC<Props> = ({ isEdit, initialValues }) => {
  const [value, setValue] = useState(0);

  const productInfo = initialValues || {
    name: '',
    category: '',
    description: '',
    price: '',
    stock: '',
    isNew: false,
    isLimited: false,
    details: {
      sizes: ['16', '17', '18', '19', '20'],
      features: [''],
      careInstructions: [''],
    },
    images: [],
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Wrapper>
      <Title sx={{ textTransform: 'none' }} align={'left'}>
        {isEdit ? 'Edit' : 'Add New'} Product
      </Title>
      <StyledTabs value={value} onChange={handleChange}>
        <Tab label="Basic Information" />
        <Tab label="Details & Features" />
        <Tab label="Images" />
      </StyledTabs>
      {value === 0 && <BasicInformation initialValues={productInfo} />}
      {value === 1 && <DetailsFeatures details={productInfo.details} />}
      {value === 2 && <Images image={productInfo.images} />}
      <StyledButtonGroup>
        <StyledOutlinedButton href={'/admin/products'}>Cancel</StyledOutlinedButton>
        <StyledSubmitButton href={'/admin/products'}>{isEdit ? 'Update' : 'Create'} Product</StyledSubmitButton>
      </StyledButtonGroup>
    </Wrapper>
  );
};

export default ProductForm;
