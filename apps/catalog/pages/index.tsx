import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Header } from '@proshop-nx/ui-kit';
import { ProductCarousel } from '../components/ProductCarousel';

export default function HomePage() {
  return (
    <React.Fragment>
      <Header />
      <Container maxWidth="xl">
        <Box sx={{ my: 2 }}>
          <ProductCarousel />
        </Box>
      </Container>
    </React.Fragment>
  );
}
