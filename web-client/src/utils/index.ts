export const getSearchForCategories = (id: number): string => {
  if (id === 0) {
    return '';
  }

  return `categoryId=${id}`
};
