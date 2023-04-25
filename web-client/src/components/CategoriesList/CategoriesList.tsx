import React, { useCallback } from 'react';
import { observer } from 'mobx-react-lite';
import type { CategoryType } from '../../helpers/types';
import categories from '../../store/categories';
import { CategoryField } from '../CategoryField';

import './CategoriesList.scss';

export const CategoriesList = observer((): JSX.Element => {
  const handleClick = useCallback((id: number): void => {
    categories.remove(id);
  }, []);

  return (
    <div className="categories">
      <ul className="categories__list">
        <li className="categories__list-item">
          <a
            href="#"
            className="categories__list-link"
          >
            All
          </a>
        </li>
        {
          categories.categories.map((category: CategoryType) => (
            <li key={ category.id } className="categories__list-item">
              <a
                href="#"
                className="categories__list-link"
                onClick={ () => { handleClick(category.id) } }
              >
                { category.name }
              </a>
            </li>
          ))
        }
      </ul>

      <div className="categories__add">
        <CategoryField />
      </div>
    </div>
  );
});
