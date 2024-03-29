import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CountryPage from './components/Pages/CountryPage/CountryPage';
import OwnerAccount from './components/Pages/OwnerAccount/OwnerAccount';
import MainPage from './components/Pages/MainPage/MainPage';
import RestaurantPage from './components/Pages/RestaurantPage/RestaurantPage';
import AdminPage from './components/Pages/AdminAccount/AdminAccount';
import UserAccount from './components/Pages/UserAccount/UserAccount';
import Layout from './components/Layout';
import PrivateRoute from './components/hocs/PrivateRoute';
import UserCodePage from './components/Pages/Auth/UserCodePage';
import { useAppSelector } from './hooks/reduxHooks';
import AuthPage from './components/Pages/Auth/AuthPage';
import LoginPage from './components/Pages/Auth/LoginPage';
import useCheckAuth from './hooks/authHooks/useCheckAuth';

function App(): JSX.Element {
  useCheckAuth();
  const user = useAppSelector((store) => store.user) as {
    id: number;
    status: string;
    isAdmin: boolean;
  };
  const userWithStatus = useAppSelector((store) => store.lkReducer.currentUserLk);
  const owner = useAppSelector((store) => store.authOwner) as {
    id: number;
    status: string;
  };

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/countries/:id" element={<CountryPage />} />
        <Route path="/restaurants/:id" element={<RestaurantPage />} />
        <Route
          path="/admin"
          element={
            <PrivateRoute
              isAllowed={user.status === 'logged' && userWithStatus?.isAdmin !== true}
              redirectTo="/"
            >
              <AdminPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/user/:id"
          element={
            <PrivateRoute
              // isAllowed
              isAllowed={user.status === 'logged' && userWithStatus?.isAdmin !== true}
              redirectTo={`/user/${user?.id}`}
            >
              <UserAccount />
            </PrivateRoute>
          }
        />
        <Route
          path="/owner/:id"
          element={
            <PrivateRoute
              isAllowed
              // isAllowed={owner.status === 'logged'}
              redirectTo={`/owner/${owner?.id}`}
            >
              <OwnerAccount />
            </PrivateRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PrivateRoute
              isAllowed={user.status !== 'logged' && owner.status !== 'logged'}
              redirectTo="/"
            >
              <LoginPage />
            </PrivateRoute>
          }
        />
        <Route path="/signup" element={<AuthPage />} />
        <Route
          path="/code"
          element={
            <PrivateRoute
              isAllowed={user.status !== 'logged' && owner.status !== 'logged'}
              redirectTo="/"
            >
              <UserCodePage />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
