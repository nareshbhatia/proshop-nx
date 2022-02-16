import { DataSource } from 'apollo-datasource';
import products from './data/products.json';

export class ProductService extends DataSource {
  constructor() {
    super();
  }

  initialize() {}

  getProducts(categoryId: string) {
    return products.filter((product) => product.categoryId === categoryId);
  }

  getFeaturedProducts() {
    return products.filter((product) => product.isFeatured);
  }

  getProduct(id: string) {
    return products.find((product) => product.id === id);
  }
}
