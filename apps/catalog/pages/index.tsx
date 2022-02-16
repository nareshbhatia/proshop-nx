import * as React from 'react';
import { gql } from '@apollo/client';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Category } from '@proshop-nx/domain';
import { Header } from '@proshop-nx/ui-lib';
import { CategoryList } from '../components/CategoryList';
import { ProductCarousel } from '../components/ProductCarousel';
import { apolloClient } from '../graphql/apolloClient';

interface HomePageProps {
  categories: Array<Category>;
}

export default function HomePage({ categories }: HomePageProps) {
  return (
    <React.Fragment>
      <Header />
      <Container maxWidth="xl">
        <Box sx={{ my: 2 }}>
          <ProductCarousel />
          <CategoryList categories={categories} />
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
      query GetCategories {
        categories {
          id
          title
          photo
        }
      }
    `,
  });

  return {
    props: {
      categories: data.categories,
    },
  };
}
