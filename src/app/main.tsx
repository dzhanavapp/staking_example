import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { Toaster } from 'sonner';

import { ton } from '../shared/lib/index.ts';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <TonConnectUIProvider connector={ton.connector}>
        <Toaster />
        <App />
      </TonConnectUIProvider>
    </QueryClientProvider>
  </StrictMode>,
);
