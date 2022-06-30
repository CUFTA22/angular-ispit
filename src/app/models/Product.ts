export class ProductModel {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  status: 'cancelled' | 'finished' | 'upcoming';
  rating: 1 | 2 | 3 | 4 | 5;
}
