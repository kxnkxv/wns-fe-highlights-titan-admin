import { propertiesData } from './model/mock';
import { List, ListItem, Skeleton, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import Title from '@wns/shared/ui/Title';
import WrapperContainer from '@wns/shared/ui/WrapperContainer';

const StyledList = styled(List)(() => ({
  display: 'flex',
  gap: '1rem',
  flexDirection: 'column',
}));

const StyledProperty = styled(ListItem)(({ theme }) => ({
  padding: '1rem',
  borderRadius: '0.5rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  backgroundColor: theme.palette.grey[600],
}));

const StyledPropertyTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.25rem',
  lineHeight: '1.75rem',
  color: theme.palette.primary.main,
}));

const StyledPropertyDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[300],
}));

const StyledImageBox = styled(Box)(({ theme }) => ({
  width: '100%',
  aspectRatio: '1/1',
  maxWidth: '600px',
  backgroundColor: theme.palette.grey[400],
  borderRadius: '0.5rem',
}));

const StyledContentBox = styled(Box)(() => ({
  display: 'flex',
  gap: '3rem',
  justifyContent: 'space-between',
  flexDirection: 'column',
  alignItems: 'center',
  '@media screen and (min-width: 1024px)': {
    flexDirection: 'row',
  },
}));

const StyledTextBox = styled(Box)(() => ({
  width: '100%',
  '@media screen and (min-width: 1024px)': {
    width: '50%',
  },
}));

const UniquePropreties = () => {
  return (
    <WrapperContainer backGroundWrapper="palette.background.default">
      <StyledContentBox>
        <StyledTextBox>
          <Title>УНИКАЛЬНЫЕ СВОЙСТВА</Title>
          <StyledList>
            {propertiesData.map((property, index) => (
              <StyledProperty key={index}>
                <StyledPropertyTitle>{property.title}</StyledPropertyTitle>
                <StyledPropertyDescription>{property.description}</StyledPropertyDescription>
              </StyledProperty>
            ))}
          </StyledList>
        </StyledTextBox>
        <StyledImageBox>
          <Skeleton variant="rectangular" width={'100%'} height={'100%'} sx={{ borderRadius: '0.5rem' }} />
        </StyledImageBox>
      </StyledContentBox>
    </WrapperContainer>
  );
};

export default UniquePropreties;
