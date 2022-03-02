import { render } from '@testing-library/react';

import { ProductCarousel } from './ProductCarousel';

describe('ProductCarousel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProductCarousel />);
    expect(baseElement).toBeTruthy();
  });
});
