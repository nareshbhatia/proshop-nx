import * as React from 'react';
import { gql, useQuery } from '@apollo/client';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const GetCartCount = gql`
  query GetCart {
    cart {
      id
      totalQuantity
    }
  }
`;

export function CartCount() {
  const { loading, error, data } = useQuery(GetCartCount);

  if (loading) return null;
  if (error) return null;

  return (
    <IconButton
      size="large"
      aria-label="show 4 new notifications"
      color="inherit"
    >
      <Badge badgeContent={data.cart.totalQuantity.toString()} color="error">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
}
