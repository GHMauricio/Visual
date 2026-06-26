import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recomendacion } from '../models/Recomendacion'; // Ajusta tu ruta

@Injectable({ providedIn: 'root' })
export class BoredApiService {
  
  private apiUrl = 'https://bored.api.lewagon.com/api/activity';

  constructor(private http: HttpClient) {}

  obtenerActividadAleatoria(): Observable<Recomendacion> {
    return this.http.get<Recomendacion>(this.apiUrl);
  }
}