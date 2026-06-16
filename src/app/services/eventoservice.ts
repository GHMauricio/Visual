import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Evento } from '../models/Evento';

const base_url = environment.base;

@Injectable({
  providedIn: 'root',
})
export class Eventoservice {
  private url = `${base_url}/Evento-general`;

  constructor (private http: HttpClient){}

  list(){
    return this.http.get<Evento[]>(`${this.url}`);
  }

  insert(e: Evento){
    return this.http.post(`${this.url}`, e, {responseType: 'text'});
  }

  eliminar(id:number){
      return this.http.delete(`${this.url}/${id}`, { responseType: 'text' });
  }

   update(e: Evento) {
      return this.http.put(`${this.url}`, e, { responseType: 'text' });
    }
}
