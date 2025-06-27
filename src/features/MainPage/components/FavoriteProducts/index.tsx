import Link from 'next/link';
import React, { FC } from 'react';

import { Button, styled } from '@mui/material';
import ProductCard from '@wns/shared/ui/ProductCard';
import Title from '@wns/shared/ui/Title';
import WrapperContainer from '@wns/shared/ui/WrapperContainer';

import { mockFavorite } from '@wns/features/MainPage/components/FavoriteProducts/model/favorite.mock';

const GridWrapper = styled('div')(({ theme }) => ({
  display: 'grid',
  gap: theme.spacing(4),
  gridTemplateColumns: '1fr',
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: '1fr 1fr',
  },
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: '1fr 1fr 1fr',
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  color: 'black',
  display: 'flex',
  borderRadius: 6,
  padding: '0.75rem 2rem',
  fontSize: '.875rem',
  lineHeight: '1.25rem',
  fontWeight: '500',
  textTransform: 'uppercase',
  boxShadow: 'none',
  width: '100%',
  transition: theme.transitions?.create(['background-color', 'color'], {
    duration: theme.transitions.duration.short,
    easing: theme.transitions.easing.easeIn,
  }),
}));

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  display: 'flex',
  margin: '3rem auto 0',
}));

const StyledOutlinedButton = styled(StyledButton)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  borderColor: theme.palette.grey[400],
  color: theme.palette.grey[400],
  '&:hover': {
    backgroundColor: theme.palette.grey[600],
    color: theme.palette.grey[300],
  },
}));

const FavoriteProducts: FC = () => {
  return (
    <WrapperContainer backGroundWrapper="palette.background.default">
      <Title align={'center'}>Избранные изделия</Title>
      <GridWrapper>
        {mockFavorite.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </GridWrapper>
      <StyledLink href="/catalog">
        <StyledOutlinedButton variant="outlined" fullWidth>
          Смотреть все изделия
        </StyledOutlinedButton>
      </StyledLink>
    </WrapperContainer>
  );
};

export default FavoriteProducts;
