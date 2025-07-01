import { Box, styled } from '@mui/material';

type StatusType = 'order' | 'payment';

const statusColors: Record<StatusType, Record<string, string>> = {
  order: {
    Delivered: '#2e7d32',
    Shipped: '#6a1b9a',
    Processing: '#1565c0',
    Pending: '#eab308',
    Cancelled: '#ef4444',
  },
  payment: {
    Paid: '#2e7d32',
    Processing: '#1565c0',
    Pending: '#eab308',
    Cancelled: '#ef4444',
  },
};

const StyledStatus = styled('span')(({ theme, color }) => ({
  width: 'fit-content',
  borderRadius: '8px',
  padding: '0.25rem 0.5rem',
  fontSize: '0.75rem',
  fontWeight: 600,
  border: `1px solid ${color || theme.palette.grey[500]}`,
  color,
}));

type Props = {
  type: StatusType;
  value: string;
};

const StatusBadge = ({ type, value }: Props) => {
  const color = statusColors[type][value as keyof typeof statusColors.order];

  return <StyledStatus color={color}>{value}</StyledStatus>;
};

export default StatusBadge;
