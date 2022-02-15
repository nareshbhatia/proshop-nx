import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Product } from '@proshop-nx/domain';
import { ProductView } from './ProductView';


// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra-large: 1536px

export function ProductList() {
  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid item key={product.id} xs={6} sm={4} md={3} lg={2}>
          <ProductView key={product.id} product={product} />
        </Grid>
      ))}
    </Grid>
  );
}

const products: Array<Product> = [
  {
    id: 'apple-imac',
    name: 'iMac',
    description:
      'The 27‑inch iMac is packed with powerful tools and apps that let you take any idea to the next level. Its superfast processors and graphics, massive memory, and all-flash storage can tackle any workload with ease. And with its advanced audio and video capabilities and stunning 5K Retina display, everything you do is larger than life.',
    manufacturer: 'Apple',
    price: 1299,
    photo:
      'https://firebasestorage.googleapis.com/v0/b/mobx-shop.appspot.com/o/apple-imac.jpg?alt=media&token=69d03695-d57d-4b1a-952c-909a21af9099',
  },
  {
    id: 'apple-macbook-pro',
    name: 'MacBook Pro',
    description:
      'Designed for those who defy limits and change the world, the 16-inch MacBook Pro is by far the most powerful notebook Apple have ever made. With an immersive Retina display, superfast processors, advanced graphics, the largest battery capacity ever in a MacBook Pro, Magic Keyboard, and massive storage.',
    manufacturer: 'Apple',
    price: 699,
    photo:
      'https://firebasestorage.googleapis.com/v0/b/mobx-shop.appspot.com/o/apple-macbook-pro.jpg?alt=media&token=d2b1cf37-cfe0-4f20-adeb-eaeb472cedaa',
  },
  {
    id: 'apple-ipad',
    name: 'iPad',
    description:
      'Powerful. Easy to use. Versatile. The new iPad is designed for all the things you love to do. Work, play, create, learn, stay connected, and more. All at an incredible value.',
    manufacturer: 'Apple',
    price: 249,
    photo:
      'https://firebasestorage.googleapis.com/v0/b/mobx-shop.appspot.com/o/apple-ipad.jpg?alt=media&token=17ba3b67-5e54-4bf0-8dfb-afb2538355d2',
  },
  {
    id: 'belkin-netcam',
    name: 'Belkin NetCam',
    description:
      "The Belkin NetCam HD+ delivers 720p HD live streaming video to your smartphone or tablet, letting you watch the action in your home from wherever you go. Equipped with a wide-angle glass lens, night vision, and secure Wi-Fi connectivity, the NetCam HD+ ensures you'll always be a part of what's happening at home.",
    manufacturer: 'Belkin',
    price: 99,
    photo:
      'https://firebasestorage.googleapis.com/v0/b/mobx-shop.appspot.com/o/belkin-netcam-hd%2B-wi-fi-camera.jpg?alt=media&token=26babba0-3765-4402-8336-facf19c07ca7',
  },
];
