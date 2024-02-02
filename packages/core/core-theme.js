import { createTheme } from '@mui/material/styles';
// import { colorPrimary, colorSecondary } from '@my-org/core-tokens';
const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          backgroundColor: 'red',
          '&:hover': {
            backgroundColor: 'purple',
          },
        },
      },
    },
  },
});

export default theme;
