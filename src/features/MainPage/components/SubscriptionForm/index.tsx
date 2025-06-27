import Link from 'next/link';
import { FC } from 'react';
import { useForm } from 'react-hook-form';

import { Box, Button, TextField, Typography, styled } from '@mui/material';
import Title from '@wns/shared/ui/Title';

interface FormData {
  email: string;
}

const StyledSubscriptionWrapper = styled(Box)(({ theme }) => ({
  padding: '5rem 0',
  backgroundColor: theme.palette.grey[600],
}));

const Container = styled(Box)({
  width: '100%',
  maxWidth: '48rem',
  margin: '0 auto',
  padding: '0 1rem',
});

const StyledDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[400],
  textAlign: 'center',
  marginBottom: '2rem',
}));

const StyledFormWrapper = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '.75rem',
  marginTop: '1rem',
  alignItems: 'strength',
  justifyContent: 'center',

  '@media screen and (min-width: 640px)': {
    flexDirection: 'row',
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  backgroundColor: '#333333',
  borderRadius: '8px',
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

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: 'black',
  borderRadius: 6,
  padding: '0.5rem 1rem',
  fontSize: '1rem',
  textTransform: 'none',
  boxShadow: 'none',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
    boxShadow: 'none',
  },
}));

const StyledAgreementText = styled(Typography)(({ theme }) => ({
  marginTop: '1rem',
  fontSize: '0.75rem',
  color: theme.palette.grey[400],
  textAlign: 'center',
  a: {
    textDecoration: 'underline',
    color: 'inherit',

    '&:hover': {
      color: theme.palette.action.hover,
    },
  },
}));

const Index: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {};

  return (
    <StyledSubscriptionWrapper>
      <Container>
        <Title align={'center'}>ЭКСКЛЮЗИВНЫЕ КОЛЛЕКЦИИ</Title>
        <StyledDescription>
          Подпишитесь на нашу рассылку, чтобы первыми узнавать о новых коллекциях и получать специальные предложения
        </StyledDescription>
        <StyledFormWrapper onSubmit={handleSubmit(onSubmit)}>
          <StyledTextField {...register('email')} required placeholder="Ваш email" variant="outlined" />
          <StyledButton type="submit">Подписаться</StyledButton>
        </StyledFormWrapper>
        <StyledAgreementText>
          Подписываясь, вы соглашаетесь с нашей&nbsp;
          <Link href="#">политикой конфиденциальности</Link>
        </StyledAgreementText>
      </Container>
    </StyledSubscriptionWrapper>
  );
};

export default Index;
