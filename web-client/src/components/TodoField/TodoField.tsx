import React, { useState } from 'react';
import todos from '../../store/todos';

import './TodoField.scss';

export const TodoField = (): JSX.Element => {
  const [value, setValue] = useState('');

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      todos.addTodo({
        title: value,
        category: 'something'
      });

      setValue('');
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };

  return (
    <div className="field">
      <input
        type="text"
        className="field__input"
        placeholder="Add a new task inside ‘All’ category"
        value={ value }
        onChange={ handleChange }
        onKeyDown={ handleKeyDown }
      />
    </div>
  );
};
