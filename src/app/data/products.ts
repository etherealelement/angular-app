import { IProduct } from './products.interface';

export const products: IProduct[] = [
  {
    id: 1,
    title: 'Book',
    price: 120,
    description: 'Your perfect book',
    category: 'math',
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 2,
    title: 'Book',
    price: 420,
    description: 'Your perfect book 2',
    category: 'math',
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
];
