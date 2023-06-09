import { User } from './user.model';

export class Api {
  page!: number;
  per_page!: number;
  total!: number;
  total_pages!: number;
  data!: User[];
  support!: {
    url: string,
    text: string
  }
}
