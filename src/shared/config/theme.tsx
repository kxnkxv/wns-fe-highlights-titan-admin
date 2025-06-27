import { createTheme } from '@mui/material/styles';

export const muiTheme = createTheme({
  cssVariables: true,
  typography: {
    allVariants: {
      fontFamily: "'Montserrat', sans-serif",
    },
  },
  palette: {
    mode: 'dark',
    background: {
      default: '#1A1A1A',
      paper: '#1A1A1A',
    },
    primary: {
      main: '#00c2b3',
      dark: '#11B0A1',
      contrastText: '#ffffff',
    },
    success: {
      main: '#00c2b3',
    },
    text: {
      primary: '#ffffff',
      secondary: '#cccccc',
    },
    action: {
      hover: '#11B0A1',
    },
    grey: {
      300: '#cdcdd1',
      400: '#a1a1aa',
      500: '#71717a',
      600: '#2a2a2a',
    },
  },
  transitions: {
    duration: {
      short: 250,
      standard: 300,
    },
    easing: {
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1024,
      lg: 1400,
      xl: 1536,
    },
  },
});
