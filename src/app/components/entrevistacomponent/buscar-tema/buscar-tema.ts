import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Entrevista } from '../../../models/entrevista';
import { entrevistaservice } from '../../../services/entrevistaservice';


@Component({
  selector: 'app-buscar-tema',
  imports: [MatTableModule, CommonModule, MatIconModule, ReactiveFormsModule, MatSelectModule],
  templateUrl: './buscar-tema.html',
  styleUrl: './buscar-tema.css',
})
export class BuscarTema implements OnInit {
  dataSource: MatTableDataSource<Entrevista> = new MatTableDataSource();
  displayedColumns: string[] = ['c1', 'c2', 'c3', 'c4', 'c5'];
  ftema: string = '';
  form: FormGroup;

temas: { value: string; viewValue: string }[] = [
    { value: 'DEPORTES', viewValue: 'DEPORTES' },
    { value: 'AMIGOS', viewValue: 'AMIGOS' },
    { value: 'REDES', viewValue: 'REDES' },
    { value: 'SEXO', viewValue: 'SEXO' },
    { value: 'ESCUELA', viewValue: 'ESCUELA' },
  ];

  constructor(
    private eS: entrevistaservice,
    private fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      ftema: [''],
    });
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      ftema: [''],
    });

    this.eS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.buscar();
  }

  buscar() {
    this.form.get('ftema')?.valueChanges.subscribe((tema) => {
      if (tema) {
        this.eS.listTema(String(tema)).subscribe(data => {
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
