import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';

export function CategoryList() {
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
            key={category.img}
            sx={{ cursor: 'pointer' }}
            onClick={() => router.push(`/categories/${category.id}`)}
          >
            <img
              src={`${category.img}?w=248&fit=crop&auto=format`}
              srcSet={`${category.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
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

const categories = [
  {
    id: 'breakfast',
    title: 'Breakfast',
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
  },
  {
    id: 'burger',
    title: 'Burger',
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
  },
  {
    id: 'camera',
    title: 'Camera',
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
  },
  {
    id: 'coffee',
    title: 'Coffee',
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
  },
  {
    id: 'hats',
    title: 'Hats',
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
  },
  {
    id: 'honey',
    title: 'Honey',
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
  },
  {
    id: 'basketball',
    title: 'Basketball',
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
  },
  {
    id: 'fern',
    title: 'Fern',
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
  },
  {
    id: 'mushrooms',
    title: 'Mushrooms',
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
  },
  {
    id: 'tomato-basil',
    title: 'Tomato basil',
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
  },
  {
    id: 'sea-star',
    title: 'Sea star',
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
  },
  {
    id: 'bike',
    title: 'Bike',
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
  },
];
