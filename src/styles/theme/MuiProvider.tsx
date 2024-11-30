'use client';

import { ReactNode } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import muiTheme from '@/styles/theme/MuiTheme';

interface MuiProviderrProps {
  children: ReactNode;
}

export default function MuiProvider({ children }: MuiProviderrProps) {
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
