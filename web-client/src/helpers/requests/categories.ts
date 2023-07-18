import type { CategoryType } from '../types';
import { API_URL_CATEGORIES } from './apiUrls';

export const fetchCategories = async (userId: number, token: string): Promise<CategoryType[]> => {
  try {
    const request = await fetch(`${API_URL_CATEGORIES}${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const response = await request.json();

    return response;
  } catch (err) {
    throw new Error('Categories fetch failed!');
  }
};
