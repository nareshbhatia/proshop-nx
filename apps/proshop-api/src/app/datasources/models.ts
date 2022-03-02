export interface RawOrderItem {
  id: string;
  productId: string;
  price: number;
  quantity: number;
}

export interface RawOrder {
  id: string;
  createdAt: string;
  items: Array<RawOrderItem>;
  totalPrice: number;
  totalQuantity: number;
}
