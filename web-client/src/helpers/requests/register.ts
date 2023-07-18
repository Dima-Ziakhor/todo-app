import { API_URL_REGISTER } from './apiUrls';
import type { User } from '../types';

export const register = async ({ email, password }: Pick<User, 'email' | 'password'>): Promise<User> => {
  try {
    const registrationData = {
      email,
      password
    };
    const request = await fetch(API_URL_REGISTER, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(registrationData)
    });
    const response = await request.json();

    return response;
  } catch (err) {
    throw new Error('Failed while registering.')
  }
};
