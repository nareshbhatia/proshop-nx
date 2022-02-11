import { render } from '@testing-library/react';

import CategoryList from './CategoryList';

describe('CategoryList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CategoryList />);
    expect(baseElement).toBeTruthy();
  });
});
