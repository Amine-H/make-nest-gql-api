import { Category } from './category.interface';

export interface Instrument {
  id: string;
  name: string;
  brand: string;
  category: Category;
  price: number;
}
