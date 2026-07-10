import { createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: '#7C3AED',
    },
    secondary: {
      main: '#A855F7',
    },
    background: {
      default: '#F8FAFC',
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 2,
        }
      },
      defaultProps: {
        variant: 'contained',
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 4
        }
      }
    },
  },
  typography: {
    fontFamily: '"Roboto", sans-serif',
  }
});

export default theme;