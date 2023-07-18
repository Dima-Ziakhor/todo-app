import { API_URL_LOGIN } from './apiUrls';
import type { User } from '../types';

interface ReturnProps {
  user: Pick<User, 'id' | 'email'>
  accessToken: string
}

export const login = async (userData: Pick<User, 'email' | 'password'>): Promise<ReturnProps> => {
  try {
    const request = await fetch(API_URL_LOGIN, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(userData)
    });
    const response = await request.json();

    return response;
  } catch (err) {
    throw new Error('Error when try to login');
  }
};
