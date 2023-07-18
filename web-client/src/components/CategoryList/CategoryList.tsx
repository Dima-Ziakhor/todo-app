import React, { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import categories from '../../store/categories';
import classNames from 'classnames';
import { getSearchForCategories } from '../../utils';

import type { CategoryType } from '../../helpers/types';

import './CategoryList.scss';

export const CategoryList = observer((): JSX.Element => {
  const [searchParams] = useSearchParams();
  const categoryIdFromSearch = searchParams.get('categoryId') ?? '0';

  useEffect(() => {
    categories.fetchCategories();
  }, []);

  return (
    <ul className="category-list">
      {
        categories.getCategories.map(({ id, name }: CategoryType) => (
          <li
            key={ id }
            className="category-list__item"
          >
            <Link
              className={ classNames('category-list__link', { active: +categoryIdFromSearch === id }) }
              to={{ search: getSearchForCategories(id) }}
            >
              <span className="category-list__name">
                {
                  name
                }
              </span>
            </Link>
          </li>
        ))
      }
    </ul>
  );
});
