import { FC, useState } from 'react';
import { IoCartOutline } from 'react-icons/io5';

import { Box, Button, Divider, TextField, Typography, styled } from '@mui/material';

import { ProductType } from '@wns/features/CatalogPage/components/CatalogList/model/ProductTypes';

const StyledProductName = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '1.875rem',
}));

const StyledProductPrice = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: '1.5rem',
}));

const StyledDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[400],
  lineHeight: '1.5rem',
}));

const SizeButton = styled(Button)(({ theme }) => ({
  minWidth: 40,
  minHeight: 40,
  backgroundColor: theme.palette.background.default,
  borderColor: theme.palette.grey[400],
  color: theme.palette.grey[400],
}));

const QuantityBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(1),
}));

const QuantityButton = styled(Button)(({ theme }) => ({
  minWidth: 40,
  minHeight: 40,
  fontSize: '1.25rem',
  lineHeight: '1rem',
  backgroundColor: theme.palette.background.default,
  borderColor: theme.palette.grey[400],
  color: theme.palette.grey[400],
  '&:hover': {
    backgroundColor: theme.palette.grey[600],
    color: theme.palette.grey[300],
  },
}));

const CartButton = styled(Button)(({ theme }) => ({
  color: 'black',
  backgroundColor: theme.palette.grey[400],
  margin: '2rem 0',
  width: '100%',
  gap: '1rem',
  '&:hover': {
    backgroundColor: theme.palette.grey[500],
  },
}));

const Text = styled(Typography)(({ theme }) => ({
  fontSize: '.875rem',
  lineHeight: '1.25rem',
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  backgroundColor: theme.palette.grey[600],
  borderRadius: '8px',
  marginTop: '1rem',
  flex: 1,
  height: 'fit-content',
  div: {
    borderRadius: '8px',
  },
  input: {
    padding: '0.75rem 1rem',
    borderRadius: '8px',
  },
}));

type Props = {
  product: ProductType;
};

const ProductInfo: FC<Props> = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState<number>(0);
  const [count, setCount] = useState<number>(1);
  return (
    <>
      <StyledProductName variant="h6" fontWeight="bold">
        {product.name}
      </StyledProductName>
      <StyledProductPrice variant="h5" fontWeight="bold" mb={2}>
        {product.price} ₽
      </StyledProductPrice>
      <StyledDescription variant="body2" mb={2}>
        Минималистичное кольцо из титана с матовой отделкой. Уникальный дизайн, вдохновленный космическими орбитами,
        делает это кольцо идеальным аксессуаром для повседневной носки и особых случаев.
      </StyledDescription>

      <Typography variant="body2">РАЗМЕР</Typography>
      <Box sx={{ display: 'flex', gap: 1, my: 1 }}>
        {[16, 17, 18, 19, 20].map((size) => (
          <SizeButton
            key={size}
            variant="outlined"
            size="small"
            onClick={() => setSelectedSize(size)}
            sx={{
              backgroundColor: size === selectedSize ? '#00c2b3' : '',
              color: size === selectedSize ? 'black' : '',
              borderColor: size === selectedSize ? '#00c2b3' : '',
            }}
          >
            {size}
          </SizeButton>
        ))}
      </Box>
      {selectedSize !== 0 && (
        <Text variant="body2" color={'#00c2b3'}>
          Выбран размер: {selectedSize}
        </Text>
      )}
      <Text variant="body2" marginTop={'1rem'}>
        КОЛИЧЕСТВО
      </Text>
      <QuantityBox>
        <QuantityButton
          variant="outlined"
          size="small"
          onClick={() => {
            setCount((prev) => (prev > 1 ? prev - 1 : prev));
          }}
        >
          -
        </QuantityButton>
        <Typography>{count}</Typography>
        <QuantityButton variant="outlined" size="small" onClick={() => setCount((prev) => prev + 1)}>
          +
        </QuantityButton>
      </QuantityBox>

      <CartButton fullWidth variant="contained">
        <IoCartOutline size={18} />
        Добавить в корзину
      </CartButton>
      <Divider />
      <Text variant="body2" sx={{ mt: 2 }}>
        ПЕРСОНАЛИЗАЦИЯ
      </Text>
      <StyledDescription variant="body2" sx={{ mt: 1 }}>
        Добавьте гравировку на ваше изделие (до 20 символов)
      </StyledDescription>
      <StyledTextField variant="outlined" fullWidth placeholder="Введите текст для гравировки" size="small" />
    </>
  );
};

export default ProductInfo;
