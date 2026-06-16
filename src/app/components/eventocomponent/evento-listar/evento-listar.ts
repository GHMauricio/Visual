import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { Evento } from '../../../models/Evento';
import { Eventoservice } from '../../../services/eventoservice';

@Component({
  selector: 'app-evento-listar',
  imports: [MatTableModule, MatIconModule, MatButtonModule, RouterLink],
  templateUrl: './evento-listar.html',
  styleUrl: './evento-listar.css',
})
export class EventoListar implements OnInit {
  dataSource: MatTableDataSource<Evento> = new MatTableDataSource();
  displayedColumns: string[] = [
    'idEvento',
    'idUsuario',
    'tituloEvento',
    'fechaInicio',
    'fechaFin',
    'tipoEvento',
    'acciones',
  ];

  constructor(private eS: Eventoservice) {}

  ngOnInit(): void {
    this.cargarEventos();
  }

  cargarEventos() {
    this.eS.list().subscribe({
      next: (data) => {
        this.dataSource.data = data;
      },
    });
  }
   eliminar(id: number) {
    this.eS.eliminar(id).subscribe((data) => {
      this.eS.list().subscribe((data) => {
        this.dataSource.data = data;
      });
    });
  }
}
