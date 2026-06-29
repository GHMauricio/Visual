import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { HttpClient } from "@angular/common/http";
import { Entrevista } from "../models/entrevista";

const base_url = environment.base;
@Injectable({
  providedIn: 'root',
})

export class entrevistaservice{
    private url = `${base_url}/Entrevista-general`;

    constructor (private http: HttpClient) {}

    list() {
        return this.http.get<Entrevista[]>(`${this.url}/listar`);
    }

    insert(e:Entrevista) {
        return this.http.post(`${this.url}`,e,{ responseType: 'text' });
    }

    eliminar(id:number){
      return this.http.delete(`${this.url}/${id}`, { responseType: 'text' })
    }

    update(e:Entrevista){
      return this.http.put(`${this.url}/${e.idEntrevista}`, e,{ responseType: 'text' })
    }

    listId(id: number) {
        return this.http.get<Entrevista>(`${this.url}/${id}`)
    }
  listTema(tema:string){
      return this.http.get<Entrevista[]>(`${this.url}/tema/${tema}`)
    }

    listbyRecomendacion(id:number){
      return this.http.get<Entrevista[]>(`${this.url}/Recomendacion/${id}`)
    }
}
