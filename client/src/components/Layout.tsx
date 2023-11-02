import React from 'react';
import { Outlet } from 'react-router-dom';


import AppNavBar from './UI/NavBar/AppNavBar';

import MyFooter from './UI/Footer/MyFooter';



export default function Layout(): JSX.Element {
  // if (user.status === 'fetching') {
  //   return <Progress size='s' isIndeterminate />; надо будет компонент для загрузки поискать
  // }
  return (
    <>
      <AppNavBar />
      <Outlet />
      <MyFooter />
    </>
  );
}
