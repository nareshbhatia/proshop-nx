import * as React from 'react';
import { gql, useQuery } from '@apollo/client';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from '../Link';

const GetCartCount = gql`
  query GetCart {
    cart {
      id
      totalQuantity
    }
  }
`;

interface CartCountProps {
  hrefCart: string;
}

export function CartCount({ hrefCart }: CartCountProps) {
  const { loading, error, data } = useQuery(GetCartCount);

  if (loading) return null;
  if (error) return null;

  return (
    <Link href={hrefCart}>
      <IconButton
        size="large"
        aria-label="show 4 new notifications"
        sx={{ color: 'primary.contrastText' }}
      >
        <Badge badgeContent={data.cart.totalQuantity.toString()} color="error">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </Link>
  );
}
