import React from 'react';
import { observer } from 'mobx-react-lite';
import type { TodoType } from '../../helpers/types';

import './Todo.scss';

interface Props {
  todo: TodoType
  onChangeCheck: (id: number) => void
  onClickRemove: (id: number) => void
}

export const Todo = observer(({ todo, onChangeCheck, onClickRemove }: Props): JSX.Element => {
  const { id, title, completed, category } = todo;

  return (
    <li className="todo">
      <div className="todo__checkbox">
        <input
          id={ `check-${id}` }
          type="checkbox"
          className="todo__checkbox-input"
          checked={ completed }
          onChange={() => { onChangeCheck(id) } }
        />

        <label htmlFor={ `check-${id}` } className="todo__checkbox-label">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="todo__checkbox-svg">
            <path strokeLinecap="round" strokeMiterlimit="10" fill="none" d="M22.9 3.7l-15.2 16.6-6.6-7.1"></path>
          </svg>
        </label>
      </div>

      <p className="todo__title">
        { title }
      </p>

      <button className="todo__category">
        { category }
      </button>

      <button
        className="todo__remove-todo"
        onClick={() => { onClickRemove(id) } }
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
          <path d="M5.66667 3.33333L6.25 1H9.75L10.3333 3.33333M15 3.33333H2.16667L3.33333 17.3333H12.6667L13.8333 3.33333H1H15ZM8 6.83333V13.8333V6.83333ZM10.9167 6.83333L10.3333 13.8333L10.9167 6.83333ZM5.08333 6.83333L5.66667 13.8333L5.08333 6.83333Z" stroke="#FF0000" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </li>
  );
});
