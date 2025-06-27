import React from 'react';

import { advantagesMock } from './model/advantages.mock';
import { Avatar, Box, Button, List, ListItem, ListItemAvatar, ListItemText, Skeleton, styled } from '@mui/material';
import Title from '@wns/shared/ui/Title';
import WrapperContainer from '@wns/shared/ui/WrapperContainer';

const StyledContentBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '2rem',
  flexDirection: 'column',
  backgroundColor: theme.palette.grey[600],
  padding: '2rem',
  '@media screen and (min-width: 1024px)': {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: '50px',
  height: '50px',
  fontSize: '1.25rem',
  backgroundColor: theme.palette.primary.main,
  color: 'black',
}));

const StyledImageBox = styled(Box)(({ theme }) => ({
  width: '100%',
  aspectRatio: '1/1',
  maxWidth: '600px',
  backgroundColor: theme.palette.grey[400],
  borderRadius: '0.5rem',
}));

const StyledListItem = styled(ListItem)(() => ({
  display: 'flex',
  gap: '1rem',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  color: 'black',
  display: 'flex',
  borderRadius: 6,
  padding: '0.75rem 2rem',

  textTransform: 'none',
  boxShadow: 'none',
  width: 'max-content',
  backgroundColor: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },

  transition: theme.transitions?.create(['background-color', 'color'], {
    duration: theme.transitions.duration.short,
    easing: theme.transitions.easing.easeIn,
  }),
}));

const Advantages = () => {
  return (
    <WrapperContainer>
      <StyledContentBox>
        <Box>
          <Title>ПРЕИМУЩЕСТВА ТИТАНА</Title>
          <List>
            {advantagesMock.map((item) => (
              <StyledListItem key={item.id} disableGutters>
                <ListItemAvatar>
                  <StyledAvatar>{item.id}</StyledAvatar>
                </ListItemAvatar>
                <ListItemText primary={item.title} secondary={item.description} />
              </StyledListItem>
            ))}
          </List>
          <StyledButton>УЗНАТЬ БОЛЬШЕ</StyledButton>
        </Box>
        <StyledImageBox>
          <Skeleton variant="rectangular" width={'100%'} height={'100%'} sx={{ borderRadius: '0.5rem' }} />
        </StyledImageBox>
      </StyledContentBox>
    </WrapperContainer>
  );
};

export default Advantages;
