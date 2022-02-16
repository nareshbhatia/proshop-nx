import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Header } from '@proshop-nx/ui-lib';
import { useRouter } from 'next/router';
import { ProductList } from '../../components/ProductList';

export default function CategoryPage() {
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
          <ProductList />
        </Box>
      </Container>
    </React.Fragment>
  );
}
