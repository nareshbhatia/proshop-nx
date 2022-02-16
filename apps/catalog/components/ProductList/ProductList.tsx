import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Product } from '@proshop-nx/domain';
import { ProductView } from './ProductView';

// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra-large: 1536px

interface ProductListProps {
  products: Array<Product>;
}

export function ProductList({ products }: ProductListProps) {
  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid item key={product.id} xs={6} sm={4} md={3} lg={2}>
          <ProductView key={product.id} product={product} />
        </Grid>
      ))}
    </Grid>
  );
}
