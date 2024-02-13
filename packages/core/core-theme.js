import { createTheme } from '@mui/material/styles';
import { colorPrimary, colorSecondary } from '@my-org/core-tokens';

const theme = createTheme({
  palette: {
    primary: {
      main: colorPrimary,
    },
    secondary: {
      main: colorSecondary,
    },
  },
  // components: {
  //   MuiButton: {
  //     styleOverrides: {
  //       containedPrimary: {
  //         backgroundColor: colorPrimary,
  //         '&:hover': {
  //           backgroundColor: colorSecondary,
  //         },
  //       },
  //     },
  //   },
  // },
});

export default theme;
