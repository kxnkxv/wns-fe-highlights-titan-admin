import { creationProcess } from './model/mock';
import { Skeleton, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import Title from '@wns/shared/ui/Title';
import WrapperContainer from '@wns/shared/ui/WrapperContainer';

const StyledText = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[300],
  fontSize: '1rem',
  marginBottom: '20px',
}));

const StyledStepContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '20px',
  justifyContent: 'space-between',
  flexDirection: 'column',

  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
  },
}));

const StyledCard = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[900],
  padding: '1rem',
  borderRadius: '8px',
  marginBottom: '1rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  justifyContent: 'center',
}));

const StyledAvatar = styled('div')(({ theme }) => ({
  width: '30px',
  height: '30px',
  borderRadius: '50%',
  background: theme.palette.primary.main,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'black',
  fontWeight: 'bold',
}));

const StyledTitle = styled(Typography)(() => ({
  fontWeight: 'bold',
  fontSize: '1.25rem',
}));

const CreationProcess = () => {
  return (
    <WrapperContainer backGroundWrapper="palette.background.default">
      <Box>
        <Title>ПРОЦЕСС СОЗДАНИЯ</Title>

        <StyledStepContainer>
          {creationProcess.map((step) => (
            <StyledCard key={step.id}>
              <Skeleton variant="rectangular" width={'100%'} height={'300px'} />
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <StyledAvatar>{step.id}</StyledAvatar>
                <StyledTitle>{step.title}</StyledTitle>
              </Box>
              <StyledText>{step.description}</StyledText>
            </StyledCard>
          ))}
        </StyledStepContainer>
      </Box>
    </WrapperContainer>
  );
};

export default CreationProcess;
