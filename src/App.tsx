import React, { useState } from 'react';
import { Header } from "./components/Header/Header.tsx";
import { Outlet} from "react-router-dom";
import './App.scss';

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};