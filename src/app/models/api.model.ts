import { User } from './user.model';

export interface Api {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[]
}
