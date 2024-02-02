import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          backgroundColor: 'green',
          '&:hover': {
            backgroundColor: 'purple',
          },
        },
      },
    },
  },
});

export default theme;
