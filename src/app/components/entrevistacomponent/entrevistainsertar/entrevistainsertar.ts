import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';

import { entrevistaservice } from '../../../services/entrevistaservice';
import { Entrevista } from '../../../models/entrevista';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entrevistainsertar',
  imports: [MatInputModule, MatDatepickerModule,MatSelectModule,MatButtonModule,ReactiveFormsModule],
  templateUrl: './entrevistainsertar.html',
  providers:[provideNativeDateAdapter()],
  styleUrl: './entrevistainsertar.css',
})
export class Entrevistainsertar implements OnInit { 
  form: FormGroup = new FormGroup({});
  aut: Entrevista = new Entrevista();

  constructor(
    private eS: entrevistaservice,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {}
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      recomendacion: ['', Validators.required],
      fecha: ['', Validators.required],
      tema: ['', Validators.required],
      comentarios: ['', Validators.required],
    });
  }
  aceptar() {
    if (this.form.valid) {
      ((this.aut.idRecomendacion = this.form.value.recomendacion),
        (this.aut.fechaEntrevista = this.form.value.fecha));
      this.aut.temaEntrevista = this.form.value.tema;
      this.aut.comentarioEntrevista=this.form.value.comentarios;
      this.eS.insert(this.aut).subscribe({
        next: () => {
          this.router.navigate(['/entrevistas/listar']);
        },
      });
    }
  }
}
