import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { DetalleTestListar } from './detalletest-listar/detalletest-listar';

@Component({
  selector: 'app-detalletestcomponent',
  imports: [RouterOutlet, DetalleTestListar],
  templateUrl: './detalletestcomponent.html',
  styleUrl: './detalletestcomponent.css',
})
export class Detalletestcomponent {
  constructor(public route: ActivatedRoute) {}
}