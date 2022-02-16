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

export type Category = {
  __typename?: 'Category';
  id: Scalars['ID'];
  photo: Scalars['String'];
  title: Scalars['String'];
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
  shortName: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  /** returns all the categories */
  categories: Array<Category>;
  /** returns the category with the specified categoryId */
  category?: Maybe<Category>;
  /** returns all the featured products */
  featuredProducts: Array<Product>;
  /** returns the product with the specified productId */
  product?: Maybe<Product>;
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
