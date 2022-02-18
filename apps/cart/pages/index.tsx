import * as React from 'react';
import { gql } from '@apollo/client';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Cart } from '@proshop-nx/domain';
import { Header } from '@proshop-nx/ui-lib';
import { apolloClient } from '../graphql/apolloClient';
import { CartView } from '../components/CartView';

interface HomePageProps {
  cart: Cart;
}

export default function HomePage({ cart }: HomePageProps) {
  return (
    <React.Fragment>
      <Header />
      <Container maxWidth="xl">
        <Box sx={{ my: 2 }}>
          <CartView cart={cart} />
        </Box>
      </Container>
    </React.Fragment>
  );
}

export async function getServerSideProps() {
  // From https://nextjs.org/docs/basic-features/data-fetching:
  //
  // You should not use fetch() to call an API route in getServerSideProps.
  // Instead, directly import the logic used inside your API route. You may
  // need to slightly refactor your code for this approach.
  //
  // Fetching from an external API is fine!

  const { data } = await apolloClient.query({
    query: gql`
      query GetCart {
        cart {
          id
          items {
            id
            product {
              name
            }
            price
            quantity
          }
          totalPrice
          totalQuantity
        }
      }
    `,
  });

  return {
    props: {
      cart: data.cart,
    },
  };
}
