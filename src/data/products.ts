import { Product } from '../components/ProductCard';

export const novoDropProducts: Product[] = [
  {
    id: '1',
    name: 'Moletom Oversized',
    price: 289.90,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop',
    color: 'Cream',
    isNew: true,
  },
  {
    id: '2',
    name: 'Conjunto Comfy',
    price: 349.90,
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800&auto=format&fit=crop',
    color: 'Blush',
    isNew: true,
  },
  {
    id: '3',
    name: 'Shorts Comfy',
    price: 159.90,
    image: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?q=80&w=800&auto=format&fit=crop',
    color: 'Sand',
    isNew: true,
  },
  {
    id: '4',
    name: 'Moletom',
    price: 269.90,
    image: 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?q=80&w=800&auto=format&fit=crop',
    color: 'Sky',
    isNew: true,
  },
];

export const disponivelAgoraProducts: Product[] = [
  {
    id: '5',
    name: 'Calça Jogger',
    price: 229.90,
    image: 'https://images.unsplash.com/photo-1604176354204-9268737828e4?q=80&w=800&auto=format&fit=crop',
    color: 'Sand',
  },
  {
    id: '6',
    name: 'T-shirt Básica',
    price: 119.90,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop',
    color: 'Cream',
  },
  {
    id: '7',
    name: 'Casaco Leve',
    price: 319.90,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800&auto=format&fit=crop',
    color: 'Brown',
  },
  {
    id: '8',
    name: 'Regata Ribana',
    price: 89.90,
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800&auto=format&fit=crop',
    color: 'Cream',
  },
];

export const ultimasUnidadesProducts: Product[] = [
  {
    id: '9',
    name: 'Moletom Clássico',
    price: 249.90,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop',
    color: 'Brown',
  },
  {
    id: '10',
    name: 'Shorts Moletinho',
    price: 139.90,
    image: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?q=80&w=800&auto=format&fit=crop',
    color: 'Cream',
  },
];

export const allProducts: Product[] = [
  ...novoDropProducts,
  ...disponivelAgoraProducts,
  ...ultimasUnidadesProducts,
];
