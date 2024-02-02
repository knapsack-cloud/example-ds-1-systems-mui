import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@my-org/core/core-theme'; // Pulls in the theme object

export const KnapsackThemeProvider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
