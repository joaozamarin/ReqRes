import { Api } from './../models/api.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReqresService {
  users: Api[] = [];

  url: string = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) { }

  getAll() {
    this.http.get<Api[]>(this.url).subscribe((user) => {
      this.users = user;
    })
  }
}
