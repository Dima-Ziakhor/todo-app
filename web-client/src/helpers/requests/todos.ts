import type { TodoType } from '../types';

const API_URL = 'http://localhost:5001';

export const fetchTodos = async (): Promise<TodoType[]> => {
  try {
    const request = await fetch(`${API_URL}/todos`);
    const response = await request.json();

    return response;
  } catch (err) {
    throw new Error('Todos fetch failed!');
  }
};

export const postTodo = async (todo: Omit<TodoType, 'id' | 'completed'>): Promise<TodoType[]> => {
  try {
    const request = await fetch(`${API_URL}/todos`, {
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

export const removeTodo = async (todoId: string): Promise<void> => {
  try {
    const request = await fetch(`${API_URL}/todos/${todoId}`, {
      method: 'DELETE'
    });

    if (request.status === 204) {
      console.log('Delete successful!');
    } else {
      console.log('Something went wrong...');
    }
  } catch (err) {
    throw new Error('Todo delete failed!');
  }
};
