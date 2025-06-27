import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

import { Button, Chip, Typography, styled } from '@mui/material';

import { ProductType } from '@wns/features/CatalogPage/components/CatalogList/model/ProductTypes';

const StyledCard = styled(Link)(({ theme }) => ({
  borderRadius: '.5rem',
  backgroundColor: theme.palette.grey[600],
  textDecoration: 'none',
  overflow: 'hidden',
  transition: theme.transitions?.create(['box-shadow', 'transform'], {
    duration: theme.transitions.duration.standard,
    easing: theme.transitions.easing.easeIn,
  }),
  '&:hover': {
    boxShadow: '0 10px 15px -3px rgba(0, 255, 170, 0.2), 0 4px 6px -4px rgba(0, 255, 170, 0.2)',
    transform: 'translateY(-5px)',
  },
}));

const CardContainer = styled('div')({
  padding: '1rem',
});

const StyledWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '.5rem',
  justifyContent: 'space-between',
});

const StyledTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '1.25rem',
  fontWeight: 600,
}));

const StyledPrice = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: '1.25rem',
  fontWeight: 600,
}));

const StyledDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[400],
  fontSize: '.875rem',
  marginBottom: '.75rem',
}));

const StyledCategory = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[500],
  fontSize: '.75rem',
}));

const ImageContainer = styled('div')({
  position: 'relative',
  aspectRatio: '1/1',
});

const TagsContainer = styled('div')({
  position: 'absolute',
  top: '0.5rem',
  right: '0.5rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.25rem',
  zIndex: 2,
});

const DetailsButton = styled(Button)(({ theme }) => ({
  color: '#00ffaa',
  border: '1px solid #00ffaa',
  fontWeight: 400,
  fontSize: '0.875rem',
  borderRadius: '0.5rem',
  textTransform: 'uppercase',
  padding: '.25rem .75rem',
  transition: theme.transitions?.create(['background-color'], {
    duration: theme.transitions.duration.standard,
    easing: theme.transitions.easing.easeIn,
  }),

  '&:hover': {
    backgroundColor: 'rgba(0, 255, 170, 0.08)',
  },
}));

type Props = {
  product: ProductType;
};

const ProductCard: FC<Props> = ({ product }) => {
  const getTagColor = (tag: string) => {
    switch (tag) {
      case 'НОВИНКА':
        return { backgroundColor: '#00ffaa', color: '#000' };
      case 'ЛИМИТИРОВАННАЯ СЕРИЯ':
        return { backgroundColor: '#ff007f', color: '#fff' };
      default:
        return { backgroundColor: '#999', color: '#fff' };
    }
  };

  return (
    <StyledCard href={`/catalog/${product.id}`}>
      <ImageContainer>
        <Image fill alt={product.name} src="/mockImage/placeholderBanner.png" style={{ objectFit: 'cover' }} />
        <TagsContainer>
          {product.tags?.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              size="small"
              sx={{
                fontWeight: 600,
                fontSize: '0.75rem',
                height: 'auto',
                px: 0.25,
                py: 0.25,
                borderRadius: '4px',
                ...getTagColor(tag),
              }}
            />
          ))}
        </TagsContainer>
      </ImageContainer>
      <CardContainer>
        <StyledWrapper>
          <StyledTitle>{product.name}</StyledTitle>
          <StyledPrice>{product.price.toLocaleString()} ₽</StyledPrice>
        </StyledWrapper>
        <StyledDescription>{product.description}</StyledDescription>
        <StyledWrapper>
          <StyledCategory>{product.category}</StyledCategory>
          <DetailsButton>Подробнее</DetailsButton>
        </StyledWrapper>
      </CardContainer>
    </StyledCard>
  );
};

export default ProductCard;
