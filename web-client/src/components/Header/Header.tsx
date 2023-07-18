import React, { useContext } from 'react';
import { LoginContext } from '../../helpers/contexts';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

import './Header.scss';

export const Header = (): JSX.Element => {
  const { isLoggedIn } = useContext(LoginContext);

  return (
    <header className="header">
      <div className="header__container container">
        <div className="header__wrapper">
          <nav className="header__menu">
            <div className="header__left">
              <ul className="header__list">
                <li className="header__list-item">
                  <Link
                    to="/"
                    className="header__logo"
                  >
                    <img
                      src={ logo }
                      alt="Todo App"
                      className="header__logo-image"
                    />
                  </Link>
                </li>

                <li className="header__list-item">
                  <Link
                    to="/todos"
                    className="header__link"
                  >
                    Todos
                  </Link>
                </li>

                <li className="header__list-item">
                  <Link
                    to="/about"
                    className="header__link"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>

            <div className="header__right">
              <ul className="header__list">
                {
                  isLoggedIn
                    ? (
                      <li className="header__list-item">
                        <button
                          className="header__button header__button--log-out"
                        >
                          Log out
                        </button>
                      </li>)
                    : (
                      <>
                        <li className="header__list-item">
                          <Link
                            to="/sign-up"
                            className="header__button header__button--sign-up"
                          >
                            Sign up
                          </Link>
                        </li>

                        <li className="header__list-item">
                          <Link
                            to="/login"
                            className="header__button header__button--login"
                          >
                            Log in
                          </Link>
                        </li>
                      </>)
                }
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
