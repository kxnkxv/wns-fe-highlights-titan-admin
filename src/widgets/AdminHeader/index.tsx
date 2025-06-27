'use client';

import { FC } from 'react';
import { FaRegBell } from 'react-icons/fa6';
import { IoSettingsOutline } from 'react-icons/io5';
import { TbUser } from 'react-icons/tb';

import { Avatar, Box, IconButton, Stack, Typography, styled } from '@mui/material';

const HeaderWrapper = styled(Box)(({ theme }) => ({
  height: '64px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 1.5rem',
  backgroundColor: theme.palette.background.default,
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const AdminHeader: FC = () => {
  return (
    <HeaderWrapper>
      <Typography variant="h6" fontWeight={600}>
        Highlights Admin
      </Typography>

      <Stack direction="row" spacing={2} alignItems="center">
        <IconButton href={'/admin/notifications'}>
          <FaRegBell size={20} />
        </IconButton>
        <IconButton href={'/admin/settings'}>
          <IoSettingsOutline size={20} />
        </IconButton>

        <Stack direction="row" spacing={1} alignItems="center">
          <Avatar sx={{ bgcolor: 'primary.main', width: 32, height: 32 }}>
            <TbUser />
          </Avatar>
          <Typography variant="body1" fontWeight={500}>
            Admin
          </Typography>
        </Stack>
      </Stack>
    </HeaderWrapper>
  );
};

export default AdminHeader;
