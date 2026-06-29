import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Entrevista } from '../../../models/entrevista';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { entrevistaservice } from '../../../services/entrevistaservice';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filtro-recomendacion',
  imports: [MatTableModule, CommonModule, MatIconModule, ReactiveFormsModule, MatSelectModule],
  templateUrl: './filtro-recomendacion.html',
  styleUrl: './filtro-recomendacion.css',
})
export class FiltroRecomendacion implements OnInit {
  dataSource: MatTableDataSource<Entrevista> = new MatTableDataSource();
  displayedColumns: string[] = ['c1', 'c2', 'c3', 'c4', 'c5'];
  freco: number=0;
  form: FormGroup;



  constructor(
    private eS: entrevistaservice,
    private fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      freco: [''],
    });
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      freco: [''],
    });

    this.eS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.buscar();
  }

  buscar() {
    this.form.get('freco')?.valueChanges.subscribe((tema) => {
      if (tema) {
        this.eS.listbyRecomendacion(Number(tema)).subscribe(data => {
          this.dataSource = new MatTableDataSource(data);
        });
      } else {
        this.eS.list().subscribe((data) => {
          this.dataSource = new MatTableDataSource(data);
        });
      }
    });
  }
}
