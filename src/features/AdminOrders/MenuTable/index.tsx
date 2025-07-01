'use client';

import Link from 'next/link';
import { FC, useState } from 'react';
import { IoMdMore } from 'react-icons/io';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { MdOutlineFileDownload } from 'react-icons/md';

import { IconButton, Menu, MenuItem, styled } from '@mui/material';

import { ProductType } from '@wns/features/AdminProducts/components/ProductTable/model/products.mock';

type Props = {
  row: ProductType;
};

const StyledIconButton = styled(IconButton)({
  borderRadius: '.5rem',
});

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  minWidth: '100px',
  padding: '.5rem !important',
  whiteSpace: 'normal !important',
  a: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '.5rem',
    textDecoration: 'none',
    color: theme.palette.text.primary,
  },
}));

const MenuTable: FC<Props> = ({ row }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event: any) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (e: any) => {
    e.preventDefault();
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  return (
    <>
      <StyledIconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <IoMdMore />
      </StyledIconButton>
      <Menu id="long-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
        <StyledMenuItem>
          <Link href={`/admin/orders/${row.id}`}>
            <MdOutlineRemoveRedEye />
            View
          </Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <Link href={`/admin/orders/${row.id}/download`}>
            <MdOutlineFileDownload />
            Download
          </Link>
        </StyledMenuItem>
      </Menu>
    </>
  );
};

export default MenuTable;
