import { KnapsackThemeProvider } from './theme-utilities';
import * as React from 'react';

const DemoWrapper = ({ children }) => {
  return (
    <div className="demo-wrapper">
      <KnapsackThemeProvider>{children}</KnapsackThemeProvider>
    </div>
  );
};

export default DemoWrapper;
