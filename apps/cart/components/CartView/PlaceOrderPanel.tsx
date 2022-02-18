import * as React from 'react';
import { gql, useMutation } from '@apollo/client';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Cart } from '@proshop-nx/domain';
import { NumberUtils } from '@react-force/number-utils';
import { useRouter } from 'next/router';

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
  const router = useRouter();
  const [placeOrder, { loading }] = useMutation(PlaceOrderFromCart, {
    refetchQueries: ['GetCart'],
  });

  // This function forces a call to getServerSideProps(),
  // thus refreshing the page data.
  const refreshData = () => {
    router.replace(router.asPath);
  };

  const { totalQuantity, totalPrice } = cart;
  const fmtQty = totalQuantity.toString();
  const fmtPrice = NumberUtils.formatAsMoney(totalPrice);

  const handlePlaceOrder = async () => {
    await placeOrder();
    refreshData();
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
    </React.Fragment>
  );
}
