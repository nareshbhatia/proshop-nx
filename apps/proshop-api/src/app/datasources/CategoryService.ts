import { DataSource } from 'apollo-datasource';
import categories from './data/categories.json';

export class CategoryService extends DataSource {
  constructor() {
    super();
  }

  initialize() {}

  getCategories() {
    return categories;
  }

  getCategory(id: string) {
    return categories.find((category) => category.id === id);
  }
}
