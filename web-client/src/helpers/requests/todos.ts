import type { TodoType } from '../types';
import { API_URL_TODOS } from './apiUrls';

export const fetchTodos = async (userId: number, token: string, categoryId: number | null): Promise<TodoType[]> => {
  const requestURL = new URL(API_URL_TODOS);

  requestURL.searchParams.set('userId', `${userId}`);
  requestURL.searchParams.set('categoryId', `${categoryId ?? '0'}`);

  try {
    const request = await fetch(requestURL.toString(), {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const response = await request.json();

    return response;
  } catch (err) {
    throw new Error('Todos fetch failed!');
  }
};

export const postTodo = async (todo: Omit<TodoType, 'id' | 'completed'>): Promise<TodoType[]> => {
  try {
    const request = await fetch(API_URL_TODOS, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(todo)
    });
    const response = await request.json();

    return response;
  } catch (err) {
    throw new Error('Todo post failed!');
  }
};

export const removeTodo = async (todoId: number): Promise<void> => {
  try {
    const request = await fetch(`${API_URL_TODOS}${todoId}`, {
      method: 'DELETE'
    });

    if (request.status === 204) {
      console.log('Delete successful!');
    } else {
      console.log('Something went wrong...');
    }
  } catch (err) {
    throw new Error('Todo delete failed in request!');
  }
};

export const updateTodo = async (todo: TodoType, token: string): Promise<TodoType> => {
  try {
    const request = await fetch(`${API_URL_TODOS}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(todo)
    });

    const response = await request.json();

    return response;
  } catch {
    throw new Error('Todo update failed in request!');
  }
}
