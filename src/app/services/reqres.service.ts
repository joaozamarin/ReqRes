import { User } from './../models/user.model';
import { Api } from './../models/api.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReqresService {
  url: string = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Api[]>(this.url);
  }

  create(user: User) {
    return this.http.post(this.url, user);
  }

  getOne(id: number) {
    return this.http.get<Api>(`${this.url}/${id}`);
  }

  update(user: User, id: number) {
    return this.http.put(`${this.url}/${id}`, user);
  }

  delete(id: number) {
    return this.http.delete(`${this.http}/${id}`);
  }
}
