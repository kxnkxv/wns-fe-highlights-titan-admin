import { FC } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { IoCallOutline, IoLocationOutline, IoMailOutline } from 'react-icons/io5';

import { styled } from '@mui/material';

const FooterWrapper = styled('footer')(({ theme }) => ({
  backgroundColor: theme.palette.grey[600],
  color: theme.palette.grey[400],
  padding: '3rem 1rem',
  fontSize: '0.875rem',
  borderTop: '1px solid #333333',
}));

const Container = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '1400px',
  margin: '0 auto',
  gap: '2rem',
  padding: '0 1rem',

  '> div': {
    display: 'flex',
    gap: '2rem',
    flexWrap: 'wrap',

    '@media screen and (min-width: 768px)': {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  },
});

const Column = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
  fontSize: '1rem',
  flex: '1 1 100%',

  '> div': {
    display: 'flex',
    flexDirection: 'row',
    gap: '.5rem',
  },

  a: {
    width: 'fit-content',
  },

  '@media (min-width: 768px)': {
    flex: '1 1 45%',
  },

  '@media (min-width: 1024px)': {
    flex: '1 1 20%',
  },
});

const Title = styled('h4')(({ theme }) => ({
  marginBottom: '0.5rem',
  color: theme.palette.text.primary,
  fontSize: '1.2rem',
}));

const Logo = styled('h4')(({ theme }) => ({
  marginBottom: '.5rem',
  color: theme.palette.grey[400],
  fontSize: '1.2rem',
  display: 'flex',
  alignItems: 'center',
  gap: '.5rem',
}));

const SocialIcons = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: '1rem',
  marginTop: '1rem',

  '& svg': {
    color: theme.palette.grey[400],
    transition: 'color 0.2s ease-in-out',
    cursor: 'pointer',

    '&:hover': {
      color: theme.palette.action.hover,
    },
  },
}));

const BottomBar = styled('div')(({ theme }) => ({
  marginTop: '2rem',
  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
  paddingTop: '1rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontSize: '0.75rem',
  gap: '1rem !important',
  color: theme.palette.grey[400],
  '@media screen and (min-width: 768px)': {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
}));

const LinkText = styled('a')(({ theme }) => ({
  color: theme.palette.grey[400],
  textDecoration: 'none',
  fontSize: '1rem',
  display: 'flex',
  alignItems: 'center',
  gap: '.5rem',
  '&:hover': {
    color: theme.palette.action.hover,
  },
}));

const LinkBottomText = styled('a')(({ theme }) => ({
  color: theme.palette.grey[500],
  textDecoration: 'none',
  fontSize: '.875rem',

  '&:hover': {
    color: theme.palette.action.hover,
  },
}));

const Footer: FC = () => {
  return (
    <FooterWrapper>
      <Container>
        <div>
          <Column>
            <Logo>HIGHLIGHTS</Logo>
            <div>Эксклюзивные ювелирные изделия из титана, воплощающие прочность, легкость и современный дизайн</div>
            <SocialIcons>
              <FaInstagram size={24} />
              <FaFacebookF size={24} />
              <FaTwitter size={24} />
            </SocialIcons>
          </Column>

          <Column>
            <Title>НАВИГАЦИЯ</Title>
            <LinkText href="#">Главная</LinkText>
            <LinkText href="/catalog">Каталог</LinkText>
            <LinkText href="#">О материале</LinkText>
            <LinkText href="/brand">История бренда</LinkText>
            <LinkText href="#">Контакты</LinkText>
          </Column>

          <Column>
            <Title>КАТЕГОРИИ</Title>
            <LinkText href="#">Кольца</LinkText>
            <LinkText href="#">Серьги</LinkText>
            <LinkText href="#">Браслеты</LinkText>
            <LinkText href="#">Кулоны</LinkText>
            <LinkText href="#">Лимитированные серии</LinkText>
          </Column>

          <Column>
            <Title>КОНТАКТЫ</Title>
            <div>
              <IoLocationOutline color={'#11B0A1'} size={24} /> Москва, ул. Тверская, 15
              <br />
              Шоу-рум: 10:00 - 20:00
            </div>
            <LinkText href="#">
              <IoCallOutline color={'#11B0A1'} size={24} /> +7 (495) 123-45-67
            </LinkText>
            <LinkText href="#">
              <IoMailOutline color={'#11B0A1'} size={24} /> info@titan-jewelry.ru
            </LinkText>
          </Column>
        </div>
        <BottomBar>
          <div>© 2025 HIGHLIGHTS. Все права защищены.</div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <LinkBottomText href="#">Условия использования</LinkBottomText>
            <LinkBottomText href="#">Политика конфиденциальности</LinkBottomText>
          </div>
        </BottomBar>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
