import { DataSource } from 'apollo-datasource';
import { Order } from '@proshop-nx/domain';

const orders: Array<Order> = [];

export class OrderService extends DataSource {
  constructor() {
    super();
  }

  initialize() {}

  getOrders() {
    return orders;
  }

  addOrder(order: Order) {
    orders.push(order);
  }
}
