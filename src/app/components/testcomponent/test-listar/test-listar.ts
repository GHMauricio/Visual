import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Test } from '../../../models/Test';
import { Testservice } from '../../../services/testservice';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-test-listar',
  imports: [MatTableModule, MatIconModule, MatButtonModule],
  templateUrl: './test-listar.html',
  styleUrl: './test-listar.css',
})
export class TestListar implements OnInit {
  dataSource: MatTableDataSource<Test> = new MatTableDataSource();
  displayedColumns: string[] = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8'];

  constructor(private tS: Testservice, private router: Router) {}

  ngOnInit(): void {
    this.cargarTests();
  }

  cargarTests() {
    this.tS.list().subscribe({
      next: (data) => {
        this.dataSource.data = data;
      },
    });
  }

  editar(t: Test) {
    this.router.navigate(['/tests/editar', t.idTest]);
  }

  eliminar(id: number) {
    this.tS.eliminar(id).subscribe(() => {
      this.cargarTests();
    });
  }
}