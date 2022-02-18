import { CartService } from './CartService';
import { CategoryService } from './CategoryService';
import { OrderService } from './OrderService';
import { ProductService } from './ProductService';

// Set up the dataSources needed by our resolvers
export const dataSources = () => ({
  cartService: new CartService(),
  categoryService: new CategoryService(),
  orderService: new OrderService(),
  productService: new ProductService(),
});
