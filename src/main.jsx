import './wdyr';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import ThemeProvider from 'styles/ThemeProvider';
import App from './App';

const queryClient = new QueryClient();

function renderRoot() {
  ReactDOM.render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </QueryClientProvider>
    </React.StrictMode>,
    document.getElementById('root'),
  );
}

if (import.meta.env.DEV) {
  import('mocks').then(({ worker }) => {
    worker.start();

    renderRoot();
  });
} else {
  renderRoot();
}
