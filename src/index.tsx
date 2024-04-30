import React from 'react';
import ReactDOM from 'react-dom/client';
import { Root } from './Root.tsx';
import { PageProvider } from './components/PageContext.tsx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <PageProvider>
      <Root />
  </PageProvider>
);
