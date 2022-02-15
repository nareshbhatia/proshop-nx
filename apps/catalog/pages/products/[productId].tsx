import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Header } from '@proshop-nx/ui-kit';
import { useRouter } from 'next/router';
import { ProductList } from '../../components/ProductList';

export default function ProductPage() {
  const router = useRouter();
  const { productId } = router.query;

  return (
    <React.Fragment>
      <Header />
      <Container maxWidth="xl">
        <Typography
          variant="h5"
          sx={{ mt: 4, textTransform: 'uppercase' }}
          component="div"
        >
          {productId}
        </Typography>
      </Container>
    </React.Fragment>
  );
}
