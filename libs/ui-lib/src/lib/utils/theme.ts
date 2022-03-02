import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
export const theme = createTheme({
  palette: {
    primary: {
      main: red[900],
    },
    secondary: {
      main: '#ffd712',
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiImageListItemBar: {
      styleOverrides: {
        title: {
          fontSize: '1.25rem',
        },
      },
    },
  },
});
