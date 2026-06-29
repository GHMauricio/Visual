import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { RecomendacionesListar } from './recomendaciones-listar/recomendaciones-listar';

@Component({
  selector: 'app-recomendacionescomponent',
  imports: [RouterOutlet, RecomendacionesListar],
  templateUrl: './recomendacionescomponent.html',
  styleUrl: './recomendacionescomponent.css',
})
export class Recomendacionescomponent {
  constructor(public route:ActivatedRoute){}
}
