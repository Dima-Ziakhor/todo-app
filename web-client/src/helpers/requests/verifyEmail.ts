import { API_URL_VERIFY_EMAIL } from './apiUrls';
import type { User } from '../types';

export const verifyEmail = async (token: string): Promise<User> => {
  try {
    const request = await fetch(`${API_URL_VERIFY_EMAIL}${token}`);
    const response = await request.json();

    return response;
  } catch (err) {
    throw new Error('Error when try to verify email.');
  }
};
