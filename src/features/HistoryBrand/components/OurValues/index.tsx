'use client';

import { Avatar, Box, Grid, Typography, styled } from '@mui/material';
import Title from '@wns/shared/ui/Title';
import WrapperContainer from '@wns/shared/ui/WrapperContainer';

import { valuesMock } from '@wns/features/HistoryBrand/components/OurValues/model/values.mock';

const StyledDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginBottom: '1.5rem',
  fontSize: '1rem',
}));

const ValueCard = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  borderRadius: '8px',
  padding: '1.5rem',
  display: 'flex',
  flexDirection: 'column',
  gap: 1,
  minHeight: '100%',
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: '3rem',
  height: '3rem',
  fontWeight: 700,
  marginBottom: '1rem',
  fontSize: '1.25rem',
  backgroundColor: theme.palette.primary.main,
}));

const StyledTitleCard = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  lineHeight: '1.75rem',
  fontSize: '1.25rem',
  marginBottom: '.75rem',
  textTransform: 'uppercase',
}));

const StyledDescriptionCard = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[400],
  fontSize: '1rem',
}));

const OurValues = () => {
  return (
    <WrapperContainer>
      <Grid alignItems="center" container spacing={4}>
        <Grid size={{ md: 6, xs: 12 }} sx={{ order: { xs: 2, md: 1 } }}>
          <Grid container spacing={4} sx={{ alignItems: 'stretch' }}>
            {valuesMock.map((value) => (
              <Grid key={value.id} size={{ sm: 6, xs: 12 }}>
                <ValueCard>
                  <StyledAvatar>{value.letter}</StyledAvatar>
                  <StyledTitleCard>{value.title}</StyledTitleCard>
                  <StyledDescriptionCard>{value.description}</StyledDescriptionCard>
                </ValueCard>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid size={{ md: 6, xs: 12 }} sx={{ order: { xs: 1, md: 2 } }}>
          <Title>НАШИ ЦЕННОСТИ</Title>
          <StyledDescription>
            В основе нашего бренда лежат ценности, которые определяют все аспекты нашей работы — от дизайна и
            производства до обслуживания клиентов и социальной ответственности.
          </StyledDescription>
          <StyledDescription>
            Мы стремимся не только создавать исключительные украшения, но и вносить позитивный вклад в жизнь наших
            клиентов и общества в целом.
          </StyledDescription>
        </Grid>
      </Grid>
    </WrapperContainer>
  );
};

export default OurValues;
