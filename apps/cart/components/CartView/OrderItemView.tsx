import * as React from 'react';
import { gql, useMutation } from '@apollo/client';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import { OrderItem } from '@proshop-nx/domain';
import { NumberUtils } from '@proshop-nx/number-utils';
import { useRouter } from 'next/router';

// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra-large: 1536px

const UpdateProductQuantityInCart = gql`
  mutation UpdateProductQuantityInCart($productId: ID!, $quantity: Int!) {
    updateProductQuantityInCart(productId: $productId, quantity: $quantity) {
      id
      totalQuantity
    }
  }
`;

const DeleteProductFromCart = gql`
  mutation DeleteProductFromCart($productId: ID!) {
    deleteProductFromCart(productId: $productId) {
      id
      totalQuantity
    }
  }
`;

export interface OrderItemViewProps {
  item: OrderItem;
}

export function OrderItemView({ item }: OrderItemViewProps) {
  const router = useRouter();
  const [updateQuantity] = useMutation(UpdateProductQuantityInCart);
  const [deleteProduct] = useMutation(DeleteProductFromCart);
  const { product, price, quantity } = item;

  // This function forces a call to getServerSideProps(),
  // thus refreshing the page data.
  const refreshData = () => {
    router.replace(router.asPath);
  };

  const handleQuantityChange = async (event: SelectChangeEvent) => {
    await updateQuantity({
      variables: {
        productId: product.id,
        quantity: event.target.value,
      },
    });
    refreshData();
  };

  const handleDeleteProduct = async () => {
    await deleteProduct({
      variables: {
        productId: product.id,
      },
    });
    refreshData();
  };

  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={6} sm={4} md={3}>
          <img
            src={product.photo}
            alt={product.name}
            width="100%"
            loading="lazy"
          />
        </Grid>
        <Grid item xs={6} sm={8} md={9}>
          <Typography variant="body1" component="h2">
            {product.name}
          </Typography>
          <Typography variant="h5" component="p">
            ${NumberUtils.formatAsMoney(price)}
          </Typography>
        </Grid>
      </Grid>
      <Box sx={{ mt: 1, display: 'flex', alignItems: 'flex-end' }}>
        <FormControl variant="standard" sx={{ minWidth: 60 }}>
          <InputLabel id="quantity-select-label">Quantity</InputLabel>
          <Select
            id="quantity-select"
            labelId="quantity-select-label"
            value={quantity.toString()}
            label="Quantity"
            onChange={handleQuantityChange}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((qty) => (
              <MenuItem key={qty} value={qty}>
                {qty}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button color="inherit" sx={{ ml: 5 }} onClick={handleDeleteProduct}>
          Delete
        </Button>
      </Box>
    </React.Fragment>
  );
}
