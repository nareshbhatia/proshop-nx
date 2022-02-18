import * as React from 'react';
import Typography from '@mui/material/Typography';

export function EmptyCartView() {
  return (
    <React.Fragment>
      <Typography variant="h5" component="span">
        Your cart is empty
      </Typography>
      <Typography>Continue shopping</Typography>
    </React.Fragment>
  );
}
