import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Cart } from '@proshop-nx/domain';
import { NumberUtils } from '@react-force/number-utils';

export interface PlaceOrderPanelProps {
  cart: Cart;
}

export function PlaceOrderPanel({ cart }: PlaceOrderPanelProps) {
  const { totalQuantity, totalPrice } = cart;
  const fmtQty = totalQuantity.toString();
  const fmtPrice = NumberUtils.formatAsMoney(totalPrice);

  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="h5" component="span">
          Subtotal:
        </Typography>
        &nbsp;
        <Typography variant="h5" component="span" fontWeight="bold">
          ${fmtPrice}
        </Typography>
      </Box>
      <Button variant="contained" color="secondary" sx={{ mt: 1 }}>
        Place your order ({fmtQty} {totalQuantity === 1 ? 'item' : 'items'})
      </Button>
    </React.Fragment>
  );
}
