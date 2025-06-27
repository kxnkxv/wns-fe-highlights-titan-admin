import Link from 'next/link';
import { FC, useState } from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { FaRegTrashCan } from 'react-icons/fa6';
import { IoMdMore } from 'react-icons/io';
import { MdOutlineRemoveRedEye } from 'react-icons/md';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Menu,
  MenuItem,
  styled,
} from '@mui/material';

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

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.grey[600],
  color: 'white',
  borderRadius: 6,
  textTransform: 'capitalize',
  padding: '0.5rem 1rem',
  fontSize: '0.75rem',
  boxShadow: 'none',
  '&:hover': {
    backgroundColor: theme.palette.grey[500],
    boxShadow: 'none',
  },
}));

const StyledDeleteButton = styled(StyledButton)({
  backgroundColor: '#EF4444',
  '&:hover': {
    backgroundColor: '#dc2626',
    boxShadow: 'none',
  },
});

const MenuTable: FC<Props> = ({ row }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openModal, setOpenModal] = useState<boolean>(false);

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
          <Link href={`/admin/products/${row.id}`}>
            <MdOutlineRemoveRedEye />
            View
          </Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <Link href={`/admin/products/${row.id}/edit`}>
            <FaRegEdit />
            Edit
          </Link>
        </StyledMenuItem>
        <StyledMenuItem
          sx={{ color: '#ef4444' }}
          onClick={(e) => {
            handleClose(e);
            setOpenModal(true);
          }}
        >
          <FaRegTrashCan />
          Delete
        </StyledMenuItem>
      </Menu>
      <Dialog open={openModal} onClose={() => setOpenModal(false)} maxWidth={'xs'}>
        <DialogTitle>Are you sure?</DialogTitle>
        <DialogContent>
          This action cannot be undone. This will permanently delete the product from the database.
        </DialogContent>
        <DialogActions>
          <StyledButton onClick={() => setOpenModal(false)}>Cancel</StyledButton>
          <StyledDeleteButton onClick={() => setOpenModal(false)}>Delete</StyledDeleteButton>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default MenuTable;
