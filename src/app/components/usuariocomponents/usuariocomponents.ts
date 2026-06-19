import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Usuariolistar } from './usuariolistar/usuariolistar';

@Component({
  selector: 'app-usuariocomponents',
  imports: [Usuariolistar, RouterOutlet],
  templateUrl: './usuariocomponents.html',
  styleUrl: './usuariocomponents.css',
})
export class Usuariocomponents {

  constructor(public route:ActivatedRoute){}
}
