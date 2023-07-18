import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { verifyEmail } from '../../helpers/requests/verifyEmail';
import { Loader } from '../Loader';

import './Activate.scss';

export const Activate = (): JSX.Element => {
  const { activationToken = '' } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    verifyEmail(activationToken)
      .then((res) => {
        if (res) {
          setIsVerified(true);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="activate">
      <div className="container">
        <div className="activate__wrapper">
          <div className="activate__loader">
            {
              isLoading && (
                <Loader />
              )
            }
          </div>
          <p className="activate__message">
            {
              !isLoading && (
                isVerified
                  ? ('You successfully confirmed your email!')
                  : ('Oops, something went wrong. Try again.')
              )
            }
          </p>
        </div>
      </div>
    </div>
  );
};
