import { Component } from '@angular/core';
import { Entrevistalistar } from "./entrevistalistar/entrevistalistar";
import { ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-entrevistacomponent',
  imports: [Entrevistalistar,RouterOutlet],
  templateUrl: './entrevistacomponent.html',
  styleUrl: './entrevistacomponent.css',
})
export class Entrevistacomponent {

  constructor(public route:ActivatedRoute){}
}
