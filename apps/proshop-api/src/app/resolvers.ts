export const resolvers = {
  Query: {
    categories(parent, args, { dataSources }) {
      return dataSources.categoryService.getCategories();
    },

    category(parent, { categoryId }, { dataSources }) {
      return dataSources.categoryService.getCategory(categoryId);
    },

    products(parent, { categoryId }, { dataSources }) {
      return dataSources.productService.getProducts(categoryId);
    },

    featuredProducts(parent, args, { dataSources }) {
      return dataSources.productService.getFeaturedProducts();
    },

    product(parent, { productId }, { dataSources }) {
      return dataSources.productService.getProduct(productId);
    },
  },
};
