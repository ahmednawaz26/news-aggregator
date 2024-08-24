import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import { useLocalStorageSettings } from '../hooks/useLocalStorageSettings';

const AppLayout = () => {
  useLocalStorageSettings();

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default AppLayout;
