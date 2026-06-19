import { Component, OnInit} from '@angular/core';
import { entrevistaservice} from '../../../services/entrevistaservice';
import { Entrevista} from '../../../models/entrevista';
import { MatTableDataSource, MatTableModule} from '@angular/material/table';
import { RouterLink} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-entrevistalistar',
  imports: [RouterLink, MatIconModule,MatButtonModule,MatTableModule],
  templateUrl: './entrevistalistar.html',
  styleUrl: './entrevistalistar.css',
})
export class Entrevistalistar implements OnInit {
  dataSource: MatTableDataSource<Entrevista> = new MatTableDataSource();
  displayedColumns: string[] = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6','c7'];

  constructor(private eS: entrevistaservice) {}
  ngOnInit(): void {
    this.cargarAutores();
  }

  cargarAutores() {
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
