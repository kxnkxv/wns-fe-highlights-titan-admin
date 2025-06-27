'use client';

import { Box } from '@mui/material';
import AdminHeader from '@wns/widgets/AdminHeader';
import AdminSideBar from '@wns/widgets/AdminSideBar';

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box sx={{ display: 'flex' }}>
      <AdminSideBar />
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <AdminHeader />
        {children}
      </Box>
    </Box>
  );
}
