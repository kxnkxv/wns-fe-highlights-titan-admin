'use client';

import { PropsWithChildren } from 'react';

import { rootStore } from '@wns/stores/RootStore';
import { StoreProvider } from '@wns/stores/StoreContext';
import {QueryClient} from "@tanstack/react-query";
import {QueryClientProvider} from "@tanstack/react-query";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {muiTheme} from "@wns/shared/config/theme";

const queryClient = new QueryClient();

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <StoreProvider value={rootStore}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={muiTheme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </QueryClientProvider>
    </StoreProvider>
  );

};

export default Providers;
