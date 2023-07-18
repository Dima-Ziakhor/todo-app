import React from 'react';
import { Link } from 'react-router-dom';

import './Start.scss';

export const Start = (): JSX.Element => {
  return (
    <div className="start">
      <div className="start__container">
        <div className="start__wrapper">
          <h1 className="start__title">
            Todo app
          </h1>

          <h2 className="start__subtitle">
            This is a simple app, where you can create and manage your tasks
          </h2>

          <div className="start__btn-wrapper">
            <Link to="sign-up" className="start__btn">
              Start
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
