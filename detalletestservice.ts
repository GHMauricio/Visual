import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { DetalleTest } from '../models/DetalleTest';

const base_url = environment.base;

@Injectable({
  providedIn: 'root',
})
export class Detalletestservice {
  private url = `${base_url}/DetalleTest-general`;

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<DetalleTest[]>(`${this.url}`);
  }

  listByTest(idTest: number) {
    return this.http.get<DetalleTest[]>(`${this.url}/Test/${idTest}`);
  }

  listByRespuesta(respuesta: string) {
    return this.http.get<DetalleTest[]>(`${this.url}/respuesta/${respuesta}`);
  }

  insert(d: DetalleTest) {
    return this.http.post(`${this.url}`, d, { responseType: 'text' });
  }

  update(d: DetalleTest) {
    return this.http.put(`${this.url}`, d, { responseType: 'text' });
  }

  eliminar(id: number) {
    return this.http.delete(`${this.url}/${id}`, { responseType: 'text' });
  }
}