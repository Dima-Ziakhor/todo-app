import { makeAutoObservable } from 'mobx';
import type { CategoryType } from '../helpers/types';

class Categories {
  categories: CategoryType[] = JSON.parse(localStorage.getItem('categories') ?? '[]');

  constructor() {
    makeAutoObservable(this);
  }

  add(category: Omit<CategoryType, 'id'>): void {
    const categoryIndex = this.categories.findIndex(c => c.name === category.name);

    if (categoryIndex !== -1) {
      return;
    }

    const tempCategories = [...this.categories];

    const lastId = tempCategories.length
      ? tempCategories.sort((a, b) => a.id - b.id)[tempCategories.length - 1].id
      : 0;

    this.categories.push({
      id: lastId + 1,
      name: category.name
    });

    console.log(lastId);

    this.categories.sort((a, b) => a.name > b.name ? 1 : -1);
    localStorage.setItem('categories', JSON.stringify([...this.categories]));
  }

  remove(id: number): void {
    this.categories = this.categories.filter(item => item.id !== id);
    localStorage.setItem('categories', JSON.stringify([...this.categories]));
  }
}

export default new Categories();
