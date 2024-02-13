import { createTheme } from '@mui/material/styles';
// import { colorPrimary, colorSecondary } from '@my-org/core-tokens';
import {
  colorPrimary,
  colorSecondary,
} from '../brand-1-knapsack/dist/tokens/design-tokens.json';

const theme = createTheme({
  palette: {
    primary: {
      main: colorPrimary,
    },
    secondary: {
      main: colorSecondary,
    },
  },
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
