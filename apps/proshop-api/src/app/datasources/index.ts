import { CategoryService } from './CategoryService';

// Set up the dataSources needed by our resolvers
export const dataSources = () => ({
  categoryService: new CategoryService(),
});
