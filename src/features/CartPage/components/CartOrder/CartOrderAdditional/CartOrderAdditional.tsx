'use client';

import * as React from 'react';
import { observer } from 'mobx-react-lite';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { FiCreditCard } from 'react-icons/fi';

import CartStyledSummary from '../../CartStyledSummary/CartStyledSummary';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { GIFTED_PRICE } from '@wns/features/CartPage/const/const';
import { formatPrice } from '@wns/shared/utils/productUtils';
import { useStore } from '@wns/stores/StoreContext';

const StyledContainer = styled(Box)(({ theme }) => ({
  marginTop: '1rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.1rem',
}));

const PromocodeFormWrapper = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '.75rem',
  alignItems: 'stretch',

  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
  },
}));

const PromocodeTextField = styled(TextField)(({ theme }) => ({
  backgroundColor: '#333333',
  borderRadius: '8px',
  flex: 1,
  height: 'fit-content',
  '& .MuiOutlinedInput-root': {
    borderRadius: '8px',
    backgroundColor: 'transparent',
  },
  '& input': {
    padding: '0.75rem 1rem',
    borderRadius: '8px',
    color: 'white',
  },
}));

const PromocodeButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.grey[300],
  color: 'black',
  borderRadius: 6,
  padding: '0.5rem 1rem',
  fontSize: '1rem',
  textTransform: 'none',
  boxShadow: 'none',
  '&:hover': {
    backgroundColor: theme.palette.grey[400],
    boxShadow: 'none',
  },
}));

const GiftWrapContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '1rem',
}));

const GiftLabel = styled(Typography)(({ theme }) => ({
  marginLeft: 0,
  fontSize: '1rem',
  lineHeight: 1,
}));

const GiftWrapPrice = styled('span')(({ theme }) => ({}));

const StyledText = styled(Typography)(({ theme }) => ({
  marginTop: '5px',
  marginLeft: 0,
  fontSize: '0.75rem',
  color: theme.palette.text.secondary,
}));

const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
  height: '16px',
  width: '16px',
  marginTop: '5px',
  color: theme.palette.primary.main,
  borderRadius: '8px',
  '& .MuiSvgIcon-root': {
    fontSize: '1.5rem',
    borderRadius: '4px',
    transition: 'all 0.2s ease-in-out',
  },
  ':hover': {
    backgroundColor: 'transparent',
  },
}));

const CardsPayContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '1rem',
}));

const CartPayContainer = styled(Box)(({ theme }) => ({
  padding: '0.5rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '0.875rem',
  backgroundColor: theme.palette.common.white,
  width: '48px',
  height: '32px',
  color: theme.palette.background.paper,
  fontWeight: 'bold',
  borderRadius: '4px',
}));

const DeliveryContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '0.5rem',
  alignItems: 'center',
}));

const DeliveryArrowIcon = styled(AiOutlineArrowRight)(({ theme }) => ({
  color: theme.palette.primary.main,
}));

const CartOrderAdditional = observer(() => {
  const { cartStore } = useStore();

  const [isChecked, setIsChecked] = React.useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setIsChecked(isChecked);

    if (isChecked) {
      cartStore.setGiftedPrice(GIFTED_PRICE);
    } else {
      cartStore.setGiftedPrice(0);
    }
  };

  return (
    <StyledContainer>
      <CartStyledSummary title="У меня есть промокод">
        <PromocodeFormWrapper>
          <PromocodeTextField required placeholder="Введите промокод" variant="outlined" />
          <PromocodeButton type="submit">Применить</PromocodeButton>
        </PromocodeFormWrapper>
      </CartStyledSummary>

      <CartStyledSummary title="Подарочная упаковка">
        <GiftWrapContainer>
          <CustomCheckbox checked={isChecked} onChange={handleCheckboxChange} />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <GiftLabel>
              Добавить подарочную упаковку
              <GiftWrapPrice>
                <br />
                (+{formatPrice(GIFTED_PRICE)})
              </GiftWrapPrice>
            </GiftLabel>

            <StyledText>Ваш заказ будет красиво упакован в фирменную коробку с лентой</StyledText>
          </Box>
        </GiftWrapContainer>
      </CartStyledSummary>

      <CartStyledSummary title="Информация о доставке">
        <DeliveryContainer>
          <DeliveryArrowIcon size={10} />
          <StyledText>Бесплатная доставка при заказе от {formatPrice(20000)}</StyledText>
        </DeliveryContainer>

        <DeliveryContainer>
          <DeliveryArrowIcon size={10} />
          <StyledText>Доставка по Москве: 1-2 рабочих дня</StyledText>
        </DeliveryContainer>

        <DeliveryContainer>
          <DeliveryArrowIcon size={10} />
          <StyledText>Доставка по России: 3-7 рабочих дней</StyledText>
        </DeliveryContainer>
      </CartStyledSummary>

      <CartStyledSummary title="Способы оплаты">
        <CardsPayContainer>
          <CartPayContainer>
            <FiCreditCard size={20} />
          </CartPayContainer>
          <CartPayContainer>VISA</CartPayContainer>
          <CartPayContainer>МС</CartPayContainer>
          <CartPayContainer>МИР</CartPayContainer>
        </CardsPayContainer>
      </CartStyledSummary>
    </StyledContainer>
  );
});

export default CartOrderAdditional;
