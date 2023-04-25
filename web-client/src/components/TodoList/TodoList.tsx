import React, { useCallback } from 'react';
import { observer } from 'mobx-react-lite';
import { Todo } from '../Todo';
import todos from '../../store/todos';

import './TodoList.scss';

export const TodoList = observer((): JSX.Element => {
  const handleOnChange = useCallback((id: number): void => {
    todos.updateStatus(id);
  }, []);

  const handleRemove = useCallback((id: number): void => {
    todos.removeTodo(id);
  }, []);

  return (
    <ul className="todo-list">
      {
        todos.getTodos.map(todo => (
          <Todo
            key={ todo.id }
            todo={ todo }
            onChangeCheck={ handleOnChange }
            onClickRemove={ handleRemove }
          />
        ))
      }
    </ul>
  );
});
