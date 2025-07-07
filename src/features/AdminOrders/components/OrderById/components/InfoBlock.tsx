import { Box, Typography, styled } from '@mui/material';

type Props = {
  title: string;
  children: React.ReactNode;
};

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  backgroundColor: theme.palette.grey['600'],
  borderRadius: '8px',
  padding: '1rem',
  height: 'fit-content',
  flex: 1,
}));

const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: '1.5rem',
  fontWeight: 'bold',
}));

const InfoBlock = ({ title, children }: Props) => {
  return (
    <StyledBox>
      <Title>{title}</Title>
      {children}
    </StyledBox>
  );
};

export default InfoBlock;
