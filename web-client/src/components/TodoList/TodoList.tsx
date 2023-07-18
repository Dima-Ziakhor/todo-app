import React, { useEffect } from 'react';
import { useMatch } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Todo } from '../Todo';
import todos from '../../store/todos';

import type { TodoType } from '../../helpers/types';

import './TodoList.scss';

export const TodoList = observer((): JSX.Element => {
  const match = useMatch('/todos/:categoryId');

  useEffect(() => {
    const categoryId = match
      ? Number(match.params.categoryId)
      : null;

    todos.fetchTodos(categoryId && +categoryId);
  }, [match?.params.categoryId]);

  return (
    <ul className="todo-list">
      {
        todos.getTodos.map(({ id, title, priority, completed }: TodoType) => (
          <li
            key={ id }
            className="todo-list__item"
          >
            <Todo
              id={ id }
              title={ title }
              priority={ priority }
              completed={ completed }
            />
          </li>
        ))
      }
    </ul>
  );
});
