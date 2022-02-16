import * as React from 'react';
import Container from '@mui/material/Container';
import { Header } from '@proshop-nx/ui-lib';
import { useRouter } from 'next/router';
import { ProductDetail } from '../../components/ProductDetail';

const product = {
  id: 'apple-imac',
  name: 'iMac',
  description:
    'The 27‑inch iMac is packed with powerful tools and apps that let you take any idea to the next level. Its superfast processors and graphics, massive memory, and all-flash storage can tackle any workload with ease. And with its advanced audio and video capabilities and stunning 5K Retina display, everything you do is larger than life.',
  manufacturer: 'Apple',
  price: 1299,
  photo:
    'https://firebasestorage.googleapis.com/v0/b/mobx-shop.appspot.com/o/apple-imac.jpg?alt=media&token=69d03695-d57d-4b1a-952c-909a21af9099',
};

export default function ProductPage() {
  const router = useRouter();
  const { productId } = router.query;

  return (
    <React.Fragment>
      <Header />
      <Container maxWidth="xl" sx={{ mt: 4 }}>
        <ProductDetail product={product} />
      </Container>
    </React.Fragment>
  );
}
