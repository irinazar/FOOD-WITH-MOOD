import React from 'react';
import { Outlet } from 'react-router-dom';
import MyFooter from './UI/Footer/MyFooter';
import AppNavBar from './UI/AppNavBar';

export default function Layout(): JSX.Element {
  // if (user.status === 'fetching') {
  //   return <Progress size='s' isIndeterminate />; надо будет компонент для загрузки поискать
  // }
  return (
    <>
      <AppNavBar />
      <Outlet />
      <MyFooter/>
    </>
  );
}
