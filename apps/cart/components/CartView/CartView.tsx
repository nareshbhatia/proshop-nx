import * as React from 'react';
import { Cart } from '@proshop-nx/domain';
import { EmptyCartView } from './EmptyCartView';
import { FilledCartView } from './FilledCartView';

export interface CartViewProps {
  cart: Cart;
}

export function CartView({ cart }: CartViewProps) {
  const { totalQuantity } = cart;
  return totalQuantity === 0 ? (
    <EmptyCartView />
  ) : (
    <FilledCartView cart={cart} />
  );
}
