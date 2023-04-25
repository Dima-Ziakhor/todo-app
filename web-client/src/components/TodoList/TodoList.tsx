import React, { useCallback, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Todo } from '../Todo';
import todos from '../../store/todos';

import './TodoList.scss';

export const TodoList = observer((): JSX.Element => {
  const handleOnChange = useCallback((id: string): void => {
    todos.updateStatus(id);
  }, []);

  const handleRemove = useCallback((id: string): void => {
    todos.removeTodo(id);
  }, []);

  useEffect(() => {
    todos.fetchTodos()
      .then(() => {
        console.log('Successful fetch todos');
      })
      .catch(err => {
        console.log(err);
      });
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
