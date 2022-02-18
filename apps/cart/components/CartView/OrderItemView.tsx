import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { OrderItem } from '@proshop-nx/domain';
import { NumberUtils } from '@react-force/number-utils';

// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra-large: 1536px

export interface OrderItemViewProps {
  item: OrderItem;
}

export function OrderItemView({ item }: OrderItemViewProps) {
  const { product, price, quantity } = item;
  return (
    <Grid container spacing={2}>
      <Grid item xs={4} sm={3} md={2}>
        <img
          src={product.photo}
          alt={product.name}
          width="100%"
          loading="lazy"
        />
      </Grid>
      <Grid item xs={8} sm={9} md={10}>
        <Box sx={{ display: 'flex' }}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="body1" component="h2">
              {product.name}
            </Typography>
            <Typography variant="h5" component="p">
              ${NumberUtils.formatAsMoney(price)}
            </Typography>
          </Box>
        </Box>
        <Typography variant="body1" component="p">
          {product.description}
        </Typography>
      </Grid>
    </Grid>
  );
}

{
  /* <div>
      {product.name} - {quantity}: ${NumberUtils.formatAsMoney(price)}
    </div> */
}
