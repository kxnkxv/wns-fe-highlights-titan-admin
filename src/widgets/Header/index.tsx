'use client';

import { observer } from 'mobx-react';
import Link from 'next/link';
import { FC, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { IoCartOutline, IoMenuOutline, IoSearch } from 'react-icons/io5';

import { Badge, Drawer, IconButton as MuiIconButton, styled } from '@mui/material';
import { Button as MuiButton } from '@mui/material';
import { useStore } from '@wns/stores/StoreContext';

const HeaderWrapper = styled('header')(({ theme }) => ({
  position: 'sticky',
  zIndex: 1000,
  backgroundColor: 'rgba(26, 26, 26, 0.85)',
  color: theme.palette.text.secondary,
  borderBottom: '1px solid #333333',
  top: 0,
  backdropFilter: 'blur(8px)',
}));

const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  marginRight: 'auto',
  marginLeft: 'auto',
  paddingRight: '2rem',
  paddingLeft: '2rem',
  height: '4rem',
  maxWidth: '1400px',

  [theme.breakpoints.down('sm')]: {
    justifyContent: 'space-between',
  },
}));

const Logo = styled(Link)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  fontWeight: 'bold',
  fontSize: '1.4rem',
  marginRight: '2rem',
  textDecoration: 'none',
  color: 'white',
  '>span': {
    display: 'none',
  },
  [theme.breakpoints.up('sm')]: {
    '>span': {
      display: 'flex',
    },
  },
}));

const Nav = styled('nav')(({ theme }) => ({
  display: 'none',
  gap: '1.5rem',
  justifyContent: 'center',
  alignItems: 'center',
  flex: '1 1 0',
  a: {
    color: theme.palette.text.secondary,
    textDecoration: 'none',
    fontSize: '.875rem',
    alignItems: 'center',
    '&:hover': {
      color: theme.palette.text.primary,
    },
  },
  '@media screen and (min-width: 768px)': {
    display: 'flex',
  },
}));

const Right = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  '@media screen and (max-width: 768px)': {
    gap: '12px',
  },
});

const DrawerIcon = styled(MuiIconButton)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.secondary,
  borderRadius: 6,
  padding: 8,
  transition: 'all 0.15s ease-in-out',
  '&:hover': {
    backgroundColor: 'hsl(0 0% 14.9%)',
    color: theme.palette.text.primary,
  },
  '& svg': {
    color: 'currentColor',
  },

  '@media screen and (min-width: 768px)': {
    display: 'none',
  },
}));

const IconButton = styled(MuiIconButton)(({ theme }) => ({
  backgroundColor: 'transparent',
  color: theme.palette.text.secondary,
  borderRadius: 6,
  padding: 8,
  transition: 'all 0.15s ease-in-out',
  '&:hover': {
    backgroundColor: 'hsl(0 0% 14.9%)',
    color: theme.palette.text.primary,
  },
  '& svg': {
    color: 'currentColor',
  },
}));

const Button = styled(MuiButton)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: 'black',
  display: 'none',
  borderRadius: 6,
  padding: '0.5rem 1rem',
  fontSize: '1rem',
  textTransform: 'none',
  boxShadow: 'none',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
    boxShadow: 'none',
  },

  '@media screen and (min-width: 768px)': {
    display: 'flex',
  },
}));

const DrawerList = styled('div')(({ theme }) => ({
  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  gap: '.5rem',
  padding: '1.5rem',
  '>div': {
    marginBottom: '1rem',
  },
  a: {
    color: theme.palette.text.secondary,
    textDecoration: 'none',
    fontSize: '.875rem',
    alignItems: 'center',
    '&:hover': {
      color: theme.palette.text.primary,
    },
  },
}));

const IconClose = styled(MuiIconButton)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.secondary,
  borderRadius: 10,
  padding: 4,
  position: 'absolute',
  top: '1rem',
  right: '1rem',
  transition: 'all 0.15s ease-in-out',
  '&:hover': {
    color: theme.palette.text.primary,
  },
  '&:focus': {
    border: `2px solid ${theme.palette.primary.main}`,
  },
  '& svg': {
    color: 'currentColor',
  },
}));

const StyledBadgeCount = styled(Badge)(({ theme }) => ({
  ' & .MuiBadge-badge': {
    color: theme.palette.grey[600],
  },
}));
const Header: FC = observer(() => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleDrawer = (newOpen: boolean) => {
    setOpen(newOpen);
  };
  const { cartStore } = useStore();
  const { cart } = cartStore;
  const cartCount = cart.products.length;
  return (
    <HeaderWrapper>
      <Container>
        <DrawerIcon onClick={() => toggleDrawer(true)}>
          <IoMenuOutline />
        </DrawerIcon>
        <Logo href="/">
          <span>HIGHLIGHTS</span>
        </Logo>
        <Nav>
          <Link href="/">ГЛАВНАЯ</Link>
          <Link href="/catalog">КАТАЛОГ</Link>
          <Link href="/about-material">О МАТЕРИАЛЕ</Link>
          <Link href="/brand">ИСТОРИЯ БРЕНДА</Link>
          <Link href="/contact">КОНТАКТЫ</Link>
        </Nav>
        <Right>
          <IconButton>
            <IoSearch size={20} />
          </IconButton>
          <Link href="/cart">
            <IconButton aria-label="cart">
              <StyledBadgeCount badgeContent={cartCount} color="primary">
                <IoCartOutline size={20} />
              </StyledBadgeCount>
            </IconButton>
          </Link>
          <Button>ЗАКАЗАТЬ</Button>
        </Right>
      </Container>
      <Drawer
        open={open}
        onClose={() => toggleDrawer(false)}
        slotProps={{
          paper: {
            sx: {
              backgroundImage: 'none',
              width: '75%',
              maxWidth: {
                sm: '24rem',
              },
            },
          },
        }}
      >
        <DrawerList>
          <Logo href="/">HIGHLIGHTS</Logo>
          <IconClose onClick={() => toggleDrawer(false)}>
            <IoMdClose size={18} />
          </IconClose>
          <Link href="/">ГЛАВНАЯ</Link>
          <Link href="/catalog">КАТАЛОГ</Link>
          <Link href="/about-material">О МАТЕРИАЛЕ</Link>
          <Link href="/brand">ИСТОРИЯ БРЕНДА</Link>
          <Link href="/contact">КОНТАКТЫ</Link>
        </DrawerList>
      </Drawer>
    </HeaderWrapper>
  );
});

export default Header;
