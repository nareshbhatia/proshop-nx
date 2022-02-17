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

    cart(parent, args, { dataSources }) {
      return dataSources.cartService.getCart();
    },

    addProductToCart(parent, { productId }, { dataSources }) {
      return dataSources.cartService.addProductToCart(productId);
    },

    deleteProductFromCart(parent, { productId }, { dataSources }) {
      return dataSources.cartService.deleteProductFromCart(productId);
    },

    updateProductQuantityInCart(parent, args, { dataSources }) {
      const { productId, quantity } = args;
      return dataSources.cartService.updateProductQuantityInCart(
        productId,
        quantity
      );
    },
  },

  Cart: {
    totalPrice(parent, args, { dataSources }) {
      return dataSources.cartService.totalPrice();
    },

    totalQuantity(parent, args, { dataSources }) {
      return dataSources.cartService.totalQuantity();
    },
  },

  OrderItem: {
    product({ productId }, args, { dataSources }) {
      return dataSources.productService.getProduct(productId);
    },
  },
};
