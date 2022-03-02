import { DataSource } from 'apollo-datasource';
import { RawOrder } from './models';

const orders: Array<RawOrder> = [];

export class OrderService extends DataSource {
  constructor() {
    super();
  }

  initialize() {}

  getOrders() {
    return orders;
  }

  addOrder(order: RawOrder) {
    orders.push(order);
  }
}
