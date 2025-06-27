import { Box, Paper, Typography, styled } from '@mui/material';

const StatCardItem = styled(Paper)(({ theme }) => ({
  padding: '1rem',
  backgroundColor: theme.palette.background.default,
  color: theme.palette.common.white,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '100%',
  borderWidth: '1px',
  borderRadius: '.5rem',
}));

const StatCard = ({
  icon,
  label,
  value,
  subtitle,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  subtitle: string;
}) => (
  <StatCardItem elevation={3}>
    <Box display="flex" alignItems="center" gap={1} justifyContent="space-between">
      <Typography variant="body2" color="gray">
        {label}
      </Typography>
      {icon}
    </Box>
    <Typography variant="h5" fontWeight={700}>
      {value}
    </Typography>
    <Typography variant="caption" color="gray">
      {subtitle}
    </Typography>
  </StatCardItem>
);

export default StatCard;
