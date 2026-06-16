import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { DetalleTest } from '../../../models/DetalleTest';
import { Detalletestservice } from '../../../services/detalletestservice';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalletest-listar',
  imports: [MatTableModule, MatIconModule, MatButtonModule],
  templateUrl: './detalletest-listar.html',
  styleUrl: './detalletest-listar.css',
})
export class DetalleTestListar implements OnInit {
  dataSource: MatTableDataSource<DetalleTest> = new MatTableDataSource();
  displayedColumns: string[] = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7'];

  constructor(private dtS: Detalletestservice, private router: Router) {}

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

  editar(d: DetalleTest) {
    this.router.navigate(['/detallestest/editar', d.idDetalleTest]);
  }

  eliminar(id: number) {
    this.dtS.eliminar(id).subscribe(() => {
      this.cargarDetalles();
    });
  }
}