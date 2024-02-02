import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import outerTheme from '@my-org/core/core-theme'; // Pulls in the theme object
import innerTheme from '@my-org/brand-1/brand-1-theme'; // Pulls in the theme object

export const KnapsackThemeProvider = ({ children }) => {
  return (
    <ThemeProvider theme={outerTheme}>
      <ThemeProvider theme={innerTheme}>{children}</ThemeProvider>
    </ThemeProvider>
  );
};
