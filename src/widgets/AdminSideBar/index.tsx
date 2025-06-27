'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';
import { BsBoxSeam } from 'react-icons/bs';
import { FaRegBell } from 'react-icons/fa6';
import { FiHome } from 'react-icons/fi';
import { IoIosStats } from 'react-icons/io';
import { IoCartOutline, IoSettingsOutline } from 'react-icons/io5';
import { TbUsers } from 'react-icons/tb';

import { styled } from '@mui/material';

const SideBar = styled('aside')(({ theme }) => ({
  width: '16rem',
  minHeight: '100vh',
  backgroundColor: theme.palette.grey[600],
}));

const Logo = styled('div')(({ theme }) => ({
  padding: '1.5rem',
  a: {
    display: 'flex',
    alignItems: 'center',
    gap: '.5rem',
    color: theme.palette.text.primary,
    textDecoration: 'none',
    fontWeight: 700,
    fontSize: '1.25rem',
    lineHeight: '1.75rem',
  },
}));

const Nav = styled('nav')({
  marginTop: '1.5rem',
  display: 'flex',
  flexDirection: 'column',
});

const NavLink = styled(Link, { shouldForwardProp: (prop) => prop !== '$active' })<{ $active?: boolean }>(
  ({ theme, $active }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '.75rem',
    padding: '.75rem 1.5rem',
    textDecoration: 'none',
    fontWeight: 500,
    fontSize: '1rem',
    color: $active ? theme.palette.text.primary : theme.palette.text.secondary,
    backgroundColor: $active ? theme.palette.primary.main : '',
    '&:hover': {
      backgroundColor: theme.palette.grey[700],
    },
  })
);

const AdminSideBar: FC = () => {
  const pathname = usePathname();

  const navLinks = [
    { href: '/admin', label: 'Dashboard', icon: <IoIosStats size={20} /> },
    { href: '/admin/products', label: 'Products', icon: <BsBoxSeam size={20} /> },
    { href: '/admin/orders', label: 'Orders', icon: <IoCartOutline size={20} /> },
    { href: '/admin/users', label: 'Users', icon: <TbUsers size={20} /> },
    { href: '/admin/notifications', label: 'Notifications', icon: <IoSettingsOutline size={20} /> },
    { href: '/admin/settings', label: 'Settings', icon: <FaRegBell size={20} /> },
  ];

  return (
    <SideBar>
      <Logo>
        <Link href={'/'}>
          <FiHome />
          Highlights
        </Link>
      </Logo>
      <Nav>
        {navLinks.map(({ href, label, icon }) => (
          <NavLink key={href} href={href} $active={pathname === href}>
            {icon}
            {label}
          </NavLink>
        ))}
      </Nav>
    </SideBar>
  );
};

export default AdminSideBar;
