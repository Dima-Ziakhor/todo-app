import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { LoginContext } from '../../helpers/contexts';

import './RequireAuth.scss';

export const RequireAuth = (): JSX.Element => {
  const { isLoggedIn } = useContext(LoginContext);

  return (
    <>
      {
        !isLoggedIn
          ? (
            <div className="require-auth">
              <div className="container">
                <div className="require-auth__wrapper">
                  <h3 className="require-auth__title">
                    You need to login to get access to the todos.
                  </h3>
                </div>
              </div>
            </div>)
          : (
            <Outlet />)
      }
    </>
  );
};
