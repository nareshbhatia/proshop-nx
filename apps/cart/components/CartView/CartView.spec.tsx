import { render } from '@testing-library/react';

import { CartView } from './CartView';

describe('Cart', () => {
  it('should render successfully', () => {
    const cart = {
      id: '1234',
      items: [],
      totalQuantity: 0,
      totalPrice: 0,
    };
    const { baseElement } = render(<CartView cart={cart} />);
    expect(baseElement).toBeTruthy();
  });
});
