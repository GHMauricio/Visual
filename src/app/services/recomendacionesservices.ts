import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Recomendaciones } from '../models/recomendaciones';

const base_url = environment.base;

@Injectable({
    providedIn: 'root',
})
export class Recomendacionesservices {
    private url = `${base_url}/Recomendaciones-general`;

    constructor(private http: HttpClient) { }

    list() {
        return this.http.get<Recomendaciones[]>(`${this.url}`);
    }

    listbyUser(idUser: number) {
        return this.http.get<Recomendaciones[]>(`${this.url}/Test/${idUser}`);
    }

    insert(e: Recomendaciones) {
        return this.http.post(`${this.url}`, e, { responseType: 'text' });
    }

    update(d: Recomendaciones) {
        return this.http.put(`${this.url}`, d, { responseType: 'text' });
    }

    eliminar(id:number){
      return this.http.delete(`${this.url}/${id}`, { responseType: 'text' });
  }
}
