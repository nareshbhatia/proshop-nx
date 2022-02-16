import * as React from 'react';
import { gql } from '@apollo/client';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Product } from '@proshop-nx/domain';
import { Header } from '@proshop-nx/ui-lib';
import { useRouter } from 'next/router';
import { ProductList } from '../../components/ProductList';
import { apolloClient } from '../../graphql/apolloClient';

export default function CategoryPage({
  products,
}: {
  products: Array<Product>;
}) {
  const router = useRouter();
  const { categoryId } = router.query;

  return (
    <React.Fragment>
      <Header />
      <Container maxWidth="xl">
        <Typography
          variant="h5"
          sx={{ mt: 4, textTransform: 'uppercase' }}
          component="div"
        >
          {categoryId}
        </Typography>
        <Box sx={{ my: 2 }}>
          <ProductList products={products} />
        </Box>
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
      query GetProducts($categoryId: ID!) {
        products(categoryId: $categoryId) {
          id
          name
          photo
          price
        }
      }
    `,
    variables: {
      categoryId: params?.categoryId,
    },
  });

  return {
    props: {
      products: data.products,
    },
  };
}
