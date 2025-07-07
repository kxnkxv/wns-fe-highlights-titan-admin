import { Switch as MuiSwitch, SwitchProps, styled } from '@mui/material';

export const Switch = styled((props: SwitchProps) => <MuiSwitch {...props} />)(({ theme }) => ({
  width: 45,
  height: 25,
  padding: 0,
  marginRight: 10,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 3,
    transitionDuration: '300ms',
    color: theme.palette.background.default,

    '&.Mui-checked': {
      transform: 'translateX(19px)',
      color: theme.palette.background.default,
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.primary.main,
        opacity: 1,
        border: '1.5px solid',
        borderColor: theme.palette.background.default,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: theme.palette.primary.main,
      border: '1.5px solid',
      borderColor: theme.palette.background.default,
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color: theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: 1,
      borderColor: theme.palette.grey[600],
      backgroundColor: theme.palette.grey[500],
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 19,
    height: 19,
    boxShadow: 'none',
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.grey[600],
    border: '1.5px solid',
    borderColor: theme.palette.background.default,
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));
