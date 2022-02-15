import { render } from '@testing-library/react';

import ProductList from './ProductList';

describe('ProductList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProductList />);
    expect(baseElement).toBeTruthy();
  });
});
