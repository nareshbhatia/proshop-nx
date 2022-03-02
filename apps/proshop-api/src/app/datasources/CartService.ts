import { DataSource } from 'apollo-datasource';
import { v4 as uuidv4 } from 'uuid';
import products from './data/products.json';
import { RawOrder, RawOrderItem } from './models';

const CART_ID = 1234;
const cartItems: Array<RawOrderItem> = [];

function findProduct(productId: string) {
  return products.find((product) => product.id === productId);
}

function findItem(productId: string) {
  return cartItems.find((item) => item.productId === productId);
}

function findItemIndex(productId: string) {
  return cartItems.findIndex((item) => item.productId === productId);
}

export class CartService extends DataSource {
  constructor() {
    super();
  }

  initialize() {}

  getCart() {
    return { id: CART_ID, items: cartItems };
  }

  totalPrice() {
    return cartItems.reduce((accumulator, item) => {
      return accumulator + item.price;
    }, 0);
  }

  totalQuantity() {
    return cartItems.reduce((accumulator, item) => {
      return accumulator + item.quantity;
    }, 0);
  }

  addProductToCart(productId: string) {
    const product = findProduct(productId);
    if (!product) {
      // could not find product, just return the cart
      return { id: CART_ID, items: cartItems };
    }

    const { price } = product;
    const existingItem = findItem(productId);
    if (existingItem) {
      existingItem.quantity++;
      existingItem.price = existingItem.quantity * price;
    } else {
      cartItems.push({
        id: uuidv4(),
        productId,
        price: price,
        quantity: 1,
      });
    }
    return { id: CART_ID, items: cartItems };
  }

  deleteProductFromCart(productId: string) {
    const index = findItemIndex(productId);
    if (index >= 0) {
      cartItems.splice(index, 1);
    }
    return { id: CART_ID, items: cartItems };
  }

  updateProductQuantityInCart(productId: string, quantity: number) {
    const product = findProduct(productId);
    if (!product) {
      // could not find product, just return the cart
      return { id: CART_ID, items: cartItems };
    }

    const { price } = product;
    const existingItem = findItem(productId);
    if (existingItem) {
      existingItem.quantity = quantity;
      existingItem.price = existingItem.quantity * price;
    }
    return { id: CART_ID, items: cartItems };
  }

  clearCart() {
    cartItems.length = 0;
  }

  createOrderFromCart(): RawOrder {
    return {
      id: uuidv4(),
      createdAt: new Date().toISOString(),
      items: cartItems.map((item) => ({ ...item })), // shallow copy
      totalPrice: this.totalPrice(),
      totalQuantity: this.totalQuantity(),
    };
  }
}
