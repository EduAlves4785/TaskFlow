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
    MuiCard: {
      styleOverrides: {
        root: {
          maxWidth: 300,
          border:'2px solid black',
          borderColor: '#7C3AED',
        }
      },
    },
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