import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  styled,
} from '@mui/material';

const SectionContainer = styled(Container)(({ theme }) => ({
  padding: '1rem',
  borderRadius: '8px',
  backgroundColor: theme.palette.grey['600'],
  flex: '1',
  [theme.breakpoints.up('sm')]: {
    padding: '2rem',
  },
}));

const FormTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  marginBottom: '1rem',
}));

const FormWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
}));

const FormRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: '1rem',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
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
  textTransform: 'uppercase',
  color: theme.palette.grey['600'],
  width: '100%',
}));

const DisclaimerText = styled(Typography)(({ theme }) => ({
  fontSize: '0.725rem',
  color: theme.palette.grey['400'],
  '& a': {
    textDecoration: 'underline',
    color: theme.palette.grey['400'],
  },
}));

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
  } = useForm<FormData>();

  const subjectValue = watch('subject', '');

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log('Отправленные данные:', data);
    reset();
  };

  return (
    <SectionContainer>
      <FormTitle variant="h4">НАПИШИТЕ НАМ</FormTitle>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormWrapper>
          <FormRow>
            <StyledTextField
              label="Имя *"
              {...register('name', { required: 'Имя обязательно' })}
              error={!!errors.name}
              helperText={errors.name?.message}
            />
            <StyledTextField
              label="Email *"
              type="email"
              {...register('email', {
                required: 'Email обязателен',
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: 'Некорректный email',
                },
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          </FormRow>

          <FormRow>
            <StyledTextField label="Телефон" {...register('phone')} />

            <FormControl sx={{ flex: 1 }} error={!!errors.subject}>
              <InputLabel id="select-subject">Тема *</InputLabel>
              <Select
                labelId="select-subject"
                id="select-subject"
                label="Тема *"
                value={subjectValue}
                {...register('subject', { required: 'Выберите тему' })}
                sx={{
                  backgroundColor: '#333333',
                  borderRadius: '8px',
                  height: 'fit-content',

                  '& .MuiSelect-select': {
                    padding: '0.75rem 1rem',
                  },
                }}
              >
                <MenuItem value="general">Общий вопрос</MenuItem>
                <MenuItem value="order">Вопрос по заказу</MenuItem>
                <MenuItem value="customDesign">Индивидуальный дизайн</MenuItem>
                <MenuItem value="wholesale">Оптовые закупки</MenuItem>
                <MenuItem value="other">Другое</MenuItem>
              </Select>
            </FormControl>
          </FormRow>

          <StyledTextField
            label="Сообщение *"
            multiline
            rows={4}
            {...register('message', { required: 'Сообщение обязательно' })}
            error={!!errors.message}
            helperText={errors.message?.message}
          />

          <StyledButton type="submit" variant="contained" disabled={isSubmitting}>
            {isSubmitting ? 'Отправка...' : 'ОТПРАВИТЬ СООБЩЕНИЕ'}
          </StyledButton>

          <DisclaimerText variant="body2">
            Нажимая кнопку "Отправить сообщение", вы соглашаетесь с нашей{' '}
            <a href="#" aria-label="Политика конфиденциальности">
              политикой конфиденциальности
            </a>
          </DisclaimerText>
        </FormWrapper>
      </form>
    </SectionContainer>
  );
};

export default ContactForm;
