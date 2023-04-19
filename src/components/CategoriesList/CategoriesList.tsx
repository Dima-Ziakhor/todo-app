import React, { useState } from 'react';

import './CategoriesList.scss';

export const CategoriesList = (): JSX.Element => {
  const [categories] = useState([
    'All',
    'Groceries',
    'College',
    'Payments'
  ]);

  return (
    <ul className="categories-list">
      {
        categories.map(item => (
          <li key={ item } className="categories-list__item">
            <a href="#" className="categories-list__link">
              { item }
            </a>
          </li>
        ))
      }
    </ul>
  );
};
