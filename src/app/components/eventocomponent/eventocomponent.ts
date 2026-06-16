import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { EventoListar } from './evento-listar/evento-listar';

@Component({
  selector: 'app-eventocomponent',
  imports: [RouterOutlet, EventoListar],
  templateUrl: './eventocomponent.html',
  styleUrl: './eventocomponent.css',
})
export class Eventocomponent {

  constructor(public route:ActivatedRoute){}

}
