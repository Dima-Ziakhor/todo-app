import React, { useState, useContext } from 'react';
import type { FormEvent } from 'react';
import type { User } from '../../helpers/types';
import { useNavigate } from 'react-router-dom';
import { register } from '../../helpers/requests/register';
import { login } from '../../helpers/requests/login';
import { Loader } from '../Loader';
import { LoginContext } from '../../helpers/contexts';

import './Auth.scss';

interface Props {
  type: 'login' | 'sign-up'
}

export const Auth = ({ type }: Props): JSX.Element => {
  const [isLoading, setIsLoading] = useState(false);
  const { setIsLoggedIn } = useContext(LoginContext);
  const navigate = useNavigate();
  const titles = {
    login: 'Login',
    'sign-up': 'Sign up'
  };

  const handleOnSubmit = async (event: FormEvent): Promise<void> => {
    event.preventDefault();
    setIsLoading(true);

    const form: HTMLFormElement = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const formValues = Object.fromEntries(formData.entries()) as Omit<User, 'id' | 'activationToken'>;

    if (!formValues.email || !formValues.password) {
      return;
    }

    switch (type) {
      case 'sign-up': {
        await register(formValues)
          .then(res => {
            if (res) {
              navigate('../activation');
            }
          })
          .finally(() => {
            setIsLoading(false);
          });

        break;
      }

      case 'login': {
        await login(formValues)
          .then(res => {
            if (res) {
              setIsLoggedIn(true);
              localStorage.setItem('userId', `${res.user.id}`);
              localStorage.setItem('accessToken', res.accessToken);
              navigate('../todos');
            }
          })
          .finally(() => {
            setIsLoading(false);
          });
      }
    }
  };

  return (
    <div className="auth">
      <div className="container auth__container">
        <div className="auth__wrapper">
          <div className="auth__content">
            <form className="auth__form" onSubmit={ handleOnSubmit }>
              <div className="auth__loader">
                {
                  isLoading && (
                    <Loader />
                  )
                }
              </div>

              {
                !isLoading && (
                  <div className="auth__form-wrapper">
                    <h3 className="auth__title">
                      { titles[type] }
                    </h3>

                    <div className="auth__field">
                      <input
                        name="email"
                        type="email"
                        className="auth__input"
                        placeholder="Enter your email"
                        defaultValue={ '' }
                      />
                    </div>

                    <div className="auth__field">
                      <input
                        name="password"
                        type="password"
                        className="auth__input"
                        placeholder="Enter you password"
                        defaultValue={ '' }
                        minLength={ 6 }
                        maxLength={ 16 }
                      />
                    </div>

                    <div className="auth__field auth__field--submit">
                      <button className="auth__submit-btn">
                        { titles[type] }
                      </button>
                    </div>
                  </div>
                )
              }
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
