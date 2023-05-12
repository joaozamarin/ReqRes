import { UserUpdate } from './../models/userUpdate.model';
import { UserCreate } from './../models/userCreate.model';
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

  create(user: UserCreate): Observable<UserCreate> {
    return this.http.post<UserCreate>(this.url, user).pipe(
      map((retorno) => retorno),
      catchError((erro) => this.exibirErro(erro))
    );
  }

  getOne(id: number): Observable<User> {
    return this.http.get<Api>(`${this.url}/${id}`).pipe(
      map((retorno) => retorno.data),
      catchError((erro) => this.exibirErro(erro))
    );
  }

  update(user: UserUpdate, id: number): Observable<UserUpdate> {
    return this.http.put<UserUpdate>(`${this.url}/${id}`, user).pipe(
      map((retorno) => retorno),
      catchError((erro) => this.exibirErro(erro))
    );
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/${id}`);
  }

  exibirErro(erro: any): Observable<any> {
    const titulo = 'Erro na Conexão';
    const msg = `Verifique sua conexão`;

    alert(titulo + ' ' + msg);

    return EMPTY;
  }
}
