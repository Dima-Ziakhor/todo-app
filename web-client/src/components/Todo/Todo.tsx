import React from 'react';
import { observer } from 'mobx-react-lite';
import todos from '../../store/todos';

import type { TodoType } from '../../helpers/types';

import './Todo.scss';

interface Props extends Pick<TodoType, 'id' | 'title' | 'priority' | 'completed'> {}

export const Todo = observer(({ id, title, priority, completed }: Props): JSX.Element => {
  const handleChangeChecked = (): void => {
    todos.updateStatus(id);
  };

  return (
    <div
      className="todo"
    >
      <input
        type="checkbox"
        checked={ completed }
        onChange={ handleChangeChecked }
      />

      <input
        type="text"
        className="todo__title"
        value={ title }
      />
    </div>
  );
});
