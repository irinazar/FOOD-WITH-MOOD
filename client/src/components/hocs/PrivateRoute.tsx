import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

type PrivateRouterPropsType = {
  children?: React.ReactElement;
  isAllowed: boolean;
  redirectTo: string;
};

export default function PrivateRoute({
  children,
  isAllowed,
  redirectTo,
}: PrivateRouterPropsType): JSX.Element {
  if (!isAllowed) {
    return <Navigate to={redirectTo} />;
  }
  return children || <Outlet />;
}
