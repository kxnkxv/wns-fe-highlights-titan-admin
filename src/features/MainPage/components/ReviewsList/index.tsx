import React from 'react';

import { Review } from './model/ReviewTypes';
import { reviewsMock } from './model/review.mock';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import Title from '@wns/shared/ui/Title';
import WrapperContainer from '@wns/shared/ui/WrapperContainer';

const StyledReviewCard = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[900],
  padding: '1rem',
  borderRadius: '8px',
  marginBottom: '1rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  justifyContent: 'center',
}));

const StyledAvatar = styled('div')(() => ({
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  background: '#fff',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const StyledName = styled(Typography)(() => ({
  fontWeight: 'bold',
}));

const StyledCity = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[400],
}));

const StyledReviewText = styled(Typography)(({ theme }) => ({
  fontStyle: 'italic',
  color: theme.palette.grey[300],
}));

const Index = () => {
  return (
    <WrapperContainer backGroundWrapper="palette.background.default">
      <Title> Отзывы наших клиентов</Title>
      <Box
        sx={{
          display: 'grid',
          gap: '2rem',
          gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
          '@media screen and (min-width: 1024px)': { gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' },
        }}
      >
        {reviewsMock.map((review: Review) => (
          <StyledReviewCard key={review.id}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <StyledAvatar />
              <Box>
                <StyledName>{review.name}</StyledName>
                <StyledCity>{review.city}</StyledCity>
              </Box>
            </Box>
            <StyledReviewText>{review.review}</StyledReviewText>
          </StyledReviewCard>
        ))}
      </Box>
    </WrapperContainer>
  );
};

export default Index;
