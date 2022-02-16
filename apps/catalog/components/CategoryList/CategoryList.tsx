import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Typography from '@mui/material/Typography';
import { Category } from '@proshop-nx/domain';
import { useRouter } from 'next/router';

interface CategoryListProps {
  categories: Array<Category>;
}

export function CategoryList({ categories }: CategoryListProps) {
  const router = useRouter();

  return (
    <React.Fragment>
      <Typography
        variant="h5"
        align="center"
        sx={{ mt: 4, textTransform: 'uppercase' }}
        component="h2"
      >
        Shop By Category
      </Typography>
      <ImageList cols={3} gap={16}>
        {categories.map((category) => (
          <ImageListItem
            key={category.id}
            sx={{ cursor: 'pointer' }}
            onClick={() => router.push(`/categories/${category.id}`)}
          >
            <img
              src={`${category.photo}?w=248&fit=crop&auto=format`}
              srcSet={`${category.photo}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={category.title}
              loading="lazy"
            />
            <ImageListItemBar title={category.title} position="below" />
          </ImageListItem>
        ))}
      </ImageList>
    </React.Fragment>
  );
}
