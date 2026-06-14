import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Test } from '../models/Test';

const base_url = environment.base;

@Injectable({
  providedIn: 'root',
})
export class Testservice {
  private url = `${base_url}/Tests-general`;

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Test[]>(`${this.url}`);
  }

  listByUsuario(idUsuario: number) {
    return this.http.get<Test[]>(`${this.url}/Usuario/${idUsuario}`);
  }

  listPuntajeAscendente() {
    return this.http.get<Test[]>(`${this.url}/puntaje-ascendente`);
  }

  insert(t: Test) {
    return this.http.post(`${this.url}`, t, { responseType: 'text' });
  }

  update(t: Test) {
    return this.http.put(`${this.url}`, t, { responseType: 'text' });
  }

  eliminar(id: number) {
    return this.http.delete(`${this.url}/${id}`, { responseType: 'text' });
  }
}