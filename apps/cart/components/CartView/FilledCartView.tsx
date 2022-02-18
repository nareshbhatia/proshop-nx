import * as React from 'react';
import { Cart } from '@proshop-nx/domain';
import { PlaceOrderPanel } from './PlaceOrderPanel';

export interface FilledCartViewProps {
  cart: Cart;
}

export function FilledCartView({ cart }: FilledCartViewProps) {
  return (
    <React.Fragment>
      <PlaceOrderPanel cart={cart} />
    </React.Fragment>
  );
}
