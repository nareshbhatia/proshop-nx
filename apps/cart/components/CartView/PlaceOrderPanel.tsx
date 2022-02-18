import * as React from 'react';
import { gql, useMutation } from '@apollo/client';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Typography from '@mui/material/Typography';
import { Cart } from '@proshop-nx/domain';
import { NumberUtils } from '@react-force/number-utils';

const PlaceOrderFromCart = gql`
  mutation PlaceOrderFromCart {
    placeOrderFromCart {
      id
      createdAt
    }
  }
`;

export interface PlaceOrderPanelProps {
  cart: Cart;
}

export function PlaceOrderPanel({ cart }: PlaceOrderPanelProps) {
  const [placeOrder, { loading }] = useMutation(PlaceOrderFromCart);
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);

  const { totalQuantity, totalPrice } = cart;
  const fmtQty = totalQuantity.toString();
  const fmtPrice = NumberUtils.formatAsMoney(totalPrice);

  const handlePlaceOrder = async () => {
    await placeOrder();
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackbarOpen(false);
  };

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
      <Button
        variant="contained"
        color="secondary"
        sx={{ mt: 1 }}
        disabled={loading}
        onClick={handlePlaceOrder}
      >
        Place your order ({fmtQty} {totalQuantity === 1 ? 'item' : 'items'})
      </Button>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        autoHideDuration={6000}
        open={snackbarOpen}
        onClose={handleSnackbarClose}
        message="Order placed"
      />
    </React.Fragment>
  );
}
