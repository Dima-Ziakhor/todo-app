import { makeAutoObservable, flow } from 'mobx';
import { fetchCategories } from '../helpers/requests/categories';
import type { CategoryType } from '../helpers/types';

class Categories {
  categories: CategoryType[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  get getCategories(): CategoryType[] {
    return this.categories;
  }

  fetchCategories = flow(function * (this: Categories) {
    const userId = localStorage.getItem('userId');
    const accessToken = localStorage.getItem('accessToken');

    if (!userId) {
      throw new Error('User ID not found!');
    }

    if (!accessToken) {
      throw new Error('Access token not found!');
    }

    this.categories = yield fetchCategories(+userId, accessToken);
  })

  add(category: Omit<CategoryType, 'id'>): void {

  }

  remove(id: string): void {

  }
}

export default new Categories();
