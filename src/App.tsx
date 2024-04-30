import React from 'react';
import { Header } from "./components/Header/Header.tsx";
import { Outlet} from "react-router-dom";
import './App.scss';
import { PageProvider } from './components/PageContext.tsx';

export const App: React.FC = () => {
  return (
    <PageProvider>
      <Header />
      <Outlet />
    </PageProvider >
  );
};