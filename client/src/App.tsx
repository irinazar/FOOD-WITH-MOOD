import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CountryPage from './components/Pages/CountryPage';
import OwnerAccount from './components/Pages/OwnerAccount';
import MainPage from './components/Pages/MainPage';
import RestaurantPage from './components/Pages/RestaurantPage';
import AdminPage from './components/Pages/AdminAccount';
import UserAccount from './components/Pages/UserAccount';
import UserAuthPage from './components/Pages/UserAuthPage';
import OwnerAuthPage from './components/Pages/OwnerAuthPage';
import Layout from './components/Layout';
import PrivateRoute from './components/hocs/PrivateRoute';

function App(): JSX.Element {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/countries/:id" element={<CountryPage />} />
        <Route path="/restaurants/:id" element={<RestaurantPage />} />
        <Route
          path="/admin"
          element={
            <PrivateRoute isAllowed redirectTo="/">
              <AdminPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/user/:id"
          element={
            <PrivateRoute isAllowed redirectTo="/">
              <UserAccount />
            </PrivateRoute>
          }
        />
        <Route
          path="/owner/:id"
          element={
            <PrivateRoute isAllowed redirectTo="/">
              <OwnerAccount />
            </PrivateRoute>
          }
        />
        <Route
          path="/user/:auth"
          element={
            <PrivateRoute isAllowed redirectTo="/">
              <UserAuthPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/owner/:auth"
          element={
            <PrivateRoute isAllowed redirectTo="/">
              <OwnerAuthPage />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
