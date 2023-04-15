import { User } from './user.model';

export class Api {
  page?: number;
  per_page?: number;
  total?: number;
  total_pages?: number;
  data?: User[];
  support?: {
    url: "https://reqres.in/#support-heading",
    text: "To keep ReqRes free, contributions towards server costs are appreciated!"
  }
}
