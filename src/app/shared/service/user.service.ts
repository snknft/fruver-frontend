import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  BASE_URL = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<User[]>(`${this.BASE_URL}/usuarios`);
  }
  getUser(id: number) {
    return this.http.get<User>(
      `${this.BASE_URL}/usuarios/${id}`
    );
  }
  findUser(tipo: string, cedula: string) {
    return this.http.get<User>(
      `${this.BASE_URL}/usuarios/${tipo}/${cedula}`
    );
  }
  createUser(producto: User) {
    return this.http.post<string>(`${this.BASE_URL}/usuarios`, producto);
  }
  updateUser(producto: User) {
    return this.http.put<string>(`${this.BASE_URL}/usuarios`, producto);
  }
  removeUser(idUsero: string) {
    return this.http.delete<string>(`${this.BASE_URL}/usuarios/${idUsero}`);
  }
}
