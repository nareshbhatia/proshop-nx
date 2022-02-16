export const resolvers = {
  Query: {
    categories(parent, args, { dataSources }) {
      return dataSources.categoryService.getCategories();
    },

    category(parent, { categoryId }, { dataSources }) {
      return dataSources.categoryService.getCategory(categoryId);
    },
  },
};
