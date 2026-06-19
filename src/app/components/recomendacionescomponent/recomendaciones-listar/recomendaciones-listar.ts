import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Recomendaciones } from '../../../models/Recomendaciones';
import { Recomendacionesservices } from '../../../services/recomendacionesservices';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recomendaciones-listar',
  imports: [MatTableModule, MatIconModule, MatButtonModule],
  templateUrl: './recomendaciones-listar.html',
  styleUrl: './recomendaciones-listar.css',
})
export class RecomendacionesListar implements OnInit {
  dataSource: MatTableDataSource<Recomendaciones> = new MatTableDataSource();
  displayedColumns: string[] = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7'];

  constructor(private dtS: Recomendacionesservices, private router: Router) { }

  ngOnInit(): void {
    this.cargarDetalles();
  }

  cargarDetalles() {
    this.dtS.list().subscribe({
      next: (data) => {
        this.dataSource.data = data;
      },
    });
  }
  editar(d: Recomendaciones) {
    this.router.navigate(['/detallestest/editar', d.idRecomendacion]);
  }

  eliminar(id: number) {
    this.dtS.eliminar(id).subscribe(() => {
      this.cargarDetalles();
    });
  }

}
