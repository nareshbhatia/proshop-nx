import * as React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import { Product } from '@proshop-nx/domain';

export interface ProductViewProps {
  product: Product;
}

export function ProductView({ product }: ProductViewProps) {
  const router = useRouter();

  return (
    <Card>
      <CardActionArea onClick={() => router.push(`/products/${product.id}`)}>
        <CardMedia
          component="img"
          alt={product.name}
          image={product.photo}
          height={280}
        />
        <CardContent>
          <Typography
            variant="h6"
            component="h3"
            sx={{ fontSize: '1rem' }}
            noWrap
          >
            {product.name}
          </Typography>
          <Typography variant="h5" component="p" color="text.primary">
            {product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
