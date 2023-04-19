import React, { useState } from 'react';

import './TodoList.scss';

interface Todo {
  id: number
  title: string
  category: string
  completed: boolean
}
export const TodoList = (): JSX.Element => {
  const [todos] = useState<Todo[]>([
    {
      id: 1,
      completed: true,
      title: 'Get a new helmet',
      category: 'Uncategorized'
    },
    {
      id: 2,
      completed: false,
      title: 'Purchase Milk & Corn Flakes',
      category: 'Groceries'
    },
    {
      id: 3,
      completed: false,
      title: 'Pay mortgage',
      category: 'Payments'
    },
    {
      id: 4,
      completed: true,
      title: 'Complete Assignments',
      category: 'College'
    },
    {
      id: 5,
      completed: false,
      title: 'Replace laptop’s screen',
      category: 'Uncategorized'
    }
  ]);

  return (
    <ul className="todo-list">
      {
        todos.map(({ id, title, category, completed }) => (
          <li key={ id } className="todo-list__todo">
            <div className="todo-list__checkbox-wrapper">
              <input type="checkbox" className="todo-list__checkbox" checked={ completed } />
            </div>

            <p className="todo-list__title">
              { title }
            </p>

            <button className="todo-list__category">
              { category }
            </button>

            <button className="todo-list__remove-todo">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
                <path d="M5.66667 3.33333L6.25 1H9.75L10.3333 3.33333M15 3.33333H2.16667L3.33333 17.3333H12.6667L13.8333 3.33333H1H15ZM8 6.83333V13.8333V6.83333ZM10.9167 6.83333L10.3333 13.8333L10.9167 6.83333ZM5.08333 6.83333L5.66667 13.8333L5.08333 6.83333Z" stroke="#FF0000" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </li>
        ))
      }
    </ul>
  );
};
