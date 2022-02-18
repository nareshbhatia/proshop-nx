export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Cart = {
  __typename?: 'Cart';
  id: Scalars['ID'];
  items: Array<OrderItem>;
  totalPrice: Scalars['Float'];
  totalQuantity: Scalars['Int'];
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['ID'];
  photo: Scalars['String'];
  title: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** adds a product to the cart */
  addProductToCart: Cart;
  /** deletes a product from the cart */
  deleteProductFromCart: Cart;
  /** places an order from the cart and empties the cart */
  placeOrderFromCart: Order;
  /** updates the quantity of a product in the cart */
  updateProductQuantityInCart: Cart;
};

export type MutationAddProductToCartArgs = {
  productId: Scalars['ID'];
};

export type MutationDeleteProductFromCartArgs = {
  productId: Scalars['ID'];
};

export type MutationUpdateProductQuantityInCartArgs = {
  productId: Scalars['ID'];
  quantity: Scalars['Int'];
};

export type Order = {
  __typename?: 'Order';
  createdAt: Scalars['String'];
  id: Scalars['ID'];
  items: Array<OrderItem>;
  totalPrice: Scalars['Float'];
  totalQuantity: Scalars['Int'];
};

export type OrderItem = {
  __typename?: 'OrderItem';
  id: Scalars['ID'];
  price: Scalars['Float'];
  product: Product;
  quantity: Scalars['Int'];
};

export type Product = {
  __typename?: 'Product';
  category: Category;
  description: Scalars['String'];
  featuredPhoto?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isFeatured: Scalars['Boolean'];
  manufacturer: Scalars['String'];
  name: Scalars['String'];
  photo: Scalars['String'];
  price: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  /** returns my cart */
  cart: Cart;
  /** returns all the categories */
  categories: Array<Category>;
  /** returns the category with the specified categoryId */
  category: Category;
  /** returns all the featured products */
  featuredProducts: Array<Product>;
  /** returns my orders */
  orders: Array<Order>;
  /** returns the product with the specified productId */
  product: Product;
  /** returns all the products for the specified categoryId */
  products: Array<Product>;
};

export type QueryCategoryArgs = {
  categoryId: Scalars['ID'];
};

export type QueryProductArgs = {
  productId: Scalars['ID'];
};

export type QueryProductsArgs = {
  categoryId: Scalars['ID'];
};
