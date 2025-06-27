import React from 'react';
import { HiOutlinePlay } from 'react-icons/hi2';
import { IoMdCheckmark } from 'react-icons/io';

import { creationData } from './model/mock';
import { Avatar, Box, Button, List, ListItem, ListItemAvatar, Typography, styled } from '@mui/material';
import Title from '@wns/shared/ui/Title';
import WrapperContainer from '@wns/shared/ui/WrapperContainer';

const StyledDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[300],
  fontSize: '1rem',
}));

const StyledVideoContainer = styled(Box)(() => ({
  backgroundColor: '#f0f0f0',
  borderRadius: '8px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '300px',
  width: '100%',
  maxWidth: '600px',
}));

const StyledPlayButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  borderRadius: '50%',
  padding: '16px',
  height: '64px',
  width: '64px',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
  '& .MuiButton-startIcon': {
    margin: 0,
    color: 'black',
  },
}));

const StyledListItem = styled(ListItem)(() => ({
  display: 'flex',
  gap: '1rem',
  ' & .MuiListItemAvatar-root': {
    minWidth: '20px',
  },
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: '20px',
  height: '20px',
  fontSize: '1.25rem',
  backgroundColor: theme.palette.primary.main,
}));

const StyledText = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  color: theme.palette.grey[400],
}));
const StyledContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
  },
}));
const ArtOfCreation = () => {
  return (
    <WrapperContainer>
      <StyledContainer>
        <Box>
          <Title>ИСКУССТВО СОЗДАНИЯ</Title>
          <StyledDescription>
            Каждое наше изделие — это результат кропотливой работы мастеров, сочетающих современные технологии и
            традиционные ювелирные техники. Посмотрите видео о процессе создания наших украшений.
          </StyledDescription>

          <List>
            {creationData.map((item) => (
              <StyledListItem key={item} disableGutters>
                <ListItemAvatar>
                  <StyledAvatar>
                    <IoMdCheckmark />
                  </StyledAvatar>
                </ListItemAvatar>
                <StyledText>{item}</StyledText>
              </StyledListItem>
            ))}
          </List>
        </Box>

        <StyledVideoContainer>
          <StyledPlayButton variant="contained" startIcon={<HiOutlinePlay />} />
        </StyledVideoContainer>
      </StyledContainer>
    </WrapperContainer>
  );
};

export default ArtOfCreation;
