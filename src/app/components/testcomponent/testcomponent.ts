import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { TestListar } from './test-listar/test-listar';

@Component({
  selector: 'app-testcomponent',
  imports: [RouterOutlet, TestListar],
  templateUrl: './testcomponent.html',
  styleUrl: './testcomponent.css',
})
export class Testcomponent {
  constructor(public route: ActivatedRoute) {}
}