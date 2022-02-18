import * as React from 'react';
import { Cart } from '@proshop-nx/domain';
import { NumberUtils } from '@react-force/number-utils';
import { PlaceOrderPanel } from './PlaceOrderPanel';

export interface FilledCartViewProps {
  cart: Cart;
}

export function FilledCartView({ cart }: FilledCartViewProps) {
  return (
    <React.Fragment>
      <PlaceOrderPanel cart={cart} />
      <ul>
        {cart.items.map((item) => {
          const { id, product, price, quantity } = item;
          return (
            <li key={id}>
              {product.name} - {quantity}: ${NumberUtils.formatAsMoney(price)}
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
}
