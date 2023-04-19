import React from 'react';
import { CategoriesList } from '../CategoriesList';
import { TodoList } from '../TodoList';

import './App.scss';

export const App = (): JSX.Element => {
  return (
    <div className="app">
      <div className="app__container">
        <div className="app__categories">
          <CategoriesList />
        </div>

        <section className="app__tasks">
          <h2 className="app__title">
            All Tasks
          </h2>

          <div className="app__todos">
            <TodoList />
          </div>
        </section>
      </div>
    </div>
  );
};
