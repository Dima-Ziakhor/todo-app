import React, { useState } from 'react';

import './CategoryField.scss';
import categories from '../../store/categories';

export const CategoryField = (): JSX.Element => {
  const [value, setValue] = useState('');

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      categories.add({
        name: value
      })

      setValue('');
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };

  return (
    <div className="category-field">
      <div className="category-field__input-wrapper">
        <input
          type="text"
          className="category-field__input"
          placeholder="Add new category"
          value={ value }
          onKeyDown={ handleKeyDown }
          onChange={ handleChange }
        />
      </div>
    </div>
  );
};
