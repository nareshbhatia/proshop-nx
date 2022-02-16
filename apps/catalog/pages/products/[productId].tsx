import * as React from 'react';
import { gql } from '@apollo/client';
import Container from '@mui/material/Container';
import { Product } from '@proshop-nx/domain';
import { Header } from '@proshop-nx/ui-lib';
import { ProductDetail } from '../../components/ProductDetail';
import { apolloClient } from '../../graphql/apolloClient';

interface ProductPageProps {
  product: Product;
}

export default function ProductPage({ product }: ProductPageProps) {
  return (
    <React.Fragment>
      <Header />
      <Container maxWidth="xl" sx={{ mt: 4 }}>
        <ProductDetail product={product} />
      </Container>
    </React.Fragment>
  );
}

export async function getServerSideProps({ params }) {
  // From https://nextjs.org/docs/basic-features/data-fetching:
  //
  // You should not use fetch() to call an API route in getServerSideProps.
  // Instead, directly import the logic used inside your API route. You may
  // need to slightly refactor your code for this approach.
  //
  // Fetching from an external API is fine!

  const { data } = await apolloClient.query({
    query: gql`
      query GetProduct($productId: ID!) {
        product(productId: $productId) {
          id
          name
          description
          manufacturer
          photo
          price
        }
      }
    `,
    variables: {
      productId: params?.productId,
    },
  });

  return {
    props: {
      product: data.product,
    },
  };
}
