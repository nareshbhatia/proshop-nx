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
  /** adds a product to the cart */
  addProductToCart: Cart;
  /** returns my cart */
  cart: Cart;
  /** returns all the categories */
  categories: Array<Category>;
  /** returns the category with the specified categoryId */
  category: Category;
  /** deletes a product from the cart */
  deleteProductFromCart: Cart;
  /** returns all the featured products */
  featuredProducts: Array<Product>;
  /** returns the product with the specified productId */
  product: Product;
  /** returns all the products for the specified categoryId */
  products: Array<Product>;
  /** updates the quantity of a product in the cart */
  updateProductQuantityInCart: Cart;
};

export type QueryAddProductToCartArgs = {
  productId: Scalars['ID'];
};

export type QueryCategoryArgs = {
  categoryId: Scalars['ID'];
};

export type QueryDeleteProductFromCartArgs = {
  productId: Scalars['ID'];
};

export type QueryProductArgs = {
  productId: Scalars['ID'];
};

export type QueryProductsArgs = {
  categoryId: Scalars['ID'];
};

export type QueryUpdateProductQuantityInCartArgs = {
  productId: Scalars['ID'];
  quantity: Scalars['Int'];
};
