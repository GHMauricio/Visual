import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment.development';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/Usuario';

const base_url = environment.base;
@Injectable({
  providedIn: 'root',
})
export class Serviceusuario {
  private url = `${base_url}/Usuarios-general`;

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Usuario[]>(`${this.url}/listar`);
  }

  insert(u: Usuario) {
    return this.http.post(`${this.url}/Registrar`,u,);
  }
eliminar(id:number){
  return this.http.delete(`${this.url}/${id}`, { responseType: 'text' })
}
update(u:Usuario){
  return this.http.put(`${this.url}`, u,{ responseType: 'text' })
}

listId(id: number) {
    return this.http.get<Usuario>(`${this.url}/${id}`)
  }

}
