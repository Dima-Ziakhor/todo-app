import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Start } from '../Start';
import { Auth } from '../Auth';
import { Activation } from '../Activation';
import { Activate } from '../Activate';
import { Header } from '../Header';
// import { RequireAuth } from '../RequireAuth/RequireAuth';
import { Todos } from '../Todos';
import { LoginContext } from '../../helpers/contexts';

import './App.scss';

export const App = (): JSX.Element => {
  // const [currentCategory, setCurrentCategory] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <Header />
        <Routes>
          <Route path="/" element={ <Start /> } />
          <Route path="sign-up" element={ <Auth type="sign-up" /> } />
          <Route path="login" element={ <Auth type="login" /> } />
          <Route path="activation" element={ <Activation /> } />
          <Route path="activate/:activationToken" element={ <Activate /> } />
          {/* <Route path="/" element={ <RequireAuth /> }> */}
          {/*  <Route path="todos" element={ <Todos /> } /> */}
          {/* </Route> */}
          <Route path="todos" element={ <Todos /> }>
            <Route path=":categoryId" element={ <Todos /> } />
          </Route>
        </Routes>
      </LoginContext.Provider>
    </>
  );
};
