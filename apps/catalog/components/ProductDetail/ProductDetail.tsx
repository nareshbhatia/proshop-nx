import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Product } from '@proshop-nx/domain';

export interface ProductDetailProps {
  product: Product;
}

export function ProductDetail({ product }: ProductDetailProps) {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6}>
        <img
          src={product.photo}
          alt={product.name}
          width="100%"
          loading="lazy"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box sx={{ display: 'flex' }}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" component="h2">
              {product.name}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Typography variant="body1" component="p">
                Price:
              </Typography>
              &nbsp;
              <Typography variant="h5" component="p" color="text.primary">
                {product.price}
              </Typography>
            </Box>
          </Box>
          <Button variant="contained" color="secondary" sx={{ height: 36 }}>Add to Cart</Button>
        </Box>
        <Typography variant="body1" component="p">
          {product.description}
        </Typography>
      </Grid>
    </Grid>
  );
}
