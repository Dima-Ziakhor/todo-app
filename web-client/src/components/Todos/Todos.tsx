import React from 'react';
import { CategoryList } from '../CategoryList';
import { TodoList } from '../TodoList';

import './Todos.scss';

export const Todos = (): JSX.Element => {
  return (
    <div className="todos">
      <div className="container todos__container">
        <div className="todos__wrapper">
          <div className="todos__content">
            <div className="todos__categories">
              <CategoryList />
            </div>

            <div className="todos__todos-wrapper">
              <div className="todos__header">
                <h3 className="todos__title">
                  Tasks
                </h3>
              </div>
              <TodoList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
