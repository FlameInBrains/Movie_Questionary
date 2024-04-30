import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { App } from './App.tsx';
import { FirstPage } from './pages/FirstPage/FirstPage.tsx';
import { SecondPage } from './pages/SecondPage/SecondPage.tsx';
import { ThirdPage } from './pages/ThirdPage/ThirdPage.tsx';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage.tsx';

export const Root: React.FC = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<FirstPage />} />
        <Route path="secondPage" element={<SecondPage />} />
        <Route path="thirdPage" element={<ThirdPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </HashRouter>
);