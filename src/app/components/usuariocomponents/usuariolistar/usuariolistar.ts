import { Component, OnInit } from '@angular/core';
import { Serviceusuario } from '../../../services/serviceusuario';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { Usuario } from '../../../models/Usuario';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-usuariolistar',
  imports: [MatTableModule,MatIconModule,MatButtonModule,RouterLink],
  templateUrl: './usuariolistar.html',
  styleUrl: './usuariolistar.css',
})
export class Usuariolistar implements OnInit {
  dataSource: MatTableDataSource<Usuario> = new MatTableDataSource();
  displayedColumns: string[] = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6','c7','c8','c9','c10','c11','c12'];

  constructor(private uS: Serviceusuario) {}
  ngOnInit(): void {
    this.cargarAutores();
  }

  cargarAutores() {
    this.uS.list().subscribe({
      next: (data) => {
        this.dataSource.data = data;
      },
    });
  }
  eliminar(id: number) {
    this.uS.eliminar(id).subscribe((data) => {

      this.uS.list().subscribe((data) => {
        this.dataSource.data = data;
        
      });
    });
  }


}
