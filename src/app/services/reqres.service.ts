import { User } from './../models/user.model';
import { Api } from './../models/api.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReqresService {
  url: string = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Api> {
    return this.http.get<Api>(this.url);
  }

  create(user: User) {
    return this.http.post(this.url, user);
  }

  getOne(id: number) {
    return this.http.get<Api>(`${this.url}/${id}`).pipe(
      map((retorno) => retorno.data),
      catchError((erro) => this.exibirErro(erro))
    );
  }

  update(user: User, id: number) {
    return this.http.put(`${this.url}/${id}`, user);
  }

  delete(id: number) {
    return this.http.delete(`${this.http}/${id}`);
  }

  exibirErro(erro: any): Observable<any> {
    const titulo = 'Erro na Conexão';
    const msg = `Verifique sua conexão`;

    alert(titulo + ' ' + msg);

    return EMPTY;
  }
}
