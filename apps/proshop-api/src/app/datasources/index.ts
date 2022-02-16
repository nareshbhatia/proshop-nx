import { CategoryService } from './CategoryService';
import { ProductService } from './ProductService';

// Set up the dataSources needed by our resolvers
export const dataSources = () => ({
  categoryService: new CategoryService(),
  productService: new ProductService(),
});
